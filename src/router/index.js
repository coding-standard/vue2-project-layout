import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/first',
    name: 'Chia',
    component: () => import('../views/First.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/Empty.vue')
  },
  {
    path: '/join',
    name: 'Join',
    component: () => import('../views/Empty.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Empty.vue')
  },
  {
    path: '/others',
    name: 'Others',
    component: () => import('../views/Empty.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
