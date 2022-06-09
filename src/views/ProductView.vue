<template>
  <div v-if="currentProduct" class="content">
    <div class="testimonial-image">
      <img :src="currentProduct.image_path" />
    </div>
    <div class="details">
      <label class="productName">{{ currentProduct.name }}</label>
      <div class="price">{{ currentProduct.price }} kr</div>

      <div class="shortInfo">
        <div class="shortInfoText">
          {{ currentProduct.description }}
        </div>
      </div>
      <div class="BuyOrFavorite">
        <div class="BuyButtonArea">
          <div class="BuyButton"
               @click="cartStore.addProductToCart(currentProduct)">
            ADD TO CART</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useProductStore } from "@/stores/product";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { useCartStore } from "@/stores/cart";

/**
 * uses states to keep track of what products we have received from the backend and which items we have in our cart.
 */
const cartStore = useCartStore();
const route = useRoute();
const productStore = useProductStore();
const { products } = storeToRefs(productStore);
productStore.getProducts();

/**
 * Fixes the pathing for each individual product
 * @type {ComputedRef<*>}
 */
const currentProduct = computed(() => {
  return products.value.find((product) => {
    return product.id + "" === route.params.id;
  });
});
</script>



<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&family=Nunito:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto&family=Ubuntu:wght@300;500&display=swap");

/*CSS FOR PRODUCT PAGE BELOW*/
.content {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
}

.thumbnails > img {
  width: 100%;
  margin-bottom: 2rem;
  border-radius: 2rem;
}
.testimonial-image {
  grid-area: 0/0/1/1;
  margin-left: 2rem;
  margin-top: 4rem;
}
.testimonial-image > img {
  width: 100%;
  border-radius: 2rem;
}
.details {
  grid-area: 0/1/1/2;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  text-align: center;
}
.productName {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3vw;
}
.price {
  font-size: 1.4rem;
  font-weight: bold;
}
.shortInfo {
  display: flex;
  font-size: 1.4rem;
  align-items: center;
  justify-content: center;
}
.shortInfoText {
  width: 75%;
  height: 30rem;
}
.BuyOrFavorite {
  display: flex;
  align-items: center;
  justify-content: center;
}
.BuyButtonArea {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
}
.BuyButton {
  margin-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35rem;
  height: 7rem;
  border: 0.2rem solid #55d6aa;
  border-radius: 3rem;
  background-color: #55d6aa;
  font-family: "Nunito", sans-serif;
  font-size: 3rem;
  padding: 1rem 2rem;
  font-weight: 800;
  box-shadow: inset 0 0 0 0 #222222;
  -webkit-box-shadow: inset 0 0 0 0 #222222;
  transition-duration: 0.6s;
}
.BuyButton:hover {
  background-color: #222222;
  color: #55d6aa;
  box-shadow: inset 15rem 0 0 0 #222222;
  -webkit-box-shadow: inset 15rem 0 0 0 #222222;
  cursor: pointer;
}
.productName{
  font-size: 13rem;
}
.price{
  font-size: 10rem;
  color: #55d6aa;
}
.shortInfo{
  background-color: #f6f6f6;
  margin-top: 6rem;
}
.shortInfoText{
  font-size: 4rem;
}
</style>
