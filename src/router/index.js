import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Pakera from '@/components/Pakera'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Pakera',
      name: 'Pakera',
      component: Pakera
    }
  ]
})
