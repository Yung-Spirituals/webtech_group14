<template>
  <h1>Products</h1>
  <div class="container">
    <div id="sidebar">
      <product-filters />
    </div>
    <div class="products-view">
      <div
          v-for="product in products"
          :key="product.id"
          class="product"
          @click="openProduct(product.id)"
      >
        <product-card :product=product />
      </div>
      <product-card />
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useRouter } from "vue-router";
import { useProductStore } from "@/stores/product";
import ProductFilters from "@/components/ProductFilters.vue";
import ProductCard from "@/components/ProductCard.vue";

const router = useRouter();
function openProduct(id) {
  router.push(`/product/${id}`);
}
const store = useProductStore();
store.getProducts();
const { products } = storeToRefs(store)
</script>

<style scoped>
.container{
  display: grid;
  grid-template-columns: 20rem 1fr;
  justify-items: center;
}
.products-view {
  grid-area: 1/2/2/3;
  width: calc(100vw - 30rem);
  margin: 5rem 5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 3rem;
}

#sidebar{
  grid-area: 1/1/2/2;
}

#selection div{
  margin-top: 2rem;
  margin-bottom: 2rem;
}

#selection input{
  margin-right: 1rem;
}
</style>