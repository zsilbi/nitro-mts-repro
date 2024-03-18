import typescript from "@rollup/plugin-typescript";

//https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: "server",
  rollupConfig: {
    plugins: [typescript()],
  },
});
