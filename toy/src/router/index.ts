import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/Home'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About'),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
