import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
//export default defineConfig(({ mode }) => ({
//  server: {
//    host: "::",
//    port: 8080,
//  },
// ...existing code...
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    cors: {
      origin: [
        "https://chatwoot-v4-lp-alan-adv.ylkjah.easypanel.host",
        "http://chatwoot-v4-lp-alan-adv.ylkjah.easypanel.host"
      ],
      credentials: true
    }
  },
  preview: {
    allowedHosts: ["chatwoot-v4-lp-alan-adv.ylkjah.easypanel.host",
                   "lp-alan.compostoweb.com.br"
                  ]
  },
  // ...existing code...

  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
