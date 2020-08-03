import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { store } from "./store";

import itemDetail from "./components/itemDetail.vue";
import Home from "./components/Home.vue";

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  {
    name: "itemDetail",
    path: "/items/:index",
    component: itemDetail,
    props: true,
  },
  { name: "Home", path: "/", component: Home },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount("#app");
