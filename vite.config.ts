import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/",
  },

  // 🚨 disable SSR behavior for deployment stability
  tanstackStart: {
    server: false,
  },
});