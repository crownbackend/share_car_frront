import { createWebHistory, createRouter } from "vue-router";
import About from "@/components/About";
import HomePage from "@/components/HomePage";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomePage,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
