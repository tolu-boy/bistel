import Vue from 'vue'
import Vuex from 'vuex'
import food1 from '@/assets/images/food1.jpg'
import food2 from '@/assets/images/food2.jpg'
import food3 from '@/assets/images/food3.jpg'


Vue.use(Vuex)


export const store = new Vuex.Store({
    state: {
        topRated: [
            { id: 1, name: 'The South"s Best Fried Chicken', price: 2000, desc: 'Fried Chicken with cheese', url: food1 },
            { id: 2, name: 'The South"s Best Fried Chicken', price: 2000, desc: 'Fried Chicken with cheese', url: food2 },
            { id: 3, name: 'The South"s Best Fried Chicken', price: 2000, desc: 'Fried Chicken with cheese', url: food3 },

        ],
        count: 14,
        cartItemCount: 0,
        cartItems: []

    },
    getters: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        }
    },
    mutations: {
        increment(state) {
            state.count++
        }
    },

    actions: {
        increment(context) {
            context.commit('increment')
        }
    }
})