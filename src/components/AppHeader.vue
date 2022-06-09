<!--Universal header that will be displayed on all pages-->
<template>
  <header role="banner">
    <router-link to="/" role="link" aria-label="back to home page">
      <div class="header-container">
        <img src="@/assets/leeezard.png" alt="logo" id="logo"/>
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
    <!-- Icons that can be pressed to get to user profile or shopping cart -->
    <div class="icon-navigation">
      <span class="material-icons md" @click="goToShoppingCart" role="link" aria-label="to shopping cart">
        shopping_cart
      </span>
      <router-link to="/login" role="link" aria-label="to login page">
        <span class="material-icons md"> person_outline </span>
      </router-link>
    </div>
  </header>
</template>

<script setup>
import { useRouter } from "vue-router";

/**
 * Creates router links in the navigation to all the views linked in the index.js except the ones listed in the hidden routes constant.
 * @type {Router}
 */
const router = useRouter();
const routes = router.getRoutes();
const filteredRoutes = routes.filter((route) => {
  const hiddenRoutes = ["product", "shopping-cart", "login", "construction", "sign up", "a-product"];
  return !hiddenRoutes.includes(route.name);
});
function goToShoppingCart() {
  router.push(`/shopping-cart/`);
}
</script>

<style scoped>

header {
  display: grid;
  grid-template-columns: auto 1fr auto;
  background: #55d6aa;
  align-items: center;
  border-top: #222222 solid 1.5rem;
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

li a:hover{
  text-decoration: underline;
}

.icon-navigation {
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

/************************************
            media query
************************************/

/**
Responsiveness for header when it hits a breakpoint
*/
@media screen and (max-width: 48em){

  .header-container {
    flex-direction: column;
    margin-left: 2rem;
  }

  nav li {
    margin: 2rem;
  }
}

</style>