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
        cart: [],
        uniqueProducts: []
    }),

    getters: {
        UniqueProducts: (state) => state.uniqueProducts,
    },
    actions: {
        addToCart(product) {
            this.cart.push(product);
            if (productAmount[cart[i].id]) {
                productAmount[cart[i].id]++;
            } else {
                productAmount[cart[i].id] = 1;
            }
            if (!uniqueProductIDs.includes(cart[i].id)) {
                uniqueProductIDs.push(cart[i].id);
                uniqueProducts.push(cart[i]);
            }
        },

        removeFromCart(id) {
            const index = this.cart.findIndex((product) => {
                return product.id === id;
            });
            this.cart.splice(index, 1);
            console.log(this.cart);
        }
    }
})