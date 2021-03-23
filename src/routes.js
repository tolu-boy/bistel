import Home from "@/components/Home";
import contact from "@/components/contact";
import login from "@/components/login";
import cart from "@/components/cart";
import signup from "@/components/signup";
import foodDetails from "@/components/food-details";

export default [{
        path: "/",
        component: Home,
        name: Home
    },

    {
        path: "/contact",
        component: contact,
        name: contact
    },

    {
        path: "/login",
        component: login,
        name: login
    },

    {
        path: "/cart",
        component: cart,
        name: cart
    },

    {
        path: "/signup",
        component: signup,
        name: signup
    },

    {
        path: "/food-details/:id",
        component: foodDetails,
    },
];