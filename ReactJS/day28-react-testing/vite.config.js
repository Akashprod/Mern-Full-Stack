import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true, // optional: allows using global test functions like describe, it, etc.
    setupFiles: "./src/__tests__/button.test.jsx", // optional: for jest-dom and other setup
  },
});
