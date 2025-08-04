import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          icons: [
            "react-icons/ri",
            "react-icons/io",
            "react-icons/fa6",
            "react-icons/fa",
            "react-icons/bs",
            "react-icons/lia",
            "react-icons/io5",
            "react-icons/rx",
            "react-icons/tb",
            "react-icons/cg",
            "react-icons/fi",
          ],
          router: ["react-router-hash-link"],
          email: ["@emailjs/browser", "emailjs"],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-icons/ri",
      "react-icons/io",
      "react-icons/fa6",
    ],
  },
});
