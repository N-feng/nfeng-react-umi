import { defineConfig } from "umi";

export default defineConfig({
  plugins: [
    "@umijs/plugins/dist/react-query",
  ],
  reactQuery: {},
  routes: [
    { path: "/login", component: "login", name: "login" },
    { path: "/", component: "index", name: "home" },
    { path: "/docs", component: "docs", name: "docs" },
    { path: "/products", component: "products", name: "products",
      routes: [
        { path: "/files/:id", component: "files/[id]", name: "files:[id]" },
      ]
    },
    { path: "/user", component: "user", name: "user" },
  ],
  proxy: {
    "/api": {
      target: "http://localhost:3001",
      changeOrigin: true,
      // pathRewrite: { "^/api": "" },
    },
  },
  npmClient: "yarn",
});
