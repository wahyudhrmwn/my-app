import { createRouter, createWebHashHistory, } from 'vue-router'
import FirstPage from '../views/FirstPage.vue'
import SecondPage from '../views/SecondPage.vue'
import LoginPage from '../views/LoginPage.vue'
import CounterPage from '../views/SelectCounter.vue'
import AdminPage from '../views/AdminPage.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FirstPage
    },
    {
      path: '/second',
      name: 'secondpage',
      component: SecondPage
    },
    {
      path: '/login',
      name: 'loginpage',
      component: LoginPage
    },
    {
      path: '/counter',
      name: 'counterpage',
      component: CounterPage
    },
    {
      path: '/admin',
      name: 'adminpage',
      component: AdminPage
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
