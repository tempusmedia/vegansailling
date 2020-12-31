<template>
  <div class="carousel-h">
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
        <SkipperCard @clicked="showSkipperCard" />
        <!-- <img src="https://placehold.it/827x554" /> -->
      </slide>
      <slide :index="1" class="carousel-container">
        <SkipperCard02 @clicked="showSkipperCard02" />
      </slide>
      <slide :index="2" class="carousel-container">
        <SkipperCard03 @clicked="showSkipperCard03" />
      </slide>
    </carousel-3d>

    <transition name="fade">
      <SkipperCardModal v-show="skipperCard" @close="closeSkipperCard" />
    </transition>
    <transition name="fade">
      <SkipperCardModal02 v-show="skipperCard02" @close="closeSkipperCard02" />
    </transition>
    <transition name="fade">
      <SkipperCardModal03 v-show="skipperCard03" @close="closeSkipperCard03" />
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      skipperCard: false,
      skipperCard02: false,
      skipperCard03: false,
      slides: 7,
    }
  },
  methods: {
    showSkipperCard(value) {
      this.skipperCard = value
    },
    closeSkipperCard() {
      this.skipperCard = false
    },
    showSkipperCard02(value) {
      this.skipperCard02 = value
    },
    closeSkipperCard02() {
      this.skipperCard02 = false
    },
    showSkipperCard03(value) {
      this.skipperCard03 = value
    },
    closeSkipperCard03() {
      this.skipperCard03 = false
    },
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
.carousel-h {
  height: 900px;
}

@media only screen and (max-width: 500px) {
  .carousel-3d-slide.carousel-container.current,
  .carousel-3d-slide.carousel-container,
  .carousel-3d-container {
    height: 1000px !important;
  }
}
</style>

<!-- 
  CAROUSEL USING LOOP
  <carousel-3d :perspective="0" :space="400" :display="3">
  <slide v-for="(slide, i) in slides" :index="i">
  
  </slide>

</carousel-3d> -->
