<template>
  <client-only>
    <!-- important to add no-ssr-->

    <carousel
      :items="2"
      :autoplay="true"
      :responsive="false"
      :navigation="true"
      :dots="false"
      class="relative pt-10 pb-10"
      :margin="5"
    >
      <template slot="prev"
        ><span class="prev absolute ml-5 z-10" style="top: 5.5rem">
          <!-- without <p> not showing arrow? -->

          <img class="icon-height" src="/nav/left-arrow.svg"
        /></span>
      </template>
      <div>
        <!-- ex <slide> -->
        <div class="h-50 flex flex-col items-center justify-center">
          <img class="icon-height" src="/icons/where.svg" />
          <h2 class="icon-title pt-2">Where</h2>
          <p class="icon-content">Krk / Zadar</p>
          <p class="icon-content">/ Split</p>
        </div>
      </div>
      <!-- ex </slide> -->
      <div>
        <!-- ex <slide> -->
        <div class="h-50 flex flex-col items-center justify-center">
          <img class="icon-height" src="/icons/when.svg" />
          <h2 class="icon-title pt-2">When</h2>
          <p class="icon-content">May / Sept</p>
          <p class="icon-content">ember</p>
        </div>
      </div>
      <!-- ex </slide> -->
      <div>
        <!-- ex <slide> -->
        <div class="h-50 max-w-sm flex flex-col items-center justify-center">
          <img class="icon-height" src="/icons/people.svg" />
          <h2 class="icon-title pt-2 leading-tight">How many</h2>
          <h2 class="icon-title leading-tight">people</h2>
          <p class="icon-content">6 - 10</p>
        </div>
      </div>
      <!-- ex </slide> -->
      <div>
        <!-- ex <slide> -->
        <div class="h-50 max-w-sm flex flex-col items-center justify-center">
          <img class="icon-height" src="/icons/much.svg" />
          <h2 class="icon-title pt-2">How much</h2>
          <p class="icon-content">900-1050 eur</p>
          <p class="icon-content">per person</p>
        </div>
      </div>
      <!-- ex </slide> -->
      <div>
        <!-- ex <slide> -->
        <div class="h-50 max-w-sm flex flex-col items-center justify-center">
          <img class="icon-height" src="/icons/duration.svg" />
          <h2 class="icon-title pt-2">Duration</h2>
          <p class="icon-content">7 days</p>
        </div>
      </div>
      <!-- ex </slide> -->
      <div>
        <!-- ex <slide> -->
        <div class="h-50 max-w-sm flex flex-col items-center justify-center">
          <img class="icon-height" src="/icons/skipper.svg" />
          <h2 class="icon-title pt-2">Skipper</h2>
          <p class="icon-content">For safety and</p>
          <p class="icon-content">comfort</p>
        </div>
      </div>
      <!-- ex </slide> -->
      <div>
        <!-- ex <slide> -->
        <div class="h-50 max-w-sm flex flex-col items-center justify-center">
          <img class="icon-height" src="/icons/boat.svg" />
          <h2 class="icon-title pt-2">What boat</h2>
          <p class="icon-content">Any sailing boat or</p>
          <p class="icon-content">catamaran in Croatia</p>
        </div>
      </div>
      <!-- ex </slide> -->
      <div>
        <!-- ex <slide> -->
        <div class="h-50 max-w-sm flex flex-col items-center justify-center">
          <img class="icon-height" src="/icons/extras.svg" />
          <h2 class="icon-title pt-2">Extras</h2>
          <p class="icon-content">Yoga, snorkling,</p>
          <p class="icon-content">caves, hiking</p>
        </div>
      </div>
      <!-- ex </slide> -->
      <div>
        <!-- ex <slide> -->
        <div class="h-50 max-w-sm flex flex-col items-center justify-center">
          <img class="icon-height" src="/icons/cook.svg" />
          <h2 class="icon-title pt-2">Cook</h2>
          <p class="icon-content">Experienced in</p>
          <p class="icon-content">vegan dishes</p>
        </div>
      </div>
      <!-- ex </slide> -->
      <template slot="next"
        ><span class="next absolute right-0 mr-5 z-10" style="top: 5.5rem"
          ><img
            class="icon-height"
            src="/nav/right-arrow.svg"
            alt="next" /></span
      ></template>
    </carousel>
  </client-only>
</template>
<style>
.owl-nav {
  display: none;
}
.icon-height {
  height: 25px;
}
</style>
