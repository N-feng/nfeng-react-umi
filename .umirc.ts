import { defineConfig } from "umi";

export default defineConfig({
  plugins: ['@umijs/plugins/dist/react-query'],
  reactQuery: {},
  routes: [
    { path: "/", component: "index" },
    { path: "/login", component: "login" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: 'pnpm',
});
