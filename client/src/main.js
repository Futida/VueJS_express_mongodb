import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import router from './router'
import 'vuetify/dist/vuetify.css'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuetify);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
