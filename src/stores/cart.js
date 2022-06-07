import {defineStore} from 'pinia';
import {getCookie} from './authentication';
import {getAuthenticatedUser} from './authentication';

export const useCartStore = defineStore({
    id: 'cart',
    state: () => ({
        carts:[]
    }),
    actions: {
        async addProductToCart(item) {
            if (this.findIndexById(item.id) !== -1) {
                await this.updateProductInCart(item.id, item, item.quantity + 1);
            } else {
                const response = await fetch("https://gr14.appdev.cloudns.ph/api/cart/" + item.id + "/" + 1, {
                    method: 'PUT',
                    headers: {
                        'Authorization': 'bearer: ' + getCookie('jwt')
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
                    const response = await fetch("https://gr14.appdev.cloudns.ph/api/cart/" + item.id + "/" + newQuantity, {
                        method: 'PUT',
                        headers: {
                            'Authorization': 'bearer: ' + getCookie('jwt')
                        }
                    })
                    this.carts = await response.json();
                }
            }
            await this.getCart();
        },
        async removeProductFromCart(id) {
            await fetch("https://gr14.appdev.cloudns.ph/api/cart/" + id, {
                method: 'DELETE',
                headers: {
                    'Authorization': 'bearer: ' + getCookie('jwt')
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
        }/*,
        isInCart(item) {
            if (this.carts === null){return false}
            let inCart = false;
            this.carts.forEach(value => function (){
                if (value === item){
                    inCart = true;
                }
            })
            return inCart;
        }*/,
        async emptyCart() {
            this.carts = [];
            await fetch("https://gr14.appdev.cloudns.ph/api/cart", {
                method: 'DELETE',
                headers: {
                    'Authorization': 'bearer: ' + getCookie('jwt')
                }
            })
            await this.getCart();
        },
        async getCart(){
            const response = await fetch("https://gr14.appdev.cloudns.ph/api/cart", {
                method: 'GET',
                headers: {
                    'Authorization': 'bearer: ' + getCookie('jwt')
                }
            })
            this.carts = await response.json();
        }
    },
    getters: {

    }
})