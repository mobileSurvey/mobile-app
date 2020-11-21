import { createRouter, createWebHistory } from '@ionic/vue-router';
import Tabs from '../views/Tabs.vue'

const routes = [
  {
    path: '/',
    // redirect: '/tabs/tab1'
    component: () => import('@/views/Login.vue'),
    meta: {
      requiresAuth: false
  }
  
  },
  {
    path: '/map',
    // redirect: '/tabs/tab1'
    component: () => import('@/views/map.vue'),
    meta: {
      requiresAuth: false
  }
  
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: 'tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1.vue'),
        meta: {
          requiresAuth: true
      }
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2.vue'),
        meta: {
          requiresAuth: true
      }
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3.vue'),
        meta: {
          requiresAuth: true
      }
      }
      ,
      {
        path: 'tab4',
        component: () => import('@/views/Tab4.vue')
      }
      ,
      {
        path: 'tab5',
        component: () => import('@/views/Tab5.vue')
      },
      {
        path: 'tab6',
        component: () => import('@/views/Tab6.vue')
      }
    ]
  }
]

import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  const ret = await Storage.get({ key: 'token' });
  const user = JSON.parse(ret.value);
  // console.log(user)
  if(to.matched.some(record => record.meta.requiresAuth)) {
  
    console.log(ret)
      if (!user.token ) {
          next({
              path: '/',
              query: { tujuan: to.fullPath }
          })
      } else {
        
          next()
      }
  } else if(to.matched.some(record => record.meta.guest)) {
    // console.log(localStorage.getItem('token'))
      // if(!localStorage.getItem('token') || localStorage.getItem('token')  == "undefined" || localStorage.getItem('token') == '' ){
      //     next()
      // }
      // else{
      //     next({ name: 'dashboard'})
      // }
  }else {
      next()
  }
})
export default router
