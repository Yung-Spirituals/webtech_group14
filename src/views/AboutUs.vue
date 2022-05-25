<template>
  <div id="get-to-know-us">
    <h1>
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
    <AboutUsCard
        text="Health"
        textTwo="The goal of our products is to promote a healthier lifestyle"
        icon="favorite" id="health"/>
  </div>
  <section class="further-reading" id="about-us">
    <img src="@/assets/staff.jpg" alt=""/>
    <div class="further-reading-text">
      <h2>WHO ARE WE?</h2>
      <p>Young or old, we help you reach the peaks of your lifetime. With XXS your weekend is a success. Our
        team consists of professional climbers as well as weekend hikers</p>
    </div>
  </section>
  <section class="further-reading" id="health-benefits">
    <div class="further-reading-text">
      <h2>Why go hiking?</h2>
      <p><q>Hiking isn't just good fun, but it's also really good for your health. Fantastic for the mind, body and
        soul. After all, being out in nature is always beneficial.</q></p>
      <br>
      <p>Read more about the benefits of hiking <a href="https://www.ridestore.com/mag/why-hiking-is-good-for-you/">here</a></p>
    </div>
    <img src="@/assets/old-couple.jpg" alt=""/>
  </section>
  <section class="further-reading" id="products-and-services">
    <img src="@/assets/products-and-services.jpg" alt=""/>
    <div class="further-reading-text">
      <h2>OUR PRODUCTS & SERVICES</h2>
      <p>We sell only premium equipment from brands such as Bergans, North Face, Devold and Mammut. All
        our employees are hiking enthusiasts and we have tested all we sell in the shop. P.S. We have warm
        closes for dogs. Check out our products!</p>
      <AppButton text="TO PRODUCTS"/>
    </div>
  </section>
</template>

<script>
import AboutUsCard from "@/components/AboutUsCard.vue"
import AppButton from "@/components/AppButton.vue"

export default {
  components: {
    AboutUsCard,
    AppButton
  },
};

</script>
<style scoped>
#get-to-know-us{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 40rem 1fr;
  height: 80rem;
  background: linear-gradient(rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.40)), url("../assets/about-us.jpg");
  background-size: cover;
  text-align: center;
  color: white;
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

h1{
  grid-area: 1/2/2/4;
  padding-top: 20rem;
  font-size: 4rem;
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

img{
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