// Railway/Node deployment config
// Replaces @lovable.dev/vite-tanstack-config (Cloudflare-only wrapper)
// with direct TanStack Start plugins targeting Node.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tanstackStart({
      server: {
        preset: "node-server",
        entry: "src/server.ts",
      },
    }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
