import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios';
import VueAxios from 'vue-axios'

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(VueAxios,axios);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
