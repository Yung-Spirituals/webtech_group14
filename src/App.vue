<template>
  <Header></Header>
  <main>
    <section class="hero-section">
      <div id="hero-image-text">
        <h1>SIZE DOESN'T MATTER</h1>
        <p>Large or small, beginner or pro, we have you covered! ;)</p>
        <Button>
          <template #buttonText>TO SHOP</template>
        </Button>
      </div>
      <img src="@/assets/hero-image.jpg" alt="woman hiking" id="hero-image">
    </section>
    <GalleryCard></GalleryCard>
  </main>
  <Footer></Footer>
</template>

<script>
import GlobalStyles from "@/components/globalStyles.vue";
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
import Button from '@/components/button.vue'
import GalleryCard from "@/components/galleryCard.vue";
export default {
  components: {GlobalStyles, Header, Footer, Button, GalleryCard}
}

</script>
<style>
/******************************************************
                      Hero-section
 *****************************************************/
.hero-section{
  display: grid;
  overflow: hidden;
  grid-template-rows: 20vh 1fr 20vh;
  grid-template-columns: 18vw 1fr 18vw;
  align-items: center;
  padding-bottom: 6vh;
}

#hero-image-text{
  grid-area: 2 / 2 / 3 / 3;
}

#hero-image-text h1{
  font-size: 4vw;
  font-weight: 800;
}

#hero-image-text p {
  font-size: 1.5vw;
  padding-left: 0.2vw;
  margin-bottom: 2vh;
}

#hero-image{
  grid-area: 1 / 1 / 4 / 4;
  z-index: -1;
  max-height: 87vh;
  min-width: 100vw;
  object-fit: cover;
  object-position: 50% 10%;
}
</style>



