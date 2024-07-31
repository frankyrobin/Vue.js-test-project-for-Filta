import { createRouter, createWebHistory } from 'vue-router';
import AppHome from '../views/AppHome.vue';
import Exercise1 from '../exercise1/App.vue';
import Exercise2 from '../exercise2/App.vue';

const routes = [
  {
    path: '/',
    name: 'AppHome',
    component: AppHome
  },
  {
    path: '/exercise1',
    name: 'ExerciseOne',
    component: Exercise1
  },
  {
    path: '/exercise2',
    name: 'ExerciseTwo',
    component: Exercise2
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
