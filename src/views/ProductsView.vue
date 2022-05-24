<template>
  <h1>Products</h1>
  <div class="container">
    <form id="sidebar">
      <div id="selection">
        <h2>FILTERS</h2>
        <div>
          <input type="checkbox" id="hat" name="hat" value="hat" class="checkmark">
          <label for="hat">HATS</label>
        </div>
        <div>
          <input type="checkbox" id="sweater" name="sweater" value="sweater" class="checkmark">
          <label for="sweater">SWEATERS</label>
        </div>
        <div>
          <input type="checkbox" id="boots" name="boots" value="boots" class="checkmark">
          <label for="boots">BOOTS</label>
        </div>
        <div>
          <input type="checkbox" id="bottle" name="bottle" value="bottle" class="checkmark">
          <label for="bottle">BOTTLES</label>
        </div>
        <div>
          <input type="checkbox" id="dogs" name="dogs" value="dogs" class="checkmark">
          <label for="dogs">DOGS</label>
        </div>
      </div>
    </form>
    <div class="products-view">
      <div
          v-for="product in products"
          :key="product.id"
          class="product"
          @click="openProduct(product.id)"
      >
        <img :src="product.image_path" width="300" height="300" />
        <div class="product-content">
          <h2>{{ product.name }}</h2>
          <p>{{ product.price }}kr</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useRouter } from "vue-router";
import { useProductStore } from "@/stores/product";
const router = useRouter();
function openProduct(id) {
  router.push(`/product/${id}`);
}
const store = useProductStore();
store.getProducts();
const { products } = storeToRefs(store)
</script>

<script>
</script>

<style>
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

form{
  margin-top: 5rem;
  margin-right: 2rem;
  font-size: 1.5rem;
}

#selection div{
  margin-top: 2rem;
  margin-bottom: 2rem;
}

#selection input{
  margin-right: 1rem;
}

.checkmark {
  height: 2rem;
  width: 2rem;
}

h1{
  padding-top: 4rem;
  text-align: center;
}
</style>