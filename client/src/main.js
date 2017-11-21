import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import router from './router'
import BootstrapVue from 'bootstrap-vue'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
