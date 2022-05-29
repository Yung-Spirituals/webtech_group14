<template>
  <div id = custom-form>
    <span>{{ option }}</span>
    <input id="custom-checkbox" v-model="checked" type="checkbox" v-on:change="onChange()" value="check"/>
    <span id="custom-checkmark" />
  </div>
</template>

<script>
export default {
  name: "CheckBox",
  props: {
    option: {
      type: String,
      required: true
    }
  },
  methods:{
    onChange
  },
  data(){
    return {
      checked: []
    };
  }
}

function onChange() {

}
</script>

<style scoped>
input[type="checkbox"]{
  appearance: none;
  background-color: #ffffff;
  width: 4em;
  height: 4em;
  border: 0.15em solid #010315;
  border-radius: 0.5em;
  background-size: 0;
  display: grid;
  place-content: center;
}

input[type="checkbox"]::before{
  content: "";
  width: 2.7em;
  height: 2.7em;
  transform: scale(0);
}

input[type="checkbox"]:checked::before{
  transform-origin: center;
  border: none;
  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  transform: scale(1);
  transition: transform 50ms;
  background-color: #ffffff;
}
input[type="checkbox"]:checked{
  background-color: #55d6aa;
}
</style>