<script>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
import AppButton from "@/components/appbutton.vue";
import ProductContent from "@/components/ProductContent.vue";

export default {
  components: {
    AppButton,
    GlobalStyles,
    Header,
    Footer,
    ProductContent,
  },
};
</script>

<template>
  <Header></Header>
  <ProductContent></ProductContent>
  <Footer></Footer>
</template>

<style scoped src="../productStyle.css"></style>