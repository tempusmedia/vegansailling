<template>
  <div id="example">
    <carousel-3d :inverse-scaling="1500" :space="800">
      <slide v-for="(slide, i) in slides" :index="i">
        <span class="title">You know</span>
        <p>
          You know, being a test pilot isn't always the healthiest business in
          the world.
        </p>
      </slide>
    </carousel-3d>
  </div>
</template>
<script>
export default {
  data() {
    return {
      slides: 5,
    }
  },
}
</script>
<style>
.carousel-3d-container .carousel-3d-slide {
  padding: 20px;
}
.carousel-3d-container .carousel-3d-slide .title {
  font-size: 22px;
}
</style>
