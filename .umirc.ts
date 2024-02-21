import { defineConfig } from "umi";

export default defineConfig({
  plugins: ['@umijs/plugins/dist/react-query'],
  reactQuery: {},
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: "/", component: "index", name: "home" },
        { path: "/docs", component: "docs", name: "docs" },
        { path: "/products", component: "products", name: "products" },
      ]
    },
    { path: "/login", component: "login", name: "login" },
  ],
  npmClient: 'pnpm',
});
