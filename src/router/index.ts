import { useAuthFacade } from '@/store/auth/AuthFacade';
import {
    createRouter,
    createWebHistory,
    RouteLocationNormalized,
    RouteRecordRaw
} from "vue-router";
import SignIn from "../views/SignIn.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "SignIn",
        component: SignIn
    },
    {
        path: "/signup",
        name: "SignUp",
        component: () => import("../views/SignUp.vue")
    },
    {
        path: "/main",
        name: "Main",
        redirect: "/main/wallet",
        children: [
            {
                path: "wallet",
                name: "PasswordWallet",
                component: () => import("../views/PasswordWallet.vue")
            },
            {
                path: "change-password",
                name: "ChangePassword",
                component: () => import("../views/ChangePassword.vue")
            },
            {
                path: "add-password",
                name: "AddPassword",
                component: () => import("../views/AddPassword.vue")
            }
        ],
        beforeEnter: (to: RouteLocationNormalized, from, next: Function) => {
            const { getIsLoginFlag } = useAuthFacade();
            if (getIsLoginFlag()) {
                next();
            } else {
                next('/');
            }
        },
        component: () => import("../views/Main.vue")
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
