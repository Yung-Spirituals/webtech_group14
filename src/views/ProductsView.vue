<template>
  <h1>Products</h1>
  <div class="products-view">
    <div
      v-for="product in store.products"
      :key="product.id"
      class="product"
      @click="openProduct(product.id)"
    >
      <img :src="product.image" width="300" height="300" />
      <div class="product-content">
        <h2>{{ product.name }}</h2>
        <p>{{ product.price }}kr</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import { useProductStore } from "@/stores/product";
const router = useRouter();
function openProduct(id) {
  router.push(`/product/${id}`);
}
const store = useProductStore();
/* store.getProducts(); */
</script>
<style scoped>
.container {
}
.products-view {
  width: calc(100vw - 20rem);
  margin: 5rem 10rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 3rem;
}
.product {
  min-width: 15rem;
  min-height: 20rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  transition: transform 0.2s ease;
  background: white;
}
.product:hover {
  cursor: pointer;
  transform: scale(1.03);
}
img {
  border-radius: 0.5rem 0.5rem 0 0;
}
.product-content {
  margin: 2rem;
  display: flex;
  flex-direction: column;
}
</style>