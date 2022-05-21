<template>
  <div id="bestsellers" class="information">
    <h2>
      <slot name="header"></slot>
    </h2>
  </div>
  <div class="product-gallery-card">
    <img :src="image" />
    <div class="product-gallery-card-text">
      <h4>
        <slot name="smallHeader"></slot>
      </h4>
      <p>
        <span class="price">
          <slot name="price"></slot>
        </span>
      </p>
      <Button />
    </div>
  </div>
</template>

<script>
import Button from '@/components/button.vue'
export default {
  name: "galleryCard",
  components: {Button}
}


</script>


<style scoped>

#product-gallery{
  display: grid;
  grid-template-rows: 10vh 50vh 10vh;
  grid-template-columns: 6vw 1fr 1fr 1fr 1fr 1fr 6vw;
}

.product-gallery-card img{
  grid-area: 2 / 2 / 3 / 3;
  width: 100%;
  height: 28vh;
  object-fit: cover;
}

.product-gallery-card-text{
  grid-area: 3 / 2 / 4 / 3;
  text-align: center;
  padding-top: 0.3vw;
}

h4{
  font-size: 1.2vw;
}

.product-gallery-card-text p{
  font-size: 0.7vw;
  padding-bottom: 0.5vw;
}

.product-gallery-card{
  display: grid;
  grid-template-rows: 1vw 30vh 20vh 1vw;
  grid-template-columns: 1vw 1fr 1vw;
  background-color: #ffffff;
  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
  margin: 1vw;
}

.product-gallery-card:hover{
  transform: scale(1.02);
  transition-duration: 0.5s;
}

</style>