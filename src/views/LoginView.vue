<template>
  <div id="login">
    <img src="@/assets/leeezard.png" alt="logo"/>
    <form action="#" id="loginForm" v-on:submit.prevent="login()">
      <h1>LOGIN</h1>
      <div id="info">
        <label>
          <input id="username" type="text">
          <div class="label-text">Username</div>
        </label>
        <label>
          <input id="password" type="password">
          <div class="label-text">Password</div>
        </label>
      </div>
      <input type="submit" value="Submit" id="submit">
    </form>
    <p>Don't have an account?</p>
    <p>Sign up</p>
  </div>
</template>

<script>
</script>


<style scoped>
#login{
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
  font-size: 1.5rem;
  outline: 0;
  padding: 0.6rem 2rem;
  transition: all 0.3s;
  width: 30rem;
  height: 3.8rem;
}

label input:focus {
  width: 45rem;
}

label input:valid + .label-text {
  font-size: 1.7rem;
  transform: translateY(-7rem);
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
}

#submit:hover{
  background-color: #222222;
  color: #55d6aa;
  box-shadow: inset 15rem 0 0 0 #222222;
  -webkit-box-shadow: inset 15rem 0 0 0 #222222;
  cursor: pointer;
}

p{
  font-size: 1.5rem;
}

</style>