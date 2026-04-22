export default defineConfig({
    vite: {
      resolve: { tsconfigPaths: {} },
      plugins: [tsconfigPaths(), tailwindcss()],
    },
    ...
  });