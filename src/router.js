import { createWebHistory, createRouter } from "vue-router";

import mainPage from "@/views/mainPage";
import loginPage from "@/views/loginPage";
import signupPage from "@/views/signupPage";

const routes = [
    {
        path: "/",
        component: mainPage,
        name : "main",
    },
    {
        path: "/login",
        component: loginPage,
        name : "login",
    },
    {
        path: "/signup",
        component: signupPage,
        name : "signup",
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 