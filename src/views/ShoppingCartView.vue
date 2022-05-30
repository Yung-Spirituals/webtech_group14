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
          <input type="number" value="1" />
        </td>
        <td>
          {{cart.quantity}}
        </td>
        <td>
          <button class="delete-button"><span class="material-symbols-rounded">delete</span></button>
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
const store = useCartStore();
store.getCart();
const { carts } = storeToRefs(store);
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
</style>