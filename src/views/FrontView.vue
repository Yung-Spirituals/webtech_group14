<!--Landing page-->
<template>
  <main>
    <section class="hero-section" role="complementary" aria-labelledby="hero-section">
      <div id="hero-image-content" class="init-animation">
        <h1>SIZE DOESN'T MATTER</h1>
        <router-link to="/products"><AppButton text="TO SHOP" aria-labelledby="take me to shop"/></router-link>
      </div>
      <img src="@/assets/hero-image.jpg" alt="" id="hero-image" />
    </section>
    <section id="introduction" role="complementary" aria-label="small introduction about us">
      <div id="introduction-container" class="reveal scroll">
        <h1 id="introduction-title">
          GET TO KNOW US
        </h1>
        <AboutUsCard id="team"
                     text="Team"
                     textTwo="Our team consists of professional climbers as well as weekend hikers."
                     link="/about-us"
                     icon="groups"/>
        <AboutUsCard id="products"
                     text="Products"
                     textTwo="All our employees are hiking enthusiasts and we have tested all our products."
                     link="/products"
                     icon="verified"/>
        <AboutUsCard id="partners"
                     text="Partners"
                     textTwo="Only premium equipment from brands such as Bergans, North Face, Devold and Mammut."
                     link="#our-partners"
                     icon="handshake"/>
        <AboutUsCard id="health"
                     text="Health"
                     textTwo="The goal of our products is to promote a healthier lifestyle"
                     link="/about-us#health-benefits"
                     icon="favorite"/>
      </div>
    </section>
    <h2 class="reveal">What our customers say</h2>
    <section id="testimonials" class="reveal scroll" role="complementary" aria-labelledby="testimonials">
      <TestimonialCard
          id="testimonial-hiker"
          imageURL="/src/assets/anton.jpg"
          quote="Hiking is a good way to use weekends together with your family. XXS is our go-to place for the latest hiking gear."
          name="Anton Berg-Hansen" title="Avid hiker"/>
      <TestimonialCard
          id="testimonial-ceo"
          imageURL="/src/assets/chuck.jpg"
          quote="We are a small IT company, full of geeks. I had difficulty getting the geeks out of their chairs. XXS suggested the latest water bottles as a Christmas gift for all employees. I was skeptical at first, but now I have difficulty getting them back indoors."
          name="Chuck Venstre" title="CEO of IT company"/>
      <TestimonialCard
          id="testimonial-dog"
          imageURL="/src/assets/goodest-boy.jpg"
          quote="Got a matching sweater for my human and myself. We are out in the mountains every Sunday since."
          name="Golden retriever" title="#1 Goodest boy"/>
    </section>
    <section id="our-partners" class="reveal" role="complementary" aria-labelledby="partnerships">
      <div id="partner-info">
        <h2>We Work With the Best Partners</h2>
        <p>We are passionate as a company to promote hiking. That is why we work with the best and most comfortable clothing brands to make hiking a fun experience.</p>
      </div>
      <div id="partner-logos">
        <img src="@/assets/nike.png" alt="nike logo">
        <img src="@/assets/bergans.png" alt="bergans logo">
        <img src="@/assets/devold.png" alt="devold logo">
        <img src="@/assets/mammut.png" alt="mammut logo">
        <img src="@/assets/north.png" alt="north face logo">
        <img src="@/assets/salomon.png" alt="salomon logo">
      </div>
    </section>
  </main>
</template>

<script defer>
import AppButton from "@/components/AppButton.vue";
import AboutUsCard from "@/components/IntroductionCard.vue";
import TestimonialCard from "@/components/TestimonialCard.vue";
import {activate} from "../stores/animations.js"

export default {
  components: {
    AppButton,
    AboutUsCard,
    TestimonialCard
  },
  methods:{
  }
};
activate()
</script>

<style scoped>
@import "../stores/animation.css";

#hero-image-content {
  grid-area: 2/2/3/3;
  text-align: center;
  line-height: 10;
}

#hero-image-content h1, h3{
  color: #090909;
  font-weight: 800;
}

#hero-image {
  grid-area: 1 / 1 / 4 / 4;
  z-index: -1;
  max-height: 87vh;
  min-width: 100vw;
  object-fit: cover;
  object-position: 50% 50%;
  filter: brightness(110%);
}

.hero-section {
  display: grid;
  overflow: hidden;
  grid-template-rows: 20vh 1fr 20vh;
  grid-template-columns: 18vw 1fr 18vw;
  align-items: center;
  padding-bottom: 6vh;
}

#introduction-container{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 40rem 1fr;
  height: 90rem;
  text-align: center;
  color: white;
  column-gap: 8rem;
  padding: 0 5rem;
}

#introduction{
  background: linear-gradient(rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.40)), url("../assets/get-to-know.jpg");
  background-size: cover;
}

#introduction-title{
  grid-area: 1/2/2/4;
  padding-top: 20rem;
  font-size: 4rem;
}

#team{
  grid-area: 2/1/3/2;
}

#products{
  grid-area: 2/2/3/3;
}

#partners{
  grid-area: 2/3/3/4;
}

#health{
  grid-area: 2/4/3/5;
}

#testimonials{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 80rem;
  align-items: center;
  justify-items: center;
  text-align: center;
  padding: 0.5rem 2rem;
}

#testimonial-hiker{
  grid-area: 1/1/2/2;
}
#testimonial-ceo{
  grid-area: 1/2/2/3;
}
#testimonial-dog{
  grid-area: 1/3/2/4;
}

h2{
  text-align: center;
  padding-top: 8rem;
  padding-bottom: 3rem;
}

#our-partners{
  background-color: #d0f3e8;
  display: flex;
  flex-direction: row-reverse;
  height: 80rem;
  align-items: center;
  text-align: center;
}

#partner-info{
  margin: 3rem;
}

#partner-logos img{
  width: 30rem;
  height: 20rem;
  margin: 2rem;
}

/************************************
            media query
************************************/

/**
Scroll functionality for containers when screen shrinks
 */
@media screen and (max-width: 84em){
  .scroll{
    overflow-x: auto;
    overflow-y: hidden;
  }

}

@media screen and (max-width: 77em){
  #our-partners{
    flex-wrap: wrap;
    align-items: flex-start;
  }

  #partner-info{
    margin: 0 10rem;
  }

  #partner-logos img{
    width: 25rem;
    height: 15rem;
    margin: 1rem;
  }

  #introduction-container{
    column-gap: 10rem;
  }
}

@media screen and (max-width: 55em){
  #partner-info{
    margin: 0 2rem;
  }

  #partner-logos img{
    width: 22rem;
    height: 12rem;
    margin: 1rem;
  }
}
</style>