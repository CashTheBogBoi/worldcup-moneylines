import { defineConfig } from "vite";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Durable, git-backed persistence for all model-training state. The app keeps everything the
// algorithm learns from (graded model picks, team ratings, intel notes, results-based Elo,
// snapshots) in browser localStorage, which is fragile: it's keyed by origin, so a dev-server
// restart on a different port (5173 vs 5177) makes the data look wiped, and a browser clear
// loses it entirely. This plugin exposes GET/POST /api/state backed by a JSON file INSIDE the
// vault, so the training set survives restarts, port changes, and browser clears — and can be
// committed to git for permanent durability. In a static production build there is no dev
// server, so the app falls back to localStorage (see main.jsx).
// One durable JSON file per mount, all inside the vault:
//   /api/state -> 03-App/model-training-state.json (graded picks, ratings, intel, Elo, ...)
//   /api/stats -> 03-App/stats-history.json         (fetched stats: xERA, run diffs, Kalshi)
// The stats file exists so live-fetched FACTS (pitching/batting stats) are never thrown away —
// they persist as a fallback (model keeps working when a fetch fails) and as a time series.
function fileEndpoint(mountPath, fileName) {
  const file = path.resolve(__dirname, "03-App", fileName);
  return (req, res) => {
    if (req.method === "GET") {
      try {
        const data = fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "{}";
        res.setHeader("Content-Type", "application/json");
        res.end(data || "{}");
      } catch {
        res.statusCode = 500;
        res.end("{}");
      }
      return;
    }
    if (req.method === "POST") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk;
      });
      req.on("end", () => {
        try {
          const parsed = JSON.parse(body); // validate + pretty-print for clean git diffs
          fs.writeFileSync(file, JSON.stringify(parsed, null, 2));
          res.setHeader("Content-Type", "application/json");
          res.end('{"ok":true}');
        } catch {
          res.statusCode = 400;
          res.end('{"ok":false}');
        }
      });
      return;
    }
    res.statusCode = 405;
    res.end();
  };
}

function vaultStatePersistence() {
  return {
    name: "vault-state-persistence",
    configureServer(server) {
      server.middlewares.use("/api/state", fileEndpoint("/api/state", "model-training-state.json"));
      server.middlewares.use("/api/stats", fileEndpoint("/api/stats", "stats-history.json"));
    }
  };
}

export default defineConfig(({ command }) => ({
  // GitHub Pages serves this project site under /worldcup-moneylines/, so the built asset URLs
  // must be relative. Dev keeps the normal root base so the /kalshi and /api proxies resolve.
  base: command === "build" ? "./" : "/",
  plugins: [vaultStatePersistence()],
  server: {
    proxy: {
      // Kalshi's API 403s any request carrying a browser `Origin` header, so a direct
      // client-side fetch can never work. This proxy forwards a same-origin `/kalshi/...`
      // path to Kalshi server-side with the Origin header stripped. Live Kalshi futures then
      // work in `npm run dev`; a static production build falls back to the saved snapshot.
      "/kalshi": {
        target: "https://api.elections.kalshi.com",
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/kalshi/, ""),
        configure: (proxy) => {
          proxy.on("proxyReq", (proxyReq) => proxyReq.removeHeader("origin"));
        }
      }
    }
  }
});
