import Vue from "vue";
import VueRouter from "vue-router";
import Intro from "../views/Intro.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Intro",
    component: Intro
  },
  {
    path: "/supply",
    name: "Supply",
    component: () =>
      import(/* webpackChunkName: "supply" */ "../views/Supply.vue")
  },
  {
    path: "/request",
    name: "Request",
    component: () =>
      import(/* webpackChunkName: "request" */ "../views/Request.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
