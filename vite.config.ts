import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import type { UserConfig as VitestUserConfigInterface } from "vitest/config";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";
const vitestConfig: VitestUserConfigInterface = {
  test: {
    globals: true,
  },
};

export default defineConfig({
  plugins: [checker({ typescript: true }), react()],
  test: vitestConfig.test,
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
