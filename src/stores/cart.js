import {defineStore} from 'pinia';
import {getCookie} from './authentication';
import {getAuthenticatedUser} from './authentication';

export const useCartStore = defineStore({
    id: 'cart',
    state: () => ({
        carts:[]
    }),
    actions: {
        addProductToCart(item){
            if (this.isInCart(item)){
                this.updateProductInCart(item.id, item.quantity + 1);
            } else {
                let cartItem = {
                    "id": item.id,
                    "quantity": 1,
                    "product": item
                }
                this.carts.push(cartItem);
            }
        },
        updateProductInCart(id, product, newQuantity){
            if (id===null && newQuantity===null) {
            } else {
                const index = this.findIndexById(id);
                if (index !== -1) {
                    this.carts[index] = {
                        "id": id,
                        "quantity": newQuantity,
                        "product": product
                    }
                }
            }
        },
        removeProductFromCart(id) {
            const index = this.findIndexById(id);
            if (index === -1) {
            } else {
                this.carts.splice(index, 1);
            }
        },
        findIndexById(id){
            return this.carts.findIndex((item) => item.id === id);
        },
        isInCart(item) {
            if (this.carts === null){return false}
            let inCart = false;
            this.carts.forEach(value => function (){
                if (value === item){
                    inCart = true;
                }
            })
            return inCart;
        },
        emptyCart(){
            this.carts=[];
            fetch("https://gr14.appdev.cloudns.ph/api/cart", {
                method: 'DELETE',
                headers: {
                    'Authorization': 'bearer: ' + getCookie('jwt')
                }
            })
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