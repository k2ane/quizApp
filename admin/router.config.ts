import type { ConfigInput } from "@tanstack/router-plugin";

export default {
  routesDirectory: "./src/routes",
  generatedRouteTree: "./src/routeTree.gen.ts",
  routeFileIgnorePrefix: "-",
  quoteStyle: "single",
} satisfies ConfigInput;
