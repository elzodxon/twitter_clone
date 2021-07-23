import Vue from 'vue'
import Router from 'vue-router'
import NotFound from './views/NotFound.vue'
import Twitter from "./views/Twitter";
import News from './views/News'
import SingleNews from './views/News/_id'
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
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: `/news/:id`,
      name: 'SingleNews',
      component: SingleNews
    },
    {
      path: '*',
      redirect: { name: 'not-found' }
    }
  ]
})
