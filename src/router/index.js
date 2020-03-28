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
    path: "/supply/:drug/add",
    name: "SupplyAdd",
    component: () =>
      import(/* webpackChunkName: "supply" */ "../views/SupplyEdit.vue")
  },
  {
    path: "/supply/:drug/edit",
    name: "SupplyEdit",
    component: () =>
      import(/* webpackChunkName: "supply" */ "../views/SupplyEdit.vue")
  },
  {
    path: "/request",
    name: "Request",
    component: () =>
      import(/* webpackChunkName: "request" */ "../views/Request.vue")
  },
  {
    path: "/request/:id",
    name: "RequestDrug",
    component: () =>
      import(/* webpackChunkName: "request" */ "../views/RequestDrug.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
