<!--Reusable introduction cards-->
<template>
  <div id="container">
    <div>
      <span class="material-icons md"> {{ icon }} </span>
    </div>
    <h2>{{ text }}</h2>
    <p>{{ textTwo }}</p>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      required: true,
      type: String
    },
    textTwo: {
      required: true,
      type: String
    },
    icon: {
      required: true,
      type: String
    }
  }
}
</script>

<style scoped>

#container{
  width: 40rem;
  height: 20rem;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  text-align: center;
  color: white;
}

p{
  padding-right: 2rem;
  padding-left: 2rem;
}

.md{
  font-size: 8rem;
}

/************************************
            media query
************************************/

@media screen and (max-width: 68em){
  p{
    padding-right: 1rem;
    padding-left: 1rem;
  }
}

</style>