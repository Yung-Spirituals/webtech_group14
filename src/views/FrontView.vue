<template>
  <main>
    <section class="hero-section">
      <div id="hero-image-text">
        <h1>SIZE DOESN'T MATTER</h1>
        <p>Large or small, beginner or pro, we have you covered! ;)</p>
        <AppButton text="TO SHOP" />
      </div>
      <img src="@/assets/hero-image.jpg" alt="woman hiking" id="hero-image" />
    </section>
    <section id="background">
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
    <section id="testimonials">
      <TestimonialCard
          class="reveal"
          id="testimonial-hiker"
          imageURL="/src/assets/anton.jpg"
          quote="Hiking is a good way to use weekends together with your family. XXS is our go-to place for the latest hiking gear."
          name="Anton Berg-Hansen" title="Avid hiker"/>
      <TestimonialCard
          class="reveal"
          id="testimonial-ceo"
          imageURL="/src/assets/chuck.jpg"
          quote="We are a small IT company, full of geeks. I had difficulty getting the geeks out of their chairs. XXS suggested the latest water bottles as a Christmas gift for all employees. I was skeptical at first, but now I have difficulty getting them back indoors."
          name="Chuck Venstre" title="CEO of IT company"/>
      <TestimonialCard
          class="reveal"
          id="testimonial-dog"
          imageURL="/src/assets/goodest-boy.jpg"
          quote="Got a matching sweater for my human and myself. We are out in the mountains every Sunday since."
          name="Golden retriever" title="#1 Goodest boy"/>
    </section>
  </main>
</template>

<script defer>
import AppButton from "@/components/AppButton.vue";
import AboutUsCard from "@/components/AboutUsCard.vue";
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

#testimonials{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  text-align: center;
  margin: 5rem 2rem;
}

#testimonial-hiker{
  grid-area: 1 / 1 / 2 / 2;
}
#testimonial-ceo{
  grid-area: 1 / 2 / 2 / 3;
}
#testimonial-dog{
  grid-area: 1 / 3 / 2 / 4;
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

#hero-image-text {
  grid-area: 2/2/3/3;
}

#hero-image-text h1 {
  font-size: 4vw;
  font-weight: 800;
}

#hero-image-text p {
  font-size: 1.5vw;
  padding-left: 0.2vw;
  margin-bottom: 2vh;
}

#hero-image {
  grid-area: 1 / 1 / 4 / 4;
  z-index: -1;
  max-height: 87vh;
  min-width: 100vw;
  object-fit: cover;
  object-position: 50% 10%;
}
</style>