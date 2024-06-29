import { createRouter, createWebHistory } from 'vue-router';
import List from '../views/list.vue';
import Hello from '../components/HelloWorld.vue';
import Home from '../views/home.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/list', component: List },
  { path: '/hello', component: Hello },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
