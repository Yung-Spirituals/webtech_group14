<template>
  <div v-if="currentProduct" class="content">
    <router-link id="back-to-products" to="/products">
      <button>
        <span class="material-icons md">arrow_back</span>
        <span class="text">Back to all products</span>
      </button>
    </router-link>
    <button id="delete-product">
      <span class="material-icons md">delete_forever</span>
      <span class="text">Delete product</span>
    </button>

    <admin-edit-images :image_path=currentProduct.image_path />

    <section id="details">
      <label>Product</label>
      <input id="name" type="text" class="productName" :value=currentProduct.name />

      <label>Price</label>
      <span id="price"> <input type="text" :value=currentProduct.price /> {{currentProduct.currency}}</span>

      <label>Description</label>
      <textarea id="description-text" rows="4" cols="50">{{ currentProduct.description }}</textarea>

      <div id="submit-or-abort">
        <button v-on:click.prevent="">Commit changes</button>
        <router-link to="/products"><button>Abort changes</button></router-link>
      </div>
    </section>
    <!--<comment-section />-->
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&family=Nunito:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto&family=Ubuntu:wght@300;500&display=swap");

.content {
  display: grid;
  grid-template-rows: 6rem 40vw 1fr;
  grid-template-columns: 1fr 30vw;
  justify-content: center;
  overflow: hidden;
  padding: 2rem;
}

#description-text {
  text-align: center;
  width: 20vw;
  height: 5vw;
  overflow: scroll;
}

#back-to-products {
  grid-area: 1 / 1 / 2 / 2;
  text-decoration: none;
}

#delete-product {
  grid-area: 1 / 2 / 2 / 3;
  display: flex;
  justify-self: flex-end;
  align-items: center;
  width: 17rem;
}

.md {
  margin-left: 1.5rem;
}

.text {
  text-decoration: underline;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}

#back-to-products button {
  display: flex;
  width: 19rem;
  height: 5rem;
  font-size: 1.5rem;
  align-items: center;
}


admin-edit-images {
  grid-area: 2 / 1 / 3 / 2;
  margin-left: 2rem;
}

#details {
  grid-area: 2 / 2 / 3 / 3;
  display: grid;
  justify-items: center;
  justify-content: center;
  align-items: center;
  align-content: center;
}

#submit-or-abort button {
  margin: 2rem;
}

label {
  margin-top: 5rem;
  font-size: 3rem;
}
</style>

<script setup>
import { useRoute } from "vue-router";
import { useProductStore } from "@/stores/product";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import AdminEditImages from "@/components/AdminEditImages.vue";
/*import CommentSection from "../components/CommentSection";*/

const route = useRoute();
const store = useProductStore();
const { products } = storeToRefs(store);
store.getProducts();

const currentProduct = computed(() => {
  return products.value.find((product) => {
    return product.id + "" === route.params.id;
  });
});
</script>
