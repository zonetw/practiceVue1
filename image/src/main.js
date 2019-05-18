import Vue from 'vue';
import VueRouter from "vue-router";
import App from './App';
import AuthHandler from "./components/AuthHandler";
import store from "./store";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history", // use browser router or will use hash router
  routes: [
    { path: "/oauth2/callback/", component: AuthHandler }
  ]
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
