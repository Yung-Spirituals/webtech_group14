<template>
  <AppHeader/>
  <router-view/>
  <AppFooter/>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&family=Nunito:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto&family=Ubuntu:wght@300;500&display=swap');

html {
  font-size: 62.5%;
  font-family: "Nunito", sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-weight: 400;
  line-height: 1.4;
}

p {
  font-size: 2rem;
  margin-bottom: 1rem;
}

h1 {
  font-size: 7rem;
}

h2 {
  font-size: 4rem;
}

h3 {
  font-size: 3rem;
}

h4 {
  font-size: 2rem;
}

h5 {
  font-size: 1.5rem;
}

li {
  list-style-type: none;
  font-size: 1.5rem;
}
</style>