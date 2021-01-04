<template>
  <div class="pb-16 -mt-20 sm:pb-0 sm:-mt-32" id="gallery">
    <div class="pb-1 text-center mt-28 xs:block section-title">
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
          ><span class="absolute z-10 ml-5 cursor-pointer prev top-32">
            <!-- without <p> not showing arrow? -->

            <img class="icon-height sm:mt-6" src="/nav/left-arrow.svg"
          /></span>
        </template>

        <div
          class="cursor-pointer slide"
          @click="
            select(img.id)
            showImg(id)
          "
          v-for="img in imgs"
          :key="img.id"
        >
          <img class="mx-auto my-auto img-width" :src="img.src" />
        </div>

        <template slot="next"
          ><span class="absolute right-0 z-10 mr-5 cursor-pointer next top-32"
            ><img
              class="icon-height sm:mt-6"
              src="/nav/right-arrow.svg"
              alt="next" /></span
        ></template>
      </carousel>
    </client-only>

    <!-- <div v-for="img in filteredItems">
      <img :src="img.src" />
    </div> -->

    <vue-easy-lightbox
      :visible="visible"
      :imgs="imgs"
      :index="index"
      @hide="handleHide"
    ></vue-easy-lightbox>
  </div>
</template>

<!-- dodati key i povezati s lightbox pluginom -->

<script>
export default {
  data() {
    return {
      visible: false,
      index: 0, // default: 0
      lightboxSrc: 0,
      imgs: [
        { id: 0, src: '/images/boat01.jpg' },
        { id: 1, src: '/images/boat02.jpg' },
        { id: 2, src: '/images/boat03.jpg' },
        { id: 3, src: '/images/boat01.jpg' },
        { id: 4, src: '/images/boat02.jpg' },
      ],
    }
  },
  computed: {
    filteredItems() {
      return this.imgs.filter((img) => {
        return img.id === this.lightboxSrc
      })
    },
  },
  methods: {
    select(id) {
      this.lightboxSrc = id
    },
    showImg(id) {
      this.index = this.lightboxSrc
      console.log(this.lightboxSrc)
      this.visible = true
    },
    handleHide() {
      this.visible = false
    },
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

.full {
  border: 3px solid red;
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
