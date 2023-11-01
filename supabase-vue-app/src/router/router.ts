import { createRouter, createWebHistory } from 'vue-router';
import AuthPage from '../pages/AuthPage.vue';
import HomePage from '../pages/HomePage.vue';

const routes = [
    {path: '/auth', component: AuthPage},
    {path: '/', component: HomePage}
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.push('/auth');

export default router;