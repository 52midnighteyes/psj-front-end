import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) {
            return;
          }

          if (
            id.includes("react-dom") ||
            id.includes("react-router") ||
            id.includes("/react/")
          ) {
            return "react-vendor";
          }

          if (
            id.includes("formik") ||
            id.includes("yup") ||
            id.includes("@types/yup")
          ) {
            return "form-vendor";
          }

          if (
            id.includes("embla-carousel-react") ||
            id.includes("embla-carousel")
          ) {
            return "carousel-vendor";
          }

          if (
            id.includes("sonner") ||
            id.includes("next-themes") ||
            id.includes("lucide-react")
          ) {
            return "ui-feedback-vendor";
          }

          if (id.includes("vaul") || id.includes("radix-ui")) {
            return "overlay-vendor";
          }
        },
      },
    },
  },
});
