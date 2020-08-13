import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: '',
      component: () => import('../components/index/Index')
    },
    {
      path: '/home',
      name: 'index',
      component: () => import('../components/index/Index')
    },
    {
      path: '/classify',
      name: 'classify',
      component: () => import('../components/classify/Classify')
    },
    {
      path: '/time',
      name: 'time',
      component: () => import('../components/timeshaft/TimeShaft')
    },
    {
      path: '/website',
      name: 'website',
      component: () => import('../components/website/Website')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../components/aboutme/AboutMe')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('../components/detail/BlogDetail')
    }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, saveTop){
    if (saveTop) {
      return saveTop;
    } else {
      return {x: 0, y: 0}
    }
  },
})

export default router
