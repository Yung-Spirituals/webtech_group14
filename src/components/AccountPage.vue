<template>
  <div id="container">
    <section class="sideBar">
      <img src="@/assets/leeezard.png">
      <nav role="navigation">
        <ul>
          <li>User settings</li>
          <li>My account</li>
        </ul>
        <hr>
        <ul>
          <li>My orders</li>
          <li>Orders</li>
        </ul>
        <hr>
        <AppButton text="Sign out" aria-labelledby="Log out"/>
      </nav>
    </section>
  </div>
</template>

<script>
import AppButton from "@/components/AppButton.vue";
export default {
  components: {
    AppButton
  }
}
</script>

<style scoped>
#container{
  display: grid;
  grid-template-rows: 90vh;
  grid-template-columns: 20rem 1fr;
  padding-top: 5rem;
}

.sideBar{
  grid-area: 1/1/2/2;
  text-align: center;
}

img{
  width: 10rem;
  height: 10rem;
}

li {
  font-weight: 600;
}

li:nth-child(1){
  font-size: 2rem;
  font-weight: 700;
  color: #55d6aa;
  padding-top: 2rem;
  padding-bottom: 1rem;
}

li a:hover{
  text-decoration: underline;
}

hr{
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>