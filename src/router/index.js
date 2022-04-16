import { createWebHistory, createRouter } from "vue-router";
import About from "@/components/About";
import HomePage from "@/components/HomePage";
import Register from "@/components/register/Register";

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
    {
        path: "/acheter-voiture",
        name: "Register",
        component: Register,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
