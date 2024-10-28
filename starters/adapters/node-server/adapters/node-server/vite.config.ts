import { nodeServerAdapter } from "@qwik.dev/router/adapters/node-server/vite";
import { extendConfig } from "@qwik.dev/router/vite";
import baseConfig from "../../vite.config";

export default extendConfig(baseConfig, () => {
  return {
    build: {
      ssr: true,
      rollupOptions: {
        input: ["src/entry.node-server.tsx", "@qwik-router-config"],
      },
    },
    plugins: [nodeServerAdapter({ name: "node-server" })],
  };
});
