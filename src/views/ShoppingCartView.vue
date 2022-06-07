<template>
  <div id="content">
    <h1>Shopping Cart</h1>
    <table>
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
            <img :src="cart.product.image_path" alt=""/>
            <label>{{ cart.product.name }}</label>
          </div>
        </td>
        <td>
          {{ cart.product.price }}
        </td>
        <td>
          <input type="number" :value="cart.quantity" />
        </td>
        <td>
          {{cart.quantity * cart.product.price}}
        </td>
        <td>
          <button class="delete-button" @click="removeFromCart(cart.product.id)">
            <span class="material-symbols-rounded">Delete</span> <span>{{cart.product.price}}</span>
          </button>
        </td>
      </tr>
      </tbody>
      <tfoot>
      <tr>
      <td>
        sum
      </td>
      <td>
        99999$
      </td>
      </tr>
      </tfoot>
    </table>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useCartStore } from "@/stores/cart";
const cartStore = useCartStore();
cartStore.getCart();
const { carts } = storeToRefs(cartStore);
</script>

<script>
import { useCartStore } from "@/stores/cart";
const cartStore = useCartStore();

function removeFromCart(id){
  cartStore.removeProductFromCart(id)
}

export default {
  methods: {
    removeFromCart
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

.product-id{
  display: none;
}
</style>