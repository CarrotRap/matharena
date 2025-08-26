import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import ExercicesView from "../views/Exercices.vue";
import PublishView from "../views/Publish.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/exercices',
      name: 'exercices',
      component: ExercicesView,
    },
    {
      path: '/publish',
      name: 'publish',
      component: PublishView,
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('../views/Account.vue'),
    },
    {
      path: '/connect',
      name: 'connect',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Connection.vue')
    },
  ],
})

export default router
