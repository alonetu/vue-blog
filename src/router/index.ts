import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: '/login'
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login/index.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home/index.vue"),
    children: [
      {
        path: "blog",
        name: "Blog",
        component: () => import("../views/Blog/index.vue"),
        meta: {
          title: 'blog'
        }
      },
      {
        path: "user",
        name: "User",
        component: () => import("../views/User/index.vue"),
        meta: {
          title: 'user'
        }
      },
    ],
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: () => import("../views/BlogDetail/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
