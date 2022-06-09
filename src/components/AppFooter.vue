<!--Universal footer that will be displayed on all pages-->
<template>
  <footer role="contentinfo">
    <div class="extra-information" id="extras-list">
      <ul>
        <li>DISCOVER</li>
        <li><router-link to="/construction">Find a store</router-link></li>
        <li><router-link to="/construction">Sign up for emails</router-link></li>
        <li><router-link to="/construction">Feedback</router-link></li>
      </ul>
    </div>
    <div class="extra-information" id="get-help-list">
      <ul>
        <li>GET HELP</li>
        <li><router-link to="/order-status">Order status</router-link></li>
        <li><router-link to="/construction">Shipping and delivery</router-link></li>
        <li><router-link to="/construction">Returns</router-link></li>
        <li><router-link to="/construction">Payment options</router-link></li>
        <li><router-link to="/construction">Contact us</router-link></li>
      </ul>
    </div>
    <div class="extra-information" id="about-us-list">
      <ul>
        <li>ABOUT US</li>
        <li><router-link to="/about-us">About us</router-link></li>
        <li><router-link to="/construction">News</router-link></li>
        <li><router-link to="/construction">Careers</router-link></li>
        <li><router-link to="/construction">Sustainability</router-link></li>
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
  font-size: 2.3rem;
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
  width: 4rem;
  height: 4rem;
}

#socials-list li:nth-child(n+3){
  float:left;
  margin-right: 2rem;
  cursor: pointer;
}

li a:hover{
  text-decoration: underline;
}

/************************************
            media query
************************************/

/**
Responsiveness for footer when it hits a breakpoint
*/
@media screen and (max-width: 45em){
  footer{
    column-gap: 2rem;
  }

  footer li:nth-child(1){
    font-size: 1.5rem;
  }

  footer li{
    color: white;
    font-size: 1.2rem;
    padding-bottom: 1.5rem;
  }

  #socials-list img{
    width: 3rem;
    height: 3rem;
  }
}
</style>