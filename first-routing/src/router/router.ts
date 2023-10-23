import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Contact from '../pages/Contact.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/', component:  Home },
    { path: '/about', component:  About },
    { path: '/contact', component:  Contact },
]

export const router = createRouter({
    history: createWebHistory(),
    routes
});
