import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'AppTrack Studio' }
  },
  {
    path: '/register',
    name: 'Register',
    meta: { title: 'AppTrack Studio' },
    component: () => import(/* webpackChunkName: "login" */ '../views/Register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: { title: 'AppTrack Studio' },
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/logout',
    name: 'Logout',
    meta: { title: 'AppTrack Studio' },
    component: () => import(/* webpackChunkName: "logout" */ '../components/Logout.vue')
  },
  {
    path: '/apps',
    name: 'Apps',
    meta: { title: 'AppTrack Studio' },
    component: () => import(/* webpackChunkName: "login" */ '../views/Applications.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
