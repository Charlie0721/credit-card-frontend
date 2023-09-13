import { createRouter, createWebHistory } from 'vue-router';
import Signup from '../users/components/Signup.vue'
import ListUsers from '../users/components/ListUsers.vue'
import Login from '../users/components/Login.vue'
import EditUser from '../users/components/EditUser.vue'
import CardApplication from '../card-application/components/CardApplication.vue'
import RequestConfirmation from '../card-application/components/RequestConfirmation.vue'
import CheckApplicationStatus from '../card-application/components/CheckApplicationStatus.vue'
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
        path: '/card-application/:userId',
        name: 'CardApplication',
        component: CardApplication,
    },
    {
        path: '/confirm-request',
        name: 'RequestConfirmation',
        component: RequestConfirmation,
    },
    {
        path: '/check-status/:userId',
        name: 'CheckApplicationStatus',
        component: CheckApplicationStatus,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;
