import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Search from '../views/PlayerSearch.vue';
import Profile from '../views/PlayerProfile.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', component: Search },
  { path: '/profile/:id', component: Profile }
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router; 
