<!--Reusable testimonial cards-->
<template>
  <div class="testimonial-card">
    <div class="testimonial-image">
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
.testimonial-card{
  height: 70rem;
  width: 40rem;
}

img{
  width: 35rem;
  height: 1fr;
  border-radius: 50%;
}

blockquote {
  margin: 1.5em 10px;
  padding: 0.5em 10px;
  font-size: 2rem;
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