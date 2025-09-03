import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import ExercicesView from "../views/Exercices.vue";
import PublishView from "../views/Publish.vue";
import AccountView from '../views/Account.vue';
import ConnectionView from '../views/Connection.vue';


const router = createRouter({
  history: createWebHistory('/'),
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
      component: AccountView,
    },
    {
      path: '/connect',
      name: 'connect',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ConnectionView
    },
  ],
})

export default router
