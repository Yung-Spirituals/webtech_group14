<template>
  <div id="topbar">
    <p>Fite me</p>
  </div>
  <header>
    <div class="header-container">
      <img src="@/assets/leeezard.png" alt="logo" id="logo" />
      <span>XXS</span>
    </div>
    <nav>
      <ul>
        <li v-for="route in filteredRoutes" :key="route.path">
          <RouterLink :to="route.path">{{ route.name }}</RouterLink>
        </li>
        <!--         <li><RouterLink to="/Product">Product</RouterLink></li>
        <li><RouterLink to="/Products">Products</RouterLink></li>
        <li><RouterLink to="/">Women</RouterLink></li>
        <li><RouterLink to="/unisex">Unisex</RouterLink></li>
        <li><RouterLink to="/dogs">Dogs</RouterLink></li>
        <li><RouterLink to="/utilities">Utilities</RouterLink></li> -->
      </ul>
    </nav>
    <div class="headerNavigation">
      <span class="material-icons md"> search </span>
      <span class="material-icons md"> shopping_cart </span>
      <span class="material-icons md"> person_outline </span>
    </div>
  </header>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const routes = router.getRoutes();
const filteredRoutes = routes.filter((route) => {
  return route.name !== "product";
});
</script>

<style scoped>
#topbar {
  background-color: #222222;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  font-weight: normal;
}
header {
  display: grid;
  grid-template-columns: auto 1fr auto;
  background: #55d6aa;
  align-items: center;
}
.header-container {
  display: flex;
  margin-left: 8rem;
  font-size: 3.2rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
#logo {
  max-height: 9rem;
  max-width: 9rem;
}
ul {
  display: flex;
  justify-content: center;
}

nav li {
  float: left;
  margin: 4.5rem;
  font-size: 1.7rem;
  cursor: pointer;
}

div a:link,
div a:visited,
div a:active {
  color: #222222;
  text-decoration: none;
  text-transform: capitalize;
}
.headerNavigation {
  font-size: 3.5rem;
  padding: 0.5rem;
  margin-right: 8rem;
}
.material-icons.md {
  font-size: 3.5rem;
  padding: 0.5rem;
  grid-column-start: 4;
  grid-column-end: 5;
  cursor: pointer;
}

/* #topbar {
  background-color: #222222;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  font-weight: normal;
}

header {
  background: #55d6aa;
  display: grid;
  grid-template-rows: 9rem;
  grid-template-columns: 8rem 20rem 1fr 20rem 8rem;
  grid-template-areas: "space logo nav buttons space";
  align-items: center;
  overflow: hidden;
}

.header-container {
  display: flex;
  font-size: 3.2rem;
  align-items: center;
  grid-area: 1/2/2/3;
  justify-content: center;
  cursor: pointer;
}

.headerNavigation {
  font-size: 3.5rem;
  padding: 0.5rem;
  grid-area: 1/4/2/5;
}

#logo {
  max-height: 9rem;
  max-width: 9rem;
}

nav {
  display: flex;
  justify-content: center;
  grid-area: nav;
}

nav li {
  float: left;
  margin: 4.5rem;
  font-size: 1.7rem;
  cursor: pointer;
}

div a:link,
div a:visited,
div a:active {
  color: #222222;
  text-decoration: none;
}

.material-icons.md {
  font-size: 3.5rem;
  padding: 0.5rem;
  grid-column-start: 4;
  grid-column-end: 5;
  cursor: pointer;
} */
</style>