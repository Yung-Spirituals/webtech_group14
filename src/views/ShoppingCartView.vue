<template>
  <div class="content">
    <h1 class="title">Shopping Cart</h1>
    {{ cart }}
    <section id="cart-container" class="container my-5">
      <table width="100%">
        <thead>
          <tr>
            <td>Remove</td>
            <td>Image</td>
            <td>Product</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Total</td>
            <td>Total</td>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="product in uniqueProducts"
            :key="product.id"
            class="product"
          >
            <td>
              <span
                id="deleteButton"
                class="material-symbols-rounded"
                @click="removeFromCart(product.id)"
              >
                delete
              </span>
            </td>
            <td><img :src="product.image_path" width="30" height="30" /></td>
            <td>
              <h5>{{ product.name }}</h5>
            </td>
            <td>{{ product.price }}</td>
            <td>
              {{ productAmount[product.id] }}
            </td>
            <td>{{ productAmount[product.id] * product.price }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script setup>
import { useCartStore } from "@/stores/cart";
const cartStore = useCartStore();
const cart = cartStore.cart;
const productAmount = {};
const uniqueProductIDs = [];
const uniqueProducts = [];

for (var i = 0; i < cart.length; i++) {
  if (productAmount[cart[i].id]) {
    productAmount[cart[i].id]++;
  } else {
    productAmount[cart[i].id] = 1;
  }
  if (!uniqueProductIDs.includes(cart[i].id)) {
    uniqueProductIDs.push(cart[i].id);
    uniqueProducts.push(cart[i]);
  }
}

function removeFromCart(id) {
  cartStore.removeFromCart(id);
  console.log("Hei");
}
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  padding: 2rem;
}
.title {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.table {
  display: grid;
  grid-template-areas:
    "productTitle amountTitle priceTitle totalTitle deleteTitle"
    "product      amount      price       total      delete"
    "checkout     checkout    checkout    checkout   checkout";
  grid-template-columns: 100px 1fr 100px;
  grid-template-columns: 2fr 0.5fr 0.5fr 0.5fr 0.5fr;
}

#cart-container table {
  border-collapse: collapse;
  width: 100%;
  table-layout: fixed;
}

#cart-container table thead {
  font-weight: 700;
}

#cart-container table thead td {
  background: #55d6aa;
  border: none;
  padding: 6px;
}

#cart-container table td {
  border: 1px solid #b6b3b3;
  text-align: center;
}

#deleteButton:hover {
  cursor: pointer;
  user-select: none;
}

#productTitle {
  grid-area: productTitle;
}
#amountTitle {
  grid-area: amountTitle;
}
#priceTitle {
  grid-area: priceTitle;
}
#totalTitle {
  grid-area: totalTitle;
}
#deleteTitle {
  grid-area: deleteTitle;
}

#productColumn {
  grid-area: product;
}
#amountColumn {
  grid-area: amount;
}
#priceColumn {
  grid-area: price;
}
#totalColumn {
  grid-area: total;
}
#deleteColumn {
  grid-area: delete;
}

.table {
  grid-area: table;
  display: grid;
}
h1 {
  grid-area: title;
}
</style>