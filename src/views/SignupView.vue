<!--Signup page-->
<template>
  <div id="sign-up">
    <img src="@/assets/leeezard.png" alt="logo"/>
    <form id="login-form" v-on:submit.prevent="signUp">
      <h2>SIGN UP</h2>
      <div id="info">
        <label>
          <input id="username" type="text">
          <span class="label-text">Username</span>
        </label>
        <label>
          <input id="password" type="password">
          <span class="label-text">Password</span>
        </label>
      </div>
      <input type="submit" value="Submit" id="submit">
    </form>
    <p>Already have an account?</p>
    <router-link to="login"><p>Log in</p></router-link>
  </div>
</template>

<script>
import AppButton from "@/components/AppButton.vue";

async function signUp() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let data = {
    "username": username,
    "password": password
  }
  const response = await fetch("https://gr14.appdev.cloudns.ph/authenticate/register", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}

export default {
  components: {AppButton},
  methods: {
    signUp
  }
}
</script>


<style scoped>
#sign-up{
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding-top: 5rem;
  padding-bottom: 5rem;
}

#info{
  padding-top: 2rem;
}

form{
  padding-top: 1rem;
  padding-bottom: 3rem;
}

label {
  display: block;
  padding-top: 3rem;
  text-align: center;
}

label .label-text {
  color: #55d6aa;
  cursor: text;
  line-height: 3rem;
  text-transform: uppercase;
  transition: all 0.3s;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
}

label input:focus + .label-text {
  color: #222222;
  margin-top: -0.5rem;
}

label input {
  background-color: transparent;
  border: 0;
  border-bottom: 0.2rem solid #222222;
  color: #222222;
  font-size: 2rem;
  outline: 0;
  padding: 0.6rem 2rem;
  transition: all 0.3s;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  width: 30rem;
  height: 3.8rem;
}

label input:focus {
  width: 45rem;
}

span {
  display: block;
}

label input:valid + .label-text {
  font-size: 2rem;
  transform: translateY(-7rem);
  -webkit-transform: translateY(-7rem);
  -moz-transform: translateY(-7rem);
  -o-transform: translateY(-7rem);
}

#submit {
  width: 16rem;
  height: 5rem;
  padding: 1rem 2rem;
  border: 0.2rem solid #55d6aa;
  border-radius: 3rem;
  background-color: #55d6aa;
  font-family: "Nunito", sans-serif;
  font-weight: 800;
  box-shadow: inset 0 0 0 0 #222222;
  -webkit-box-shadow: inset 0 0 0 0 #222222;
}

#submit{
  transition-duration: 0.6s;
  -webkit-transition-duration: 0.6s;
  -moz-transition-duration: 0.6s;
  -o-transition-duration: 0.6s;
}

#submit:hover{
  background-color: #222222;
  color: #55d6aa;
  box-shadow: inset 15rem 0 0 0 #222222;
  -webkit-box-shadow: inset 15rem 0 0 0 #222222;
  -moz-box-shadow: inset 15rem 0 0 0 #222222;
  -o-box-shadow: inset 15rem 0 0 0 #222222;
  cursor: pointer;
}


</style>