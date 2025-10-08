import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Sunday-Roles-2025-26/", // MUST match repo name exactly
});
