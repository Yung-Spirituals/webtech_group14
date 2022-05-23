<template>
  <div class="content">
    <h1 class="title">Shopping Cart</h1>
    <div class="table">
      <h2 id="productTitle">Product</h2>
      <h2 id="amountTitle">Amount</h2>
      <h2 id="priceTitle">Price</h2>
      <h2 id="totalTitle">Total</h2>
      <h2 id="deleteTitle">Delete</h2>

      <div v-for="product in cartStore.cart" :key="product.id" class="product">
        <p id="productColumn">{{ product.name }}</p>
        <p id="amountColumn">{{}}</p>
        <p id="priceColumn">{{ product.price }}</p>
        <p id="totalColumn">{{ product.total }}</p>
        <p id="deleteColumn">delete</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import GlobalStyles from "@/components/globalStyles.vue";
import { useCartStore } from "@/stores/cart";
const cartStore = useCartStore();
const productAmount = 0;

function incrementAmount() {
  productAmount++;
}
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
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