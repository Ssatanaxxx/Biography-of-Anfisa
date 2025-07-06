import { defineConfig } from "vite";

export default defineConfig({
  server: {
    proxy: {
      // Перенаправлять все запросы, начинающиеся с /api, на сервер
      "/api": {
        target: "http://localhost:4000", // ваш серверный порт
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // опционально: убрать /api из пути
      },
    },
  },
});

/// <reference types="vite/client" />
