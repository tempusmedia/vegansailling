<template>
  <div class="-mt-10 sm:-mt-32">
    <div class="mt-10 text-center xs:hidden section-title">
      <h2 class="font-semibold">Boat and cabin</h2>
      <h2 class="font-light">Example</h2>
    </div>
    <div class="hidden pb-1 text-center xs:block section-title mt-28">
      <h2 class="font-semibold">Boat and cabin example</h2>
    </div>

    <div
      class="container hidden grid-cols-1 row-gap-5 col-gap-10 px-5 pt-10 pb-12 mx-auto sm:grid sm:pb-40 sm:pt-20 sm:grid-cols-2 md:px-10 lg:px-20"
    >
      <a
        class="relative cursor-pointer hover:opacity-80"
        target="_blank"
        :href="'https://vegansailing.eu/mytour/' + sailing + '/index.html'"
        ><div
          class="absolute w-full h-10 text-center bg-gray-900 bg-opacity-30 top-10"
        >
          <p class="text-2xl font-bold text-white font-poppins">
            SAILING BOAT 360 VIRTUAL TOUR
          </p>
        </div>
        <img :src="'/images/' + sailing + '.jpg'"
      /></a>
      <a
        class="relative cursor-pointer hover:opacity-80"
        target="_blank"
        :href="'https://vegansailing.eu/mytour/' + catamaran + '/index.html'"
        ><div
          class="absolute w-full h-10 text-center bg-gray-900 bg-opacity-30 top-10"
        >
          <p class="text-2xl font-bold text-white font-poppins">
            CATAMARAN 360 VIRTUAL TOUR
          </p>
        </div>
        <img :src="'/images/' + catamaran + '.jpg'"
      /></a>
    </div>
    <div class="sm:hidden">
      <client-only>
        <carousel
          :items="1"
          :autoplay="true"
          :navigation="true"
          :dots="false"
          class="relative pt-10 pb-10 sm:pb-beneath-booking sm:pt-16 bnc-carousel"
          :margin="5"
          :responsive="{ 0: { items: 1 } }"
        >
          <template slot="prev"
            ><span
              class="absolute z-10 ml-5 cursor-pointer prev top-36 sm:top-70"
            >
              <img class="icon-height sm:mt-6" src="/nav/left-arrow.svg"
            /></span>
          </template>

          <a
            class="relative mx-10 cursor-pointer hover:opacity-80"
            target="_blank"
            :href="'https://vegansailing.eu/mytour/' + sailing + '/index.html'"
            ><div
              class="absolute w-full h-10 text-center bg-gray-900 bg-opacity-30 top-10"
            >
              <p class="text-2xl font-bold text-white font-poppins">
                SAILING BOAT 360 VIRTUAL TOUR
              </p>
            </div>
            <img :src="'/images/' + sailing + '.jpg'"
          /></a>
          <a
            class="relative mx-10 cursor-pointer hover:opacity-80"
            target="_blank"
            :href="
              'https://vegansailing.eu/mytour/' + catamaran + '/index.html'
            "
            ><div
              class="absolute w-full h-10 text-center bg-gray-900 bg-opacity-30 top-10"
            >
              <p class="text-2xl font-bold text-white font-poppins">
                CATAMARAN 360 VIRTUAL TOUR
              </p>
            </div>
            <img :src="'/images/' + catamaran + '.jpg'"
          /></a>

          <!--       
          <div>
            <a
              class="cursor-pointer hover:opacity-80"
              target="_blank"
              href="https://vegansailing.eu/mytour/theasys02/index.html"
              ><img
                class="mx-auto my-auto img-width"
                src="/images/theasys01.jpg"
            /></a>
          </div>
          <div>
            <a
              class="cursor-pointer hover:opacity-80"
              target="_blank"
              href="https://vegansailing.eu/mytour/theasys03/index.html"
              ><img
                class="mx-auto my-auto img-width"
                src="/images/theasys02.jpg"
            /></a>
          </div> -->
          <!-- <div>
          <a
            class="cursor-pointer hover:opacity-80"
            target="_blank"
            href="https://vegansailing.eu/mytour/theasys03/index.html"
            ><img class="mx-auto my-auto img-width" src="/images/theasys03.jpg"
          /></a>
        </div>
        <div>
          
          <a
            class="cursor-pointer hover:opacity-80"
            target="_blank"
            href="https://vegansailing.eu/mytour/theasys04/index.html"
            ><img class="mx-auto my-auto img-width" src="/images/theasys04.jpg"
          /></a>
        </div> -->

          <!-- 02 catamaran private; 03 monohul private ;01 catamaran bac; 04 sailing boat bac-->
          <template slot="next"
            ><span
              class="absolute right-0 z-10 mr-5 cursor-pointer next top-36 sm:top-70"
              ><img
                class="icon-height sm:mt-6"
                src="/nav/right-arrow.svg"
                alt="next" /></span
          ></template>
        </carousel>
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    if (
      this.$nuxt.$route.path == '/private-sailing' ||
      this.$nuxt.$route.path == '/hr/private-sailing'
    ) {
      return {
        catamaran: 'theasys02',
        sailing: 'theasys03',
      }
    }
    if (
      this.$nuxt.$route.path == '/book-a-cabin' ||
      this.$nuxt.$route.path == '/hr/book-a-cabin'
    ) {
      return {
        catamaran: 'theasys01',
        sailing: 'theasys04',
      }
    }
  },
}
</script>

<style scoped>
.owl-nav {
  display: none;
}
.img-width {
  width: 80% !important;
}

.full {
  border: 3px solid red;
}

/* @media only screen and (min-width: 600px) {
  .img-width {
    width: 303px !important;
  }
} */
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
