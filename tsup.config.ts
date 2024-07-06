import { defineConfig as tsupConfig } from "tsup";

export default tsupConfig({
  entryPoints: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  sourcemap: true,
  minify: true,
  external: ["react", "react-dom"],
  target: "node14",
  ignoreWatch: ["**/node_modules/**"],
});
