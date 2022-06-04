<template>
  <div id="about-us-header" role="img" aria-label="Man standing in nature">
    <h1 class="init-animation">BY US, FOR YOU</h1>
  </div>
  <section class="further-reading" id="about-us" role="complementary" aria-labelledby="Who are we?">
    <img src="@/assets/staff.jpg" alt="Staff member"/>
    <div class="further-reading-text">
      <h2 class="reveal">Who are we?</h2>
      <p class="reveal">Young or old, we help you reach the peaks of your lifetime. With XXS your weekend is a success. Our
        team consists of professional climbers as well as weekend hikers</p>
    </div>
  </section>
  <section class="further-reading" id="health-benefits" role="complementary" aria-labelledby="Why go hiking?">
    <div class="further-reading-text">
      <h2 class="reveal">Why go hiking?</h2>
      <p class="reveal"><q>Hiking isn't just good fun, but it's also really good for your health. Fantastic for the mind, body and
        soul. After all, being out in nature is always beneficial.</q></p>
      <br>
      <p class="reveal">Read more about the benefits of hiking <a href="https://www.ridestore.com/mag/why-hiking-is-good-for-you/" role="link" >here</a></p>
    </div>
    <img src="@/assets/old-couple.jpg" alt="Old couple hiking"/>
  </section>
  <section class="further-reading" id="products-and-services" role="complementary" aria-labelledby="Our products and services">
    <img src="@/assets/products-and-services.jpg" alt="Backpacks"/>
    <div class="further-reading-text">
      <h2 class="reveal">Our products and services</h2>
      <p class="reveal">We sell only premium equipment from brands such as Bergans, North Face, Devold and Mammut. All
        our employees are hiking enthusiasts and we have tested all we sell in the shop. P.S. We have warm
        closes for dogs. Check out our products!</p>
      <AppButton class="reveal" text="TO PRODUCTS" aria-labelledby="To products"/>
    </div>
  </section>
</template>

<script defer>
import AboutUsCard from "@/components/KnowUs.vue"
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
  background-color: #c2f0e1;
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

h2{
  padding-bottom: 2rem;
}

/************************************
            media query
************************************/


/**
Breakpoint for get-to-know-us
 */
@media screen and (max-width: 75em){

  #about-us img{
    object-position: 20%;
  }

  #health-benefits img{
    object-position: 45% 50%;
  }
}

/**
Breakpoint for get-to-know-us
 */
@media screen and (max-width: 37.5em){

  #about-us{
    flex-direction: column;
  }

  #health-benefits{
    flex-direction: column-reverse;
  }

  #products-and-services{
    flex-direction: column;
  }

  img{
    width: 100%;
    height: 40rem;
  }

  .further-reading{
    height: 100%;
    align-items: center;
    background-color: #c2f0e1;
  }

  .further-reading img{
    width: 100%;
  }

  .further-reading-text{
    padding: 5rem 0;
  }

  h1{
    text-align: center;
    color: red;
  }

  section{
    margin-bottom: 3rem;
  }
}
</style>