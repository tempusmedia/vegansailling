<template>
  <div>
    <svg
      class="w-full -mt-6 xs:hidden"
      viewBox="0 0 389 119"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 27.0874V23.5C48.3928 6.15647 113.574 -6.16145 184 4.16331L188.322 4.79715C269.9 16.7643 333.653 26.1166 389 10.1272L389 118.5H0V27.0874Z"
        fill="#ffffff"
      />
    </svg>
    <client-only>
      <!-- important to add no-ssr-->

      <carousel
        :items="2"
        :autoplay="true"
        :responsive="false"
        :navigation="true"
        :dots="false"
        class="relative pt-0 pb-10 -mt-10 xs:mt-0 xs:pt-10"
        :margin="5"
      >
        <template slot="prev"
          ><span class="absolute z-10 ml-5 prev top-14 xs:top-22">
            <!-- without <p> not showing arrow? -->

            <img class="icon-height" src="/nav/left-arrow.svg"
          /></span>
        </template>
        <div>
          <!-- ex <slide> -->
          <div class="flex flex-col items-center justify-center h-50">
            <img class="icon-height" src="/icons/where.svg" />
            <h2 class="pt-2 icon-title">Where</h2>
            <p class="icon-content">Krk / Zadar</p>
            <p class="icon-content">/ Split</p>
          </div>
        </div>
        <!-- ex </slide> -->
        <div>
          <!-- ex <slide> -->
          <div class="flex flex-col items-center justify-center h-50">
            <img class="icon-height" src="/icons/when.svg" />
            <h2 class="pt-2 icon-title">When</h2>
            <p class="icon-content">May / Sept</p>
            <p class="icon-content">ember</p>
          </div>
        </div>
        <!-- ex </slide> -->
        <div>
          <!-- ex <slide> -->
          <div class="flex flex-col items-center justify-center max-w-sm h-50">
            <img class="icon-height" src="/icons/people.svg" />
            <h2 class="pt-2 leading-tight icon-title">How many</h2>
            <h2 class="leading-tight icon-title">people</h2>
            <p class="icon-content">4 - 10</p>
          </div>
        </div>
        <!-- ex </slide> -->
        <div>
          <!-- ex <slide> -->
          <div class="flex flex-col items-center justify-center max-w-sm h-50">
            <img class="icon-height" src="/icons/much.svg" />
            <h2 class="pt-2 icon-title">How much</h2>
            <p class="icon-content">2000-10 000</p>
            <p class="icon-content">eur</p>
          </div>
        </div>
        <!-- ex </slide> -->
        <div>
          <!-- ex <slide> -->
          <div class="flex flex-col items-center justify-center max-w-sm h-50">
            <img class="icon-height" src="/icons/duration.svg" />
            <h2 class="pt-2 icon-title">Duration</h2>
            <p class="icon-content">7 - 14 days</p>
          </div>
        </div>
        <!-- ex </slide> -->
        <div>
          <!-- ex <slide> -->
          <div class="flex flex-col items-center justify-center max-w-sm h-50">
            <img class="icon-height" src="/icons/skipper.svg" />
            <h2 class="pt-2 icon-title">Skipper</h2>
            <p class="icon-content">For safety and</p>
            <p class="icon-content">comfort</p>
          </div>
        </div>
        <!-- ex </slide> -->
        <div>
          <!-- ex <slide> -->
          <div class="flex flex-col items-center justify-center max-w-sm h-50">
            <img class="icon-height" src="/icons/boat.svg" />
            <h2 class="pt-2 icon-title">What boat</h2>
            <p class="icon-content">Any sailing boat or</p>
            <p class="icon-content">catamaran in Croatia</p>
          </div>
        </div>
        <!-- ex </slide> -->
        <div>
          <!-- ex <slide> -->
          <div class="flex flex-col items-center justify-center max-w-sm h-50">
            <img class="icon-height" src="/icons/extras.svg" />
            <h2 class="pt-2 icon-title">Extras</h2>
            <p class="icon-content">Yoga, snorkling,</p>
            <p class="icon-content">caves, hiking</p>
          </div>
        </div>
        <!-- ex </slide> -->
        <div>
          <!-- ex <slide> -->
          <div class="flex flex-col items-center justify-center max-w-sm h-50">
            <img class="icon-height" src="/icons/cook.svg" />
            <h2 class="pt-2 icon-title">Cook</h2>
            <p class="icon-content">Experienced in</p>
            <p class="icon-content">vegan dishes</p>
          </div>
        </div>
        <!-- ex </slide> -->
        <template slot="next"
          ><span class="absolute right-0 z-10 mr-5 next top-14 xs:top-22"
            ><img
              class="icon-height"
              src="/nav/right-arrow.svg"
              alt="next" /></span
        ></template>
      </carousel>
    </client-only>
  </div>
</template>
<style>
.owl-nav {
  display: none;
}
.icon-height {
  height: 25px;
}
</style>
