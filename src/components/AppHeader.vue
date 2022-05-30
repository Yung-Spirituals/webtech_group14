<template>
  <div id="topbar">
  </div>
  <header role="banner">
    <router-link to="/" role="link" aria-label="Back to home page">
      <div class="header-container">
      <img src="@/assets/leeezard.png" alt="logo" id="logo" />
      <span>XXS</span>
      </div>
    </router-link>
    <nav role="navigation">
      <ul>
        <li v-for="route in filteredRoutes" :key="route.path">
          <RouterLink :to="route.path">{{ route.name }}</RouterLink>
        </li>
      </ul>
    </nav>
    <div class="headerIconNavigation">
      <span class="material-icons md" @click="goToShoppingCart" role="link" aria-label="To shopping cart">
        shopping_cart
      </span>
      <router-link to="/login" role="link" aria-label="To login page">
        <span class="material-icons md"> person_outline </span>
      </router-link>
    </div>
  </header>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const routes = router.getRoutes();
const filteredRoutes = routes.filter((route) => {
  const hiddenRoutes = ["product", "shopping-cart", "login"];
  return !hiddenRoutes.includes(route.name);
});
function goToShoppingCart() {
  router.push(`/shopping-cart/`);
}
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
  cursor: pointer;
  font-size: 2rem;
}

div a:link,
div a:visited,
div a:active {
  color: #222222;
  text-decoration: none;
  text-transform: capitalize;
}
.headerIconNavigation {
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
</style>