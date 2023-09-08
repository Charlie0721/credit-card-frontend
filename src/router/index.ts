import { createRouter, createWebHistory } from 'vue-router';
import Signup from '../users/components/Signup.vue'
import ListUsers from '../users/components/ListUsers.vue'
import Login from '../users/components/Login.vue'
import EditUser from '../users/components/EditUser.vue'
import CardApplication from '../card-application/components/CardApplication.vue'

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
    {
        path: '/users/edit-user/:userId',
        name: 'EditUser',
        component: EditUser,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/card-application',
        name: 'CardApplication',
        component: CardApplication,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;
