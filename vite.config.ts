import { fileURLToPath, URL } from "node:url";

import { ConfigEnv, defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv) => {
  const cwd = process.cwd();
  const env = { ...loadEnv(mode, cwd, "VITE_") };

  return {
    plugins: [vue()],
    server: { port: Number(env?.VITE_PORT ?? 3000) },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/variables.scss";`,
        },
      },
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  };
});
