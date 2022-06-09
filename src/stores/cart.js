import {defineStore} from 'pinia';
import {getCookie} from './authentication';
import {getAuthenticatedUser} from './authentication';

export const useCartStore = defineStore({
    id: 'cart',
    state: () => ({
        carts:[]
    }),
    actions: {
        /**
         * Adds a new product to the cart
         * @param item
         * @param quantity
         * @returns {Promise<void>}
         */
        async addProductToCart(item, quantity) {
            if (this.findIndexById(item.id) !== -1) {
                await this.updateProductInCart(item.id, item, quantity);
            } else {
                const response = await fetch("https://gr14.appdev.cloudns.ph/cart/update-cart/" + item.id + "/" + 1, {
                    method: 'POST',
                    headers: {
                        'Authorization': 'Bearer ' + getCookie('jwt')
                    }
                })
                this.carts = await response.json();
                await this.getCart();
            }
        },
        /**
         * updates the quantity of an item in the cart
         * @param id
         * @param item
         * @param newQuantity
         * @returns {Promise<void>}
         */
        async updateProductInCart(id, item, newQuantity) {
            if (id === null && newQuantity === null) {
            } else {
                const index = this.findIndexById(id);
                if (index !== -1) {
                    const response = await fetch("https://gr14.appdev.cloudns.ph/cart/update-cart/" + item.id + "/" + newQuantity, {
                        method: 'POST',
                        headers: {
                            'Authorization': 'Bearer ' + getCookie('jwt')
                        }
                    })
                    this.carts = await response.json();
                }
            }
            await this.getCart();
        },
        /**
         * removes a singular product from the shopping cart
         * @param id
         * @returns {Promise<void>}
         */
        async removeProductFromCart(id) {
            await fetch("https://gr14.appdev.cloudns.ph/cart/delete-cart/" + id, {
                method: 'DELETE',
                headers: {
                    'Authorization': 'Bearer ' + getCookie('jwt')
                }
            });
            await this.getCart()
        },
        /**
         * Checks if the product is already in your cart and at what index it is.
         * @param id
         * @returns {number}
         */
        findIndexById(id){
            if (this.carts.length < 0) {
                return this.carts.findIndex((item) => item.id === id);
            } else {
                return -1;
            }
        },
        /**
         * Empties you shopping cart
         * @returns {Promise<void>}
         */
        async emptyCart() {
            this.carts = [];
            await fetch("https://gr14.appdev.cloudns.ph/cart/empty-cart", {
                method: 'DELETE',
                headers: {
                    'Authorization': 'Bearer ' + getCookie('jwt')
                }
            })
            await this.getCart();
        },
        /**
         * Places an order with everything that was in your cart and clears your cart
         * @returns {Promise<void>}
         */
        async checkOut(){
            this.carts = [];
            const response = await fetch("https://gr14.appdev.cloudns.ph/order/new-order", {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + getCookie('jwt')
                }
            })
            await this.getCart();
        },
        /**
         * Requests all products in our shopping cart from the server and stores in a state
         * @returns {Promise<void>}
         */
        async getCart(){
            const response = await fetch("https://gr14.appdev.cloudns.ph/cart/get-cart", {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + getCookie('jwt')
                }
            })
            this.carts = await response.json();
        }
    },
    getters: {

    }
})