<template>
  <ProductContent></ProductContent>
</template>

<script setup>
import AppButton from "@/components/appbutton.vue";
import ProductContent from "@/components/ProductContent.vue";
import GlobalStyles from "@/components/globalStyles.vue";
import { useRoute } from "vue-router";
const route = useRoute();
console.log(route.params.id);
</script>


<style scoped src="../productStyle.css"></style>