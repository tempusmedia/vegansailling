<template>
  <div
    class="bg-no-repeat w-full object-center object-cover flex xs:hidden flex-col justify-between overflow-x-hidden mt-landing relative"
    style="background-image: url('/images/map-xs.jpg')"
  >
    <div class="spacer-item"></div>
    <MapDateItem name="Split" date="15 May" />
    <MapDateItem name="Zadar" date="1 June" />
    <MapDateItem name="Krk" date="15 July" />
    <MapDateItem name="Split" date="1 August" />
    <MapDateItem name="Krk" date="15 August" />
  </div>
</template>
<script></script>
<style scoped>
.mt-landing {
  margin-top: -10rem;
  z-index: -1;
}
.spacer-item {
  height: 580px;
}
</style>
