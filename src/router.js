import { createWebHistory, createRouter } from "vue-router";

import mainPage from "@/views/mainPage";

const routes = [
    {
        path: "/",
        component: mainPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 