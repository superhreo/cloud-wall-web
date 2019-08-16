import Vue from 'vue'
import Router from 'vue-router'
import ItemList from '../components/ItemList'
import ItemDetail from '../components/ItemDetail'

Vue.use(Router)

export default new Router({
  routes: 
  [
    {
      path:'/',
      redirect:'/itemList/0'
    },
    {
      name:'itemList',
      path:'/itemList/:condition',
      component:ItemList
    },
    {
      name:'itemDetail',
      path:'/itemDetail',
      component:ItemDetail
    }
  ]
})
