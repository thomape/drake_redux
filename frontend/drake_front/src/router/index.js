import Vue from "vue";
import VueRouter from "vue-router";
import OverviewComp from "@/components/Overview/OverviewComp";
import OverviewTimelineComp from "@/components/Overview/OverviewTimelineComp";
import OverviewHistoryComp from "@/components/Overview/OverviewHistoryComp";
import DrakeComp from "@/components/Drake/DrakeComp";
import DrakeCalcComp from "@/components/Drake/DrakeCalcComp";
import DrakeHistoryComp from "@/components/Drake/DrakeHistoryComp";
import FermiComp from "@/components/Fermi/FermiComp";
import FermiHistoryComp from "@/components/Fermi/FermiHistoryComp";
import TwinComp from "@/components/Twin/TwinComp";
import TwinCalculatorComp from "@/components/Twin/TwinCalculatorComp";
import TwinHistoryComp from "@/components/Twin/TwinHistoryComp";
import TravelComp from "@/components/Travel/TravelComp";
import TravelCalculatorComp from "@/components/Travel/TravelCalculatorComp";
import TravelHistoryComp from "@/components/Travel/TravelHistoryComp";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "root",
    component: OverviewComp,
  },
  {
    path: "/overview",
    name: "overview",
    component: OverviewComp,
  },
  {
    path: "/timeline",
    name: "timeline",
    component: OverviewTimelineComp,
  },
  {
    path: "/history",
    name: "history",
    component: OverviewHistoryComp,
  },
  {
    path: "/drake",
    name: "drake",
    component: DrakeComp,
  },
  {
    path: "/drakeCalculator",
    name: "drakeCalculator",
    component: DrakeCalcComp,
  },
  {
    path: "/drakeHistory",
    name: "drakeHistory",
    component: DrakeHistoryComp,
  },
  {
    path: "/fermi",
    name: "fermi",
    component: FermiComp,
  },
  {
    path: "/fermiHistory",
    name: "fermiHistory",
    component: FermiHistoryComp,
  },
  {
    path: "/twin",
    name: "twin",
    component: TwinComp,
  },
  {
    path: "/twinCalculator",
    name: "twinCalculator",
    component: TwinCalculatorComp,
  },
  {
    path: "/twinHistory",
    name: "twinHistory",
    component: TwinHistoryComp,
  },
  {
    path: "/travel",
    name: "travel",
    component: TravelComp,
  },
  {
    path: "/travelCalculator",
    name: "travelCalculator",
    component: TravelCalculatorComp,
  },
  {
    path: "/travelHistory",
    name: "travelHistory",
    component: TravelHistoryComp,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
