<template>
  <div class="content">
    <div class="productTitle">MAN / SWEATERS AND JACKETS / BANANA PEEL</div>
    <div class="thumbnails">
      <img
        src="https://www.xxl.no/filespin/6ab6c901a97c4591804c2e655052208c?resize=722,722&quality=90&bgcolor=efefef"
      />
      <img
        src="https://www.xxl.no/filespin/3eaaac41e7e241e6b40784c981940b62?resize=722,722&quality=90&bgcolor=efefef"
      />
      <img
        src="https://www.xxl.no/filespin/20baf6aeefbe4306bb46c5e10bd87cb5?resize=722,722&quality=90&bgcolor=efefef"
      />
    </div>
    <div class="image">
      <img :src="currentProduct.image" />
    </div>
    <div class="details">
      <h1 class="productName">{{ currentProduct.name }}</h1>
      <div class="price">{{ currentProduct.price }},-</div>
      <div class="colorSize">
        <div class="colors">
          <div class="orangeSelect">
            <span class="material-icons"> circle </span>
          </div>
          <div class="greenSelect">
            <span class="material-icons"> circle </span>
          </div>
          <div class="purpleSelect">
            <span class="material-icons"> circle </span>
          </div>
        </div>
        <div class="sizes">
          <div id="XS">XS</div>
          <div id="S">S</div>
          <div id="M">M</div>
          <div id="L">L</div>
          <div id="XL">XL</div>
        </div>
      </div>
      <div class="shortInfo">
        <div class="shortInfoText">
          {{ currentProduct.description }}
        </div>
      </div>
      <div class="BuyOrFavorite">
        <div class="BuyButtonArea">
          <div class="BuyButton">ADD TO CART</div>
        </div>
        <div class="FavoriteArea">
          <span class="material-icons"> favorite_border </span>
        </div>
      </div>
      <h2 class="detailedDescription">DESCRIPTION</h2>
      <h2 class="productDetails">DETAILS</h2>
      <h2 class="size-chart">SIZE CHART</h2>
      <h2 class="material-specification">MATERIAL SPECIFICATION</h2>
    </div>
  </div>
</template>

<script setup>
import AppButton from "@/components/appbutton.vue";
import ProductContent from "@/components/ProductContent.vue";
import GlobalStyles from "@/components/GlobalStyles.vue";
import { useRoute } from "vue-router";
const route = useRoute();
import { useProductStore } from "@/stores/product";
const store = useProductStore();
const currentProduct = store.products.find((product) => {
  return product.id === route.params.id;
});
</script>



<style scoped src="../productStyle.css"></style>
