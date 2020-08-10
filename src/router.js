import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/list",
    name: "List",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("./views/List.vue"),
  },
  {
    path: "/report",
    name: "Report",
    component: () => import("./views/Report.vue"),
  },
  {
    path: "/updateData",
    name: "UpdateData",
    component: () => import("./views/UpdateData.vue"),
  },
  {
    path: "/addData",
    name: "AddData",
    component: () => import("./views/AddData.vue"),
  },
  {
    path: "/config",
    name: "Config",
    component: () => import("./views/Config.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
