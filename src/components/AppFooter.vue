<template>
  <footer>
    <div class="useful-information" id="extras-list">
      <ul>
        <li>DISCOVER</li>
        <li><RouterLink to="/find-a-store">FIND A STORE</RouterLink></li>
        <li><RouterLink to="/sign-up-email">SIGN UP FOR EMAILS</RouterLink></li>
        <li><RouterLink to="/feedback">FEEDBACK</RouterLink></li>
      </ul>
    </div>
    <div class="useful-information" id="get-help-list">
      <ul>
        <li>GET HELP</li>
        <li><RouterLink to="/order-status">ORDER STATUS</RouterLink></li>
        <li><RouterLink to="/shipping-delivery">SHIPPING AND DELIVERY</RouterLink></li>
        <li><RouterLink to="/returns">RETURNS</RouterLink></li>
        <li><RouterLink to="/payment-options">PAYMENT OPTIONS</RouterLink></li>
        <li><RouterLink to="/contact-us">CONTACT US</RouterLink></li>
      </ul>
    </div>
    <div class="useful-information" id="about-us-list">
      <ul>
        <li>ABOUT US</li>
        <li><RouterLink to="/news">NEWS</RouterLink></li>
        <li><RouterLink to="/careers">CAREERS</RouterLink></li>
        <li><RouterLink to="/sustainability">SUSTAINABILITY</RouterLink></li>
      </ul>
    </div>
    <div class="useful-information" id="socials-list">
      <ul>
        <li>SOCIALS</li>
        <li>FIND US ON:</li>
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
  font-size: 0.9vw;

}

footer li:nth-child(1){
  font-size: 1vw;
  color: #55d6aa;
  padding-bottom: 1vw;
  padding-top: 2vw;
}

footer li:not(:first-child) {
  margin-bottom: 1vw;
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

.useful-information{
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