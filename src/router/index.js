import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CSRNewAnalysis from '../views/CSRNewAnalysis.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/csrnewanalysis",
    name: "csr-new-analysis",
    component: CSRNewAnalysis
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  // adding the stuff below based on troubleshooting instructions from the theme installation cheat sheet. 
  // then commented it out bc it didn't seem to help
  // watch: {
  //   '$route': function() {
  //     window.location.reload();
  //   }
  // }
})

export default router
