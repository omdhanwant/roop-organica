
import Vue from 'vue'
import App from './App.vue'

// router
import route from './router';


//jquery
import 'jquery/dist/jquery.slim.min.js';

// bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.css';

// font awesome
import './css/all.min.css';

// aos
import AOS from "aos";
import "aos/dist/aos.css";

// filters
import './services/filters';

// image lazy loading
import VueTinyLazyloadImg from 'vue-tiny-lazyload-img';
require('intersection-observer');


Vue.config.productionTip = false

Vue.use(route.VueRouter)
Vue.use(VueTinyLazyloadImg);


new Vue({
  created() {
    AOS.init({ enable: "phone" });
  },
  router: route.router,
  render: h => h(App),
}).$mount('#app')
