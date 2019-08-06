import Vue from 'vue'
import Router from 'vue-router'

// 懒加载
const home = () => import('@/components/home.vue');
const admin = () => import('@/components/admin.vue');
const itemList = () => import('@/components/itemList.vue');
const itemDetail = () => import('@/components/itemDetail.vue');

Vue.use(Router)

export default new Router({
  routes: [ 
    {
      path: '/',
      name: 'home',
      component: home
    },{
      path: '/home',
      name: 'home',
      component: home
    },{
      path: '/admin',
      name: 'admin',
      component: admin
    },{
      path: '/itemList',
      name: 'itemList',
      component: itemList
    },{
      path: '/itemDetail',
      name: 'itemDetail',
      component: itemDetail
    }
  ]
})
