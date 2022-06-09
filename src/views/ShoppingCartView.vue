<template>
  <div id="content">
    <h1>Shopping Cart</h1>
    <table id="shopping-cart">
      <thead>
      <tr>
        <th>Product</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Subtotal</th>
        <th>Remove</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="cart in carts" :key="cart.id" class="cart">
        <!------- Product -------->
        <td>
          <div>
            <img :src="cart.product.image_path" />
            <label>{{ cart.product.name }}</label>
          </div>
        </td>
        <td>
          {{ cart.product.price }} kr
        </td>
        <td>
          <input class="quantity" type="number" :value="cart.quantity" />
        </td>
        <td>
          <span class="sub-total"> {{cart.quantity * cart.product.price}} kr </span>
        </td>
        <td>
          <button class="delete-button" @click="removeFromCart(cart.product.id)">
            <span class="material-symbols-rounded">Delete</span>
          </button>
        </td>
      </tr>
      </tbody>
    </table>
    <AppButton text="Checkout" @click="checkOut"></AppButton>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useCartStore } from "@/stores/cart";
import AppButton from "@/components/AppButton.vue";
const cartStore = useCartStore();
cartStore.getCart();
const { carts } = storeToRefs(cartStore);
</script>

<script defer>
import { useCartStore } from "@/stores/cart";
const cartStore = useCartStore();

function removeFromCart(id){
  cartStore.removeProductFromCart(id)
}

function checkOut(){
  cartStore.checkOut();
}

export default {
  methods: {
    removeFromCart,
    checkOut
  }
}
</script>

<style>
#content {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 30rem 1fr;
}
h1{
  grid-area: 1/1/2/2;
}

#shopping-cart{
  border-spacing: 0;
}

tbody{
  margin: 2rem;
}

tbody tr{
  background-color: #b0b0b0;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-bottom: solid black;
}

tbody tr td div img{
  width: 10vw;
  height: 10vw;
  float: left;
}

tbody tr td div{
  display: flex;
}

app-button{
}
</style>