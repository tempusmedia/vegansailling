<template>
  <div>
    <div class="section-title text-center">
      <h2 class="font-semibold">Boat and cabin</h2>
      <h2 class="font-light">Example</h2>
    </div>
    <client-only>
      <carousel
        :items="1"
        :autoplay="true"
        :navigation="true"
        :dots="false"
        class="relative pt-10 pb-10"
        :margin="5"
      >
        <template slot="prev"
          ><span class="prev absolute ml-5 z-10" style="top: 8rem">
            <!-- without <p> not showing arrow? -->

            <img class="icon-height" src="/nav/left-arrow.svg"
          /></span>
        </template>
        <slide>
          <img class="img-width mx-auto my-auto" src="/images/boat01.jpg" />
        </slide>
        <slide>
          <img class="img-width mx-auto my-auto" src="/images/boat02.jpg" />
        </slide>
        <slide>
          <img class="img-width mx-auto my-auto" src="/images/boat03.jpg" />
        </slide>
        <template slot="next"
          ><span class="next absolute right-0 mr-5 z-10" style="top: 8rem"
            ><img
              class="icon-height"
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
</style>
