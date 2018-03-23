import Vue from 'vue'
import Router from 'vue-router'
import DashBoard from '@/components/DashBoard'
import UserDetail from '@/components/UserDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/user/:id/',
      name: 'UserDetail',
      component: UserDetail
    },
    {
      path: '/',
      name: 'DashBoard',
      component: DashBoard
    }
  ]
})
