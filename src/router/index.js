import { createWebHistory, createRouter } from "vue-router";
import About from "@/components/About";
import HomePage from "@/components/HomePage";
import Register from "@/components/register/Register";
import Login from "@/components/security/Login";

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
    {
        path: "/connexion",
        name: "Login",
        component: Login,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
