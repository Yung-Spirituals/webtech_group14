<template>
  <button @click = "onClick" class="button">
    <slot>{{ text }}</slot>
  </button>
</template>

<script>

export default {
  props: {
    text: {
      required: true,
      type: String
    },
    onClick: {
      type: Function,
      required: true
    }
  }
}
</script>

<style scoped>
.button {
  width: 15rem;
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

.button{
  transition-duration: 0.6s;
}

.button:hover{
  background-color: #222222;
  color: #55d6aa;
  box-shadow: inset 15rem 0 0 0 #222222;
  -webkit-box-shadow: inset 15rem 0 0 0 #222222;
  cursor: pointer;
}
</style>