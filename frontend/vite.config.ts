import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import commonjs from "vite-plugin-commonjs";

export default defineConfig({
  base: "/my-portfolio",
  plugins: [
    react({
      babel: {
        plugins: ["babel-plugin-styled-components"],
      },
    }),
    commonjs(),
  ],
  server: {
    // Всё, что начинается с /api, будет отправляться на localhost:5000
    // "/api": {
    //   target: "http://localhost:5000",
    //   changeOrigin: true,
    //   secure: false,
    // },
    proxy: {
      "/api": {
        target: "http://localhost:5001",
        changeOrigin: true,
        secure: false,
      },
    },
  },

  resolve: {
    alias: {
      "@": "/src",
    },
  },
  optimizeDeps: {
    include: ["react-slick"],
  },
});
