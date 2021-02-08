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
      class="container grid grid-cols-1 row-gap-5 col-gap-10 px-5 pt-10 pb-12 mx-auto sm:pb-40 sm:pt-20 sm:grid-cols-2 md:px-10 lg:px-20"
    >
      <a
        class="cursor-pointer hover:opacity-80"
        target="_blank"
        href="https://vegansailing.eu/mytour/theasys01/index.html"
        ><img src="/images/boat01.jpg"
      /></a>
      <a
        class="cursor-pointer hover:opacity-80"
        target="_blank"
        href="https://vegansailing.eu/mytour/theasys02/index.html"
        ><img src="/images/boat02.jpg"
      /></a>
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
          ><span
            class="absolute z-10 ml-5 cursor-pointer prev top-28 sm:top-32"
          >
            <!-- without <p> not showing arrow? -->

            <img class="icon-height sm:mt-6" src="/nav/left-arrow.svg"
          /></span>
        </template>
        <div>
          <a
            class="cursor-pointer hover:opacity-80"
            target="_blank"
            href="https://vegansailing.eu/mytour/theasys01/index.html"
            ><img src="/images/theasys01.jpg"
          /></a>
        </div>
        <div>
          <a
            class="cursor-pointer hover:opacity-80"
            target="_blank"
            href="https://vegansailing.eu/mytour/theasys02/index.html"
            ><img src="/images/theasys02.jpg"
          /></a>
        </div>
        <div>
          <a
            class="cursor-pointer hover:opacity-80"
            target="_blank"
            href="https://vegansailing.eu/mytour/theasys03/index.html"
            ><img src="/images/theasys03.jpg"
          /></a>
        </div>
        <div>
          <a
            class="cursor-pointer hover:opacity-80"
            target="_blank"
            href="https://vegansailing.eu/mytour/theasys04/index.html"
            ><img src="/images/theasys04.jpg"
          /></a>
        </div>

        <template slot="next"
          ><span
            class="absolute right-0 z-10 mr-5 cursor-pointer next top-28 sm:top-32"
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
<style></style>
