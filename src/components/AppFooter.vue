<template>
  <footer role="contentinfo">
    <div class="extra-information" id="extras-list">
      <ul>
        <li>DISCOVER</li>
        <li><RouterLink to="/find-a-store">Find a store</RouterLink></li>
        <li><RouterLink to="/sign-up-email">Sign up for emails</RouterLink></li>
        <li><RouterLink to="/feedback">Feedback</RouterLink></li>
      </ul>
    </div>
    <div class="extra-information" id="get-help-list">
      <ul>
        <li>GET HELP</li>
        <li><RouterLink to="/order-status">Order status</RouterLink></li>
        <li><RouterLink to="/shipping-delivery">Shipping and delivery</RouterLink></li>
        <li><RouterLink to="/returns">Returns</RouterLink></li>
        <li><RouterLink to="/payment-options">Payment options</RouterLink></li>
        <li><RouterLink to="/contact-us">Contact us</RouterLink></li>
      </ul>
    </div>
    <div class="extra-information" id="about-us-list">
      <ul>
        <li>ABOUT US</li>
        <li><RouterLink to="/about-us">About us</RouterLink></li>
        <li><RouterLink to="/news">News</RouterLink></li>
        <li><RouterLink to="/careers">Careers</RouterLink></li>
        <li><RouterLink to="/sustainability">Sustainability</RouterLink></li>
      </ul>
    </div>
    <div class="extra-information" id="socials-list">
      <ul>
        <li>SOCIALS</li>
        <li>Find us on:</li>
        <li>
          <img src="@/components/icons/facebook.png" alt="facebook-icon">
        </li>
        <li>
          <img src="@/components/icons/instagram.png" alt="instagram-icon">
        </li>
        <li>
          <img src="@/components/icons/twitter.png" alt="twitter-icon">
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
</script>

<style scoped>
footer{
  display: grid;
  grid-template-rows: 5vh 40vh 5vh;
  grid-template-columns: 4vw 1fr 1fr 1fr 1fr 4vw;
  background: #222222;
}

footer a:link, footer a:visited, footer a:active{
  color: white;
  text-decoration: none;
}

footer li{
  color: white;
  padding-bottom: 1.5rem;
}

footer li:nth-child(1){
  font-size: 2rem;
  color: #55d6aa;
  padding-top: 2rem;
  padding-bottom: 1.5rem;
}

#extras-list{
  grid-area: 2/2/3/3;
}

#get-help-list{
  grid-area: 2/3/3/4;
}

#about-us-list{
  grid-area: 2/4/3/5;
}

#socials-list{
  grid-area: 2/5/3/6;
}

.extra-information{
  color: white;
  justify-self: center;
}

#socials-list img{
  width: 2vw;
  height: 2vw;
}

#socials-list li:nth-child(n+3){
  float:left;
  margin-right: 1.2vw;
}
</style>