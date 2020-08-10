import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import store from "./store";
import VueTimepicker from "vue2-timepicker/src/vue-timepicker.vue";
import "./assets/App.scss";

Vue.component("VueTimepicker", VueTimepicker);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
