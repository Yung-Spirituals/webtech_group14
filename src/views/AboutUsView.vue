<!--About us page-->
<template>
  <div id="about-us-header" role="img" aria-label="man standing in nature">
    <h1 class="init-animation">BY US, FOR YOU</h1>
  </div>
  <section id="who-are-we" class="slide-container reveal" role="complementary" aria-labelledby="who are we?">
    <img src="@/assets/staff.jpg" alt="staff member"/>
    <div class="slide-information">
      <h2>Who are we?</h2>
      <p>Young or old, we help you reach the peaks of your lifetime. With XXS your weekend is a success. Our
        team consists of professional climbers as well as weekend hikers.</p>
    </div>
  </section>
  <section id="health-benefits" class="slide-container reveal" role="complementary" aria-labelledby="why go hiking?">
    <div class="slide-information">
      <h2>Why go hiking?</h2>
      <p><q>Hiking isn't just good fun, but it's also really good for your health. Fantastic for the mind, body and
        soul. After all, being out in nature is always beneficial.</q></p>
      <br>
      <p>Read more about the benefits of hiking <a href="https://www.ridestore.com/mag/why-hiking-is-good-for-you/" role="link" >here</a></p>
    </div>
    <img src="@/assets/old-couple.jpg" alt="old couple hiking"/>
  </section>
  <section id="products-and-services" class="slide-container reveal" role="complementary" aria-labelledby="our products and services">
    <img src="@/assets/products-and-services.jpg" alt="Backpacks"/>
    <div class="slide-information">
      <h2>Our products and services</h2>
      <p>We sell only premium equipment from brands such as Bergans, North Face, Devold and Mammut. All
        our employees are hiking enthusiasts and we have tested all we sell in the shop. P.S. We have warm
        closes for dogs. Check out our products!</p>
      <router-link to="/products"><AppButton text="TO PRODUCTS" aria-labelledby="to products"/></router-link>
    </div>
  </section>
</template>

<script defer>
import AboutUsCard from "@/components/IntroductionCard.vue"
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

.slide-container{
  display: flex;
  flex-direction: row;
  height: 70rem;
  width: 100%;
  background-color: #d0f3e8;
}

.slide-information{
  width: 50%;
  text-align: center;
  align-self: center;
  padding-right: 3rem;
  padding-left: 3rem;
}

.slide-container img{
  width: 50%;
  object-fit: cover;
  filter: brightness(95%);
}

#who-are-we img{
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
Repositioning of image position, to focus better on center of the images
 */
@media screen and (max-width: 75em){

  #who-are-we img{
    object-position: 20%;
  }

  #health-benefits img{
    object-position: 45% 50%;
  }
}

@media screen and (max-width: 45em){

  #about-us-header{
    height: 60rem;
    color: white;
  }

  #who-are-we img{
    object-position: 0 50%;
  }

  #who-are-we{
    flex-direction: column;
  }

  #health-benefits{
    flex-direction: column-reverse;
  }

  #health-benefits img{
    object-position: 50% 70%;
  }

  #products-and-services{
    flex-direction: column;
  }

  img{
    width: 100%;
    height: 40rem;
  }

  .slide-container{
    height: 100%;
    align-items: center;
    background-color: #c2f0e1;
  }

  .slide-container img{
    width: 100%;
  }

  .slide-information{
    padding: 5rem 0;
  }

  h1{
    text-align: center;
  }

  section{
    margin-bottom: 3rem;
    margin-top: 3rem;
  }
}
</style>