import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Recommend from '@/components/recommend/recommend'
import Rank from '@/components/rank/rank'
import Singer from '@/components/singer/singer'
import Search from '@/components/search/search'
import 'common/stylus/index.styl'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:Recommend
    },
    {
      path:'/recommend',
      component:Recommend
    },
    {
      path:'/singer',
      component:Singer
    },
    {
      path:'/rank',
      component:Rank
    },
    {
      path:'/search',
      component:Search
    },
  ]
})
