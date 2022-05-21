<template>
  <h1>Products</h1>
  <div class="products-view">
    <div
      v-for="product in products"
      :key="product.id"
      class="product"
      @click="openProduct(product.id)"
    >
      <img :src="product.image" />
      <div class="product-content">
        <h2>{{ product.name }}</h2>
        <p>{{ product.price }}kr</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
function openProduct(id) {
  console.log(router);
  router.push(`/product/${id}`);
}
const products = [
  {
    id: "1",
    name: "Hiking boots",
    price: 2400,
    image: "https://source.unsplash.com/nj0a29qb_jo/300x300",
  },
  {
    id: "2",
    name: "Winter sweater",
    price: 800,
    image: "https://source.unsplash.com/mU88MlEFcoU/300x300",
  },
  {
    id: "3",
    name: "Winter hat",
    price: 200,
    image: "https://source.unsplash.com/amTyFteGaRg/300x300",
  },
  {
    id: "4",
    name: "Water bottle",
    price: 120,
    image: "https://source.unsplash.com/reEySFadyJQ/300x300",
  },
  {
    id: "5",
    name: "Clothes set for dogs ",
    price: 6670,
    image: "https://source.unsplash.com/qy0BHykaq0E/300x300",
  },
];
</script>
<style>
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