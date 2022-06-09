<template>
<section id="construction-container" role="complementary" aria-labelledby="Under construction">
  <img src="@/assets/construction.jpg" alt="Beaver building">
  <h2>Sorry, site is under construction...</h2>
</section>
</template>

<script>
export default {
  name: "ConstructionView"
}
</script>

<style scoped>
section{
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10rem;
}

img{
  height: 40rem;
  width: 40rem;
}
</style>