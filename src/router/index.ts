import { createRouter, createWebHistory } from 'vue-router';
import Signup from '../users/components/Signup.vue'

const routes = [
    {
        path: '/',
        name: 'Signup',
        component: Signup,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;
