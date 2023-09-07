import { createRouter, createWebHistory } from 'vue-router';
import Signup from '../users/components/Signup.vue'
import ListUsers from '../users/components/ListUsers.vue'
const routes = [
    {
        path: '/',
        name: 'Signup',
        component: Signup,
    },
    {
        path: '/users',
        name: 'ListUsers',
        component: ListUsers,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;
