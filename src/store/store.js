import Vue from "vue";
import Vuex from "vuex";
import food1 from "@/assets/images/food1.jpg";
import food2 from "@/assets/images/food2.jpg";
import food3 from "@/assets/images/food3.jpg";
import axios from 'axios'

const resource_url = "http://bisteltest.herokuapp.com/api/v1/products";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        topRated: [{
                id: 1,
                name: 'The South"s Best Fried Chicken',
                price: 2500,
                desc: "Fried Chicken with cheese",
                url: food1,
            },
            {
                id: 2,
                name: 'The South"s Best Fried Chicken',
                price: 3000,
                desc: "Fried Chicken with cheese",
                url: food2,
            },
            {
                id: 3,
                name: 'The South"s Best Fried Chicken',
                price: 2000,
                desc: "Fried Chicken with cheese",
                url: food3,
            },

            {
                id: 4,
                name: 'The South"s Best Fried Chicken',
                price: 2000,
                desc: "Fried Chicken with cheese",
                url: food2,
            },
            {
                id: 5,
                name: 'The South"s Best Fried Chicken',
                price: 2100,
                desc: "Fried Chicken with cheese",
                url: food1,
            },
            {
                id: 6,
                name: 'The South"s Best Fried Chicken',
                price: 2200,
                desc: "Fried Chicken with cheese",
                url: food3,
            },
        ],
        topRated1: [],
        count: 14,
        cartItemCount: 0,
        cartItems: [],

    },
    getters: {
        doneTodos: (state) => {
            return state.count;
        },
    },
    mutations: {
        add(state, payload) {
            let item = payload;
            item = {...item, quantity: 1 };
            if (state.cartItems.length > 0) {
                let bool = state.cartItems.some((i) => i.id == item.id);
                if (bool) {
                    let itemIndex = state.cartItems.findIndex((el) => el.id == item.id);
                    state.cartItems[itemIndex]["quantity"] += 1;
                } else {
                    state.cartItems.push(item);
                }
            } else {
                state.cartItems.push(item);
            }
            state.cartItemCount++;
        },

        remove(state, payload) {
            if (state.cartItems.length > 0) {
                let bool = state.cartItems.some(i => i.id === payload.id);

                if (bool) {
                    let index = state.cartItems.findIndex(el => el.id === payload.id);

                    if (state.cartItems[index]["quantity"] !== 0) {
                        state.cartItems[index]["quantity"] -= 1;
                        state.cartItemCount--;
                    }
                    if (state.cartItems[index]["quantity"] === 0) {
                        state.cartItems.splice(index, 1)
                    }

                }
            }
        },
        cget: (state, topRated1) => state.topRated1 = topRated1
    },

    actions: {
        add: (context, payload) => {
            context.commit("add", payload);
        },

        remove: (context, payload) => {
            context.commit("remove", payload);
        },


        async cget({ commit }) {
            const response = await axios.get(resource_url).catch(error => {
                console.log(error.response)
            });
            commit('cget', response.data.data)

            console.log(response.data.data);

        }
    },
});