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
      <img :src="currentProduct.image_path" />
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
          <div class="BuyButton" @click="addToCart">ADD TO CART</div>
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
import { useCartStore } from "@/stores/cart";
import { useRoute } from "vue-router";
import { useProductStore } from "@/stores/product";
const route = useRoute();
const cartStore = useCartStore();
const store = useProductStore();
const currentProduct = store.products.find((product) => {
  console.log(product.image_path);
  return product.id === route.params.id;
});
function addToCart() {
  cartStore.addToCart(currentProduct);
}
</script>



<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&family=Nunito:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto&family=Ubuntu:wght@300;500&display=swap");

/*CSS FOR PRODUCT PAGE BELOW*/
.content {
  display: grid;
  grid-template-areas:
    "title     title title"
    "thumbnails image details";
  grid-template-rows: 60px 1fr;
  grid-template-columns: 1fr 2.789fr 2fr;
}
.productTitle {
  grid-area: title;
  display: flex;
  font-size: 1.5rem;
  text-decoration: underline;
  justify-content: left;
  align-items: center;
  margin-left: 1rem;
}
.thumbnails {
  grid-area: thumbnails;
  margin-right: 2rem;
  margin-left: 2rem;
  margin-bottom: 2rem;
}
.thumbnails > img {
  width: 100%;
  margin-bottom: 2rem;
  border-radius: 2rem;
}
.image {
  grid-area: image;
  margin-left: 2rem;
}
.image > img {
  width: 100%;
  border-radius: 2rem;
}
.details {
  grid-area: details;
  display: grid;
  grid-template-rows: 1fr 0.3fr 0.7fr 1fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 3fr;
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
.colorSize {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  border-top: 0.1em #b0b0b0 solid;
}
.colors {
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 1rem;
}
.orangeSelect {
  color: orange;
  cursor: pointer;
}
.orangeSelect:hover {
  color: orange;
  cursor: pointer;
}
.greenSelect {
  color: green;
  cursor: pointer;
}
.purpleSelect {
  color: purple;
  cursor: pointer;
}
.sizes {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.5rem;
  gap: 0.8rem;
}
#XS {
  cursor: pointer;
}
#XS:hover {
  color: #55d6aa;
}
#S {
  cursor: pointer;
}
#S:hover {
  color: #55d6aa;
}
#M {
  cursor: pointer;
}
#M:hover {
  color: #55d6aa;
}
#L {
  cursor: pointer;
}
#L:hover {
  color: #55d6aa;
}
#XL {
  cursor: pointer;
}
#XL:hover {
  color: #55d6aa;
}
.shortInfo {
  display: flex;
  font-size: 1.4rem;
  align-items: center;
  justify-content: center;
}
.shortInfoText {
  width: 75%;
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15rem;
  height: 5rem;
  border: 0.2rem solid #55d6aa;
  border-radius: 3rem;
  background-color: #55d6aa;
  font-family: "Nunito", sans-serif;
  font-size: 1.4rem;
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
.FavoriteArea {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2rem;
  margin-bottom: 2rem;
}
.Favorite {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
}
.FavoriteArea:hover {
  opacity: 50%;
  cursor: pointer;
}
.detailedDescription {
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 0.1em #b0b0b0 solid;
  gap: none;
}
.productDetails {
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 0.1em #b0b0b0 solid;
}
.size-chart {
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 0.1em #b0b0b0 solid;
}
.material-specification {
  border-top: 0.1em #b0b0b0 solid;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
