<template>
  <div id="image-container">
    <div id="input">
      <input id="input-button" type="file" name="myImage" accept="image/png, image/jpeg" v-on:change="onChange()"/>
    </div>
    <img id="image" :src=image_path alt="">
  </div>
</template>

<script>
export default {
  name: "AdminEditImages",
  props: {
    image_path: {
      type: String,
      required: true
    }
    },
    methods: {
      onChange
  }
}
function onChange(){

}
</script>
<style scoped>

#image-container{
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  justify-items: center;
  overflow: hidden;
  border-radius: 2rem;
  max-height: 100%;
  width: 100%;
}

#input-button{
  cursor: pointer;
  background-color: white;
  border: #010315 solid 2px;
}

#input{
  display: grid;
  z-index: 1;
  grid-area: 1 / 1 / 2 / 2;
  text-align: center;
  background-color: white;
  width: 30rem;
  height: 8rem;
  background-color:rgba(255,255,255,0.5);
  justify-items: center;
  align-items: center;
}

#input:hover{
  transform: scale(1.03);
  transition: transform 300ms ease-in;
}

#input:hover + #image{
  transform: scale(1.03);
  transition: transform 300ms ease-in;
}

#image{
  z-index: -1;
  grid-area: 1 / 1 / 2 / 2;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>