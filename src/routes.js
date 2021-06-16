import Home from "@/components/Home";
import contact from "@/components/contact";
import login from "@/components/login";
import cart from "@/components/cart";
import signup from "@/components/signup";
import tolu from "@/components/tolu";
import emptycart from "@/components/emptycart";
import dashboard from "@/components/admin/dashboard";



export default [{
        path: "/",
        component: Home,
    },

    {
        path: "/contact",
        component: contact,
    },

    {
        path: "/login",
        component: login,
    },

    {
        path: "/cart",
        component: cart,
    },

    {
        path: "/signup",
        component: signup,
    },



    {
        path: '/tolu/:userId',
        name: 'tolu',
        component: tolu
    },



    {
        path: "/emptycart",
        component: emptycart,
    },

    {
        path: "/dashboard",
        component: dashboard,
        meta: { isAdmin: true }
    },





];