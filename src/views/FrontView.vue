<template>
  <main>
    <section class="hero-section">
      <div id="hero-image-text">
        <h1>SIZE DOESN'T MATTER</h1>
        <h3>Large or small, beginner or pro, we have you covered!</h3>
        <AppButton text="TO SHOP" aria-labelledby="Take to shop"/>
      </div>
      <img src="@/assets/hero-image.jpg" alt="Woman hiking" id="hero-image" />
    </section>
    <section id="background" role="complementary" aria-label="Get to know us">
      <div id="get-to-know-us" class="reveal">
        <h1 id="get-to-know-us-title">
          GET TO KNOW US
        </h1>
        <AboutUsCard id="team"
                     text="Team"
                     textTwo="Our team consists of professional climbers as well as weekend hikers."
                     icon="groups"/>
        <AboutUsCard id="products"
                     text="Products"
                     textTwo="All our employees are hiking enthusiasts and we have tested all our products."
                     icon="verified"/>
        <AboutUsCard id="partners"
                     text="Partners"
                     textTwo="Only premium equipment from brands such as Bergans, North Face, Devold and Mammut."
                     icon="handshake"/>
        <AboutUsCard id="health"
                     text="Health"
                     textTwo="The goal of our products is to promote a healthier lifestyle"
                     icon="favorite"/>
      </div>
    </section>
    <h2 class="reveal">What our customers say</h2>
    <section id="testimonials" role="complementary" aria-labelledby="Testimonials" class="reveal">
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
    <section id="ourPartners" class="reveal">
      <div id="partnerText" class="partnerInfo">
        <h2>We Work With the Best Partners</h2>
        <p>We are passionate as a company to promote hiking. That is why we work with the best and most comfortable clothing brands to make hiking a fun experience.</p>
      </div>
      <div id="partnerLogos">
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
import AboutUsCard from "@/components/KnowUs.vue";
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

#hero-image-text {
  grid-area: 2/2/3/3;
  text-align: center;
  line-height: 10;
}

#hero-image-text h1, h3{
  color: #090909;
  font-weight: 700;
}

#hero-image {
  grid-area: 1 / 1 / 4 / 4;
  z-index: -1;
  max-height: 87vh;
  min-width: 100vw;
  object-fit: cover;
  object-position: 50% 50%;
}

.hero-section {
  display: grid;
  overflow: hidden;
  grid-template-rows: 20vh 1fr 20vh;
  grid-template-columns: 18vw 1fr 18vw;
  align-items: center;
  padding-bottom: 6vh;
}

#get-to-know-us{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 40rem 1fr;
  height: 80rem;
  text-align: center;
  color: white;
}

#background{
  background: linear-gradient(rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.40)), url("../assets/get-to-know.jpg");
  background-size: cover;
}

#get-to-know-us-title{
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
  grid-template-rows: 1fr;
  justify-items: center;
  text-align: center;
  margin: 5rem 2rem;
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

#ourPartners{
  background-color: #c2f0e1;
  display: flex;
  height: 80rem;
  align-items: center;
  text-align: center;
}

#partnerText{
  margin: 3rem;
}

#partnerLogos img{
  width: 30rem;
  height: 20rem;
  margin: 2rem;
}

/************************************
            media query
************************************/

/**

 */
@media screen and (max-width: 84em){

}

/**
First breakpoint for Partners section
*/
@media screen and (max-width: 77em){
  #ourPartners{
    flex-wrap: wrap;
    align-items: flex-start;
  }

  #partnerText{
    margin: 0 10rem;
  }

  #partnerLogos img{
    width: 25rem;
    height: 15rem;
    margin: 1rem;
  }
}

/**
Breakpoint for get-to-know-us
 */
@media screen and (max-width: 68em){

}

/**
Second breakpoint for Partners section
 */
@media screen and (max-width: 55em){
  #partnerText{
    margin: 0 2rem;
  }

  #partnerLogos img{
    width: 22rem;
    height: 12rem;
    margin: 1rem;
  }
}

/**

*/
@media screen and (max-width: 37.5em){

}
</style>