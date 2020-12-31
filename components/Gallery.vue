<template>
  <div class="-mt-40 sm:-mt-32" id="gallery">
    <div class="mt-10 text-center xs:hidden section-title">
      <h2 class="font-semibold">Gallery</h2>
    </div>
    <div class="hidden pb-1 text-center xs:block section-title mt-28">
      <h2 class="font-semibold">Gallery</h2>
    </div>
    <client-only>
      <carousel
        :items="1"
        :autoplay="true"
        :navigation="true"
        :dots="false"
        class="relative pt-10 pb-10 sm:pb-beneath-booking sm:pt-16 bnc-carousel"
        :margin="5"
        :responsive="{ 0: { items: 1 }, 960: { items: 3 } }"
      >
        <template slot="prev"
          ><span class="absolute z-10 ml-5 prev top-32">
            <!-- without <p> not showing arrow? -->

            <img class="icon-height sm:mt-6" src="/nav/left-arrow.svg"
          /></span>
        </template>

        <div class="slide" v-for="img in imgs">
          <img class="mx-auto my-auto img-width" :src="img.src" />
        </div>

        <template slot="next"
          ><span class="absolute right-0 z-10 mr-5 next top-32"
            ><img
              class="icon-height sm:mt-6"
              src="/nav/right-arrow.svg"
              alt="next" /></span
        ></template>
      </carousel>
    </client-only>
  </div>
</template>

<!-- dodati key i povezati s lightbox pluginom -->

<script>
export default {
  data() {
    return {
      imgs: [
        { src: '/images/boat01.jpg' },
        { src: '/images/boat02.jpg' },
        { src: '/images/boat03.jpg' },
      ],
    }
  },
}
</script>
<style>
.owl-nav {
  display: none;
}
.img-width {
  width: 80% !important;
}

@media only screen and (min-width: 600px) {
  .img-width {
    width: 303px !important;
  }
}
.slide {
  max-width: 303px;
}
.owl-item {
  display: flex;
  justify-content: center;
}
.bnc-carousel {
  max-width: 1215px;
  margin: 0 auto;
}
</style>
