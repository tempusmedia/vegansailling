<template>
  <div style="height: 900px">
    <carousel-3d
      :perspective="0"
      :space="400"
      :display="3"
      :width="552"
      :height="826"
      :border="0"
      :controlsVisible="true"
      :autoplay="true"
      :autoplayTimeout="3000"
      :autoplayHoverPause="true"
    >
      <slide :index="0" class="carousel-container">
        <SkipperCard />
        <!-- <img src="https://placehold.it/827x554" /> -->
      </slide>
      <slide :index="1" class="carousel-container">
        <SkipperCard />
      </slide>
      <slide :index="2" class="carousel-container">
        <CookCard />
      </slide>
    </carousel-3d>
  </div>
</template>
<script>
export default {
  data() {
    return {
      slides: 7,
    }
  },
}
</script>
<style scoped>
/* .carousel-container {
  height: 826px !important;
  width: 552px !important;
}
.carousel-3d-slider {
  height: 826px !important;
  width: 552px !important;
}  */
/* .carousel-3d-slide {
  border-width: 0 !important;
  outline: none !important;
} */
.carousel-3d-slide.carousel-container {
  opacity: 0.6 !important;
  background: none;
}
.carousel-3d-slide.carousel-container.current {
  background: none;
  opacity: 1 !important;
}
</style>

<!-- 
  CAROUSEL USING LOOP
  <carousel-3d :perspective="0" :space="400" :display="3">
  <slide v-for="(slide, i) in slides" :index="i">
  
  </slide>

</carousel-3d> -->
