import { createRouter, createWebHistory } from 'vue-router';
import Computed from '../views/computed.vue';
import List from '../views/list.vue';
import Hello from '../components/HelloWorld.vue';
import Form1 from '../views/from.vue';
import Life from '../views/life.vue';
import MouseTracker from '../views/MouseTracker.vue'; 
import Home from '../views/home.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/computed', component: Computed },
  { path: '/list', component: List },
  { path: '/hello', component: Hello },
  { path: '/form1', component: Form1 },
  { path: '/life', component: Life },
  { path: '/mousetracker', component: MouseTracker } 
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
