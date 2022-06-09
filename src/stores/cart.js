import {defineStore} from 'pinia';
import {getCookie} from './authentication';
import {getAuthenticatedUser} from './authentication';

export const useCartStore = defineStore({
    id: 'cart',
    state: () => ({
        carts:[]
    }),
    actions: {
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
        async removeProductFromCart(id) {
            await fetch("https://gr14.appdev.cloudns.ph/cart/delete-cart/" + id, {
                method: 'DELETE',
                headers: {
                    'Authorization': 'Bearer ' + getCookie('jwt')
                }
            });
            await this.getCart()
        },
        findIndexById(id){
            if (this.carts.length < 0) {
                return this.carts.findIndex((item) => item.id === id);
            } else {
                return -1;
            }
        },
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