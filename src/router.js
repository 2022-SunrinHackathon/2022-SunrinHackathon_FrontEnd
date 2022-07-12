import { createWebHistory, createRouter } from "vue-router";

import mainPage from "@/views/mainPage";
import loginPage from "@/views/loginPage";

const routes = [
    {
        path: "/",
        component: mainPage
    },
    {
        path: "/login",
        component: loginPage
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 