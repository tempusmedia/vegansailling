<template>
  <div class="sm:-mt-16">
    <div class="xs:hidden section-title text-center mt-10">
      <h2 class="font-semibold">Boat and cabin</h2>
      <h2 class="font-light">Example</h2>
    </div>
    <div class="hidden sm:block section-title text-center mt-28 pb-1">
      <h2 class="font-semibold">Boat and cabin example</h2>
    </div>
    <client-only>
      <carousel
        :items="1"
        :autoplay="true"
        :navigation="true"
        :dots="false"
        class="relative pt-10 pb-10 sm:pb-beneath-booking sm:pt-16"
        style="max-width: 1215px; margin: 0 auto"
        :margin="5"
        :responsive="{ 0: { items: 1 }, 960: { items: 3 } }"
      >
        <template slot="prev"
          ><span class="prev absolute ml-5 z-10" style="top: 8rem">
            <!-- without <p> not showing arrow? -->

            <img class="icon-height sm:mt-6" src="/nav/left-arrow.svg"
          /></span>
        </template>
        <div class="slide">
          <img class="img-width mx-auto my-auto" src="/images/boat01.jpg" />
        </div>
        <div class="slide">
          <img class="img-width mx-auto my-auto" src="/images/boat02.jpg" />
        </div>
        <div class="slide">
          <img class="img-width mx-auto my-auto" src="/images/boat03.jpg" />
        </div>
        <div class="slide">
          <img class="img-width mx-auto my-auto" src="/images/boat01.jpg" />
        </div>
        <div class="slide">
          <img class="img-width mx-auto my-auto" src="/images/boat02.jpg" />
        </div>
        <div class="slide">
          <img class="img-width mx-auto my-auto" src="/images/boat03.jpg" />
        </div>
        <template slot="next"
          ><span class="next absolute right-0 mr-5 z-10" style="top: 8rem"
            ><img
              class="icon-height sm:mt-6"
              src="/nav/right-arrow.svg"
              alt="next" /></span
        ></template>
      </carousel>
    </client-only>
  </div>
</template>

<script></script>
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
</style>
