import { defineStore } from 'pinia'
import axios from 'axios'

/*
interface Cart {
    cid: string
    products: Array<{ id: number, qty: number }>
}

interface State {
    cart: Cart | []
}

export const useCartStore = defineStore({
    id: cart,
    state: () => ({ cart: [] } as State),
    actions: {

    }
}
*/
export const useCartStore = defineStore({
    id: 'cart',
    state: () => ({
        cart: []
    }),
    getters: {

    },
    actions: {
        addToCart(product) {
            this.cart.push(product);
        }
    }
})