import Vue from 'vue'
import Router from 'vue-router'
import NotFound from './views/NotFound.vue'
import Twitter from "./views/Twitter";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: {name: 'twitter'}
    },
    {
      path: '/not-found',
      name: 'not-found',
      component: NotFound
    },

    {
      path: '/twitter',
      name: 'twitter',
      component: Twitter
    },
    {
      path: '*',
      redirect: { name: 'not-found' }
    }
  ]
})
