import { createWebHistory, createRouter } from "vue-router";

import mainPage from "@/views/mainPage";
import loginPage from "@/views/loginPage";
import signupPage from "@/views/signupPage";

const routes = [
    {
        path: "/",
        component: mainPage
    },
    {
        path: "/login",
        component: loginPage
    },
    {
        path: "/signup",
        component: signupPage
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 