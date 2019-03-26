import Vue from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserCircle,
  faHeart,
  faBars,
  faSearch,
  faStar,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import axios from "axios";
import VueAxios from "vue-axios";
import VueFire from "vuefire";
import VueRouter from "vue-router";
import "./assets/fb";
import router from "./router";

Vue.use(VueAxios, axios, VueFire, VueRouter);
Vue.prototype.$axios = axios;

library.add(faUserCircle, faHeart, faBars, faSearch, faStar, faSignOutAlt);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  // router,
  render: h => h(App)
}).$mount("#app");
