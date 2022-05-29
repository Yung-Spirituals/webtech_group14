<template>
  <div id="container">
    <div class="image">
      <img :src= imageURL  alt=""/>
    </div>
    <div>
      <blockquote>{{ quote }}</blockquote>
      <p>{{ name }}</p>
      <p>{{ title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    quote: {
      required: true,
      type: String
    },
    name: {
      required: true,
      type: String
    },
    title: {
      required: true,
      type: String
    },
    imageURL: {
      required: true,
      type: String
    }
  }
}
</script>


<style scoped>
#container{
  overflow: hidden;
  height: 1fr;
  width: 40rem;
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  justify-items: center;
  text-align: center;
  padding: 5rem;
}

img{
  width: 35rem;
  height: 1fr;
  border-radius: 50%;
}

blockquote {
  margin: 1.5em 10px;
  padding: 0.5em 10px;
}
blockquote::before {
  color: #55d6aa;
  content: "\201C";
  font-size: 4em;
  line-height: 0.1em;
  margin-right: 0.25em;
  vertical-align: -0.4em;
}
blockquote::after {
  color: #55d6aa;
  content: "\201D";
  font-size: 4em;
  line-height: 0.1em;
  margin-left: 0.25em;
  vertical-align: -0.4em;
}

</style>