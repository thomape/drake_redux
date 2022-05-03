import Vue from "vue";
import VueRouter from "vue-router";
import HomeComp from "@/components/HomeComp";
import DrakeComp from "@/components/DrakeComp";
import FermiComp from "@/components/FermiComp";
import TwinsComp from "@/components/TwinsComp";
import TravelComp from "@/components/TravelComp";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeComp,
  },
  {
    path: "/drake",
    name: "drake",
    component: DrakeComp,
  },
  {
    path: "/fermi",
    name: "fermi",
    component: FermiComp,
  },
  {
    path: "/twins",
    name: "twins",
    component: TwinsComp,
  },
  {
    path: "/travel",
    name: "travel",
    component: TravelComp,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
