<template id="product-gallery">
  <gallery-card>
    <template>
      <img src="@/assets/leezard.png" alt="bird">
    </template>
    <template #heading>
      Blue bird
    </template>
    <template #price>
      999$
    </template>
  </gallery-card>
</template>


<script>
import galleryCard from '@/components/galleryCard.vue'
export default {
  name: "theGallery",
  components: {galleryCard}
}
</script>

<style scoped>

</style>