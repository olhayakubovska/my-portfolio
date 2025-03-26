import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import commonjs from 'vite-plugin-commonjs';


export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ["babel-plugin-styled-components"],
      },
    }),  commonjs()
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  optimizeDeps: {
    include: ["react-slick"]
  }
});