import VueRouter from 'vue-router'
import CreateUser from '../components/CreateUser.vue'
import ListUsers from '../components/ListUsers.vue'
import Home from '../components/Home.vue'

const routes = [
  { path: '/create', component: CreateUser },
  { path: '/list-users', component: ListUsers },
  { path: '/', component: Home },
  //{ path: '/*', redirect: '/' }
];

export default new VueRouter({
  mode: 'history',
  routes
});


