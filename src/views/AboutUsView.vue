<template>
  <div id="about-us-header">
    <h1 class="init-animation">BY US, FOR YOU</h1>
  </div>
  <section class="further-reading" id="about-us">
    <img src="@/assets/staff.jpg" alt=""/>
    <div class="further-reading-text">
      <h2 class="reveal">WHO ARE WE?</h2>
      <p class="reveal">Young or old, we help you reach the peaks of your lifetime. With XXS your weekend is a success. Our
        team consists of professional climbers as well as weekend hikers</p>
    </div>
  </section>
  <section class="further-reading" id="health-benefits">
    <div class="further-reading-text">
      <h2 class="reveal">Why go hiking?</h2>
      <p class="reveal"><q>Hiking isn't just good fun, but it's also really good for your health. Fantastic for the mind, body and
        soul. After all, being out in nature is always beneficial.</q></p>
      <br>
      <p class="reveal">Read more about the benefits of hiking <a href="https://www.ridestore.com/mag/why-hiking-is-good-for-you/">here</a></p>
    </div>
    <img src="@/assets/old-couple.jpg" alt=""/>
  </section>
  <section class="further-reading" id="products-and-services">
    <img src="@/assets/products-and-services.jpg" alt=""/>
    <div class="further-reading-text">
      <h2 class="reveal">OUR PRODUCTS & SERVICES</h2>
      <p class="reveal">We sell only premium equipment from brands such as Bergans, North Face, Devold and Mammut. All
        our employees are hiking enthusiasts and we have tested all we sell in the shop. P.S. We have warm
        closes for dogs. Check out our products!</p>
      <AppButton class="reveal" text="TO PRODUCTS"/>
    </div>
  </section>
</template>

<script defer>
import AboutUsCard from "@/components/AboutUsCard.vue"
import AppButton from "@/components/AppButton.vue"
import {activate} from "../stores/animations.js"
export default {
  components: {
    AboutUsCard,
    AppButton
  },
};
activate();
</script>

<style scoped>
@import "../stores/animation.css";

#about-us-header{
  display: grid;
  width: 100%;
  height: 80rem;
  background: linear-gradient(rgba(0, 0, 0, 0.20), rgba(0, 0, 0, 0.20)), url("../assets/about-us.jpg");
  background-position: 50% 70%;
  background-size: cover;
  overflow: hidden;
  color: white;
  justify-content: center;
  align-items: center;
}

.further-reading{
  display: flex;
  flex-direction: row;
  height: 70rem;
  width: 100%;
  background-color: #dee5e2;
}

.further-reading-text{
  width: 50%;
  text-align: center;
  align-self: center;
  padding-right: 3rem;
  padding-left: 3rem;
}

.further-reading img{
  width: 50%;
  object-fit: cover;
  filter: brightness(95%);
}

#about-us img{
  object-position: 1%;
}

#health-benefits img{
  object-position: 50% 50%;
}

p{
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 3rem;
}

h2{
  font-size: 3rem;
  padding-bottom: 2rem;
}
</style>