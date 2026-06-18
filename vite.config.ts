import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },

    // 🚀 Enable Vercel SSR adapter
    nitro: {
      preset: "vercel",
    },
  },
});