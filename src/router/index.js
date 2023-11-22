

import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@pg/Layout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@pg/Home/Home.vue')
        },
        {
          path: '/men',
          name: 'men',
          component: () => import('@pg/Men/Men.vue')
        },
        {
          path: '/women',
          name: 'women',
          component: () => import('@pg/Women/Women.vue')
        },
        {
          path: '/kids',
          name: 'kids',
          component: () => import('@pg/Kids/Kids.vue')
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('@pg/About/About.vue')
        },
        {
          path: '/contact',
          name: 'contact',
          component: () => import('@pg/Contact/Contact.vue')
        },
      ]
    },
    {
      path: "/signin",
      name: "signin",
      component: () => import("@pg/Auth/SignIn.vue"), 
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("@pg/Auth/SignUp.vue"), 
    },
    {
      path: "/:pathMatch(.*)*",
      name: "error",
      component: () => import("@pg/Error/Error.vue")
    },
  ]
})

export default router
