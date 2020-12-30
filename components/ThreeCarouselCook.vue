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
        <CookCard @clicked="showCookCard" />
        <!-- <img src="https://placehold.it/827x554" /> -->
      </slide>
      <slide :index="1" class="carousel-container">
        <CookCard02 @clicked="showCookCard02" />
      </slide>
    </carousel-3d>

    <transition name="fade">
      <CookCardModal v-show="cookCard" @close="closeCookCard" />
    </transition>
    <!-- <transition name="fade">
      <CookCardModal02 v-show="cookCard02" @close="closeCookCard02" />
    </transition> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      cookCard: false,
      cookCard02: false,
      slides: 7,
    }
  },
  methods: {
    showCookCard(value) {
      this.cookCard = value
    },
    closeCookCard() {
      this.cookCard = false
    },
    showCookCard02(value) {
      this.cookCard02 = value
    },
    closeCookCard02() {
      this.cookCard02 = false
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
