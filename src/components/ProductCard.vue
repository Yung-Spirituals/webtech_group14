<!--Reusable product cards-->
<template>
  <div class="product-card">
    <img :src=product.image_path />
    <div class="product-content">
      <h2 class="product-name">{{ product.name }}</h2>
      <p class="price">{{ product.price }} kr</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      image_path: Object,
      required: false,
      default: {
        "name": "Add new product",
        "price": "",
        "currency": "",
        "image_path": "https://www.seekpng.com/png/detail/9-93668_plus-sign-green-plus-sign.png"
      }
    }
  }
}
</script>

<style scoped>
.product-card {
  display: grid;
  grid-template-rows: 30rem 20rem;
  grid-template-columns: 30rem;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  transition: transform 0.2s ease;
  background: white;
}

.product-card:hover {
  transform: scale(1.03);
}

.product-content {
  margin: 2rem;
  display: flex;
  flex-direction: column;
}

img {
  width: 30rem;
  height: 30rem;
  object-fit: cover;
}
</style>