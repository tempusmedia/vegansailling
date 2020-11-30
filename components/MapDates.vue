<template>
  <div>
    <!-- mobile -->

    <div
      class="xs:hidden bg-no-repeat w-full object-center object-cover flex flex-col justify-between overflow-x-hidden mt-landing relative"
      style="background-image: url('/images/map-xs.jpg')"
    >
      <div class="spacer-item"></div>
      <MapDateItem name="Split" date="15 May" />
      <MapDateItem name="Zadar" date="1 June" />
      <MapDateItem name="Krk" date="15 July" />
      <MapDateItem name="Split" date="1 August" />
      <MapDateItem name="Krk" date="15 August" />
    </div>

    <!-- desktop
    <div
      class="hidden xs:flex bg-no-repeat w-full object-center object-cover overflow-x-hidden mt-landing relative xs:map-part"
      style="background-image: url('/images/map-desk.jpg')"
    >
      <div class="max-w-screen-xl" style="border: 2px solid red">
        <div class="spacer-item-desk"></div>
        <MapDateItem name="Split" date="15 May" />
        <MapDateItem name="Zadar" date="1 June" />
        <MapDateItem name="Krk" date="15 July" />
        <MapDateItem name="Split" date="1 August" />
        <MapDateItem name="Krk" date="15 August" />
      </div>
    </div> -->

    <div
      class="hidden xs:flex bg-no-repeat w-full overflow-x-hidden my-mar"
      style="background-image: url('/images/map-desk.jpg')"
    >
      <div class="my-cont">
        <div class="spacer-item-desk"></div>
        <MapDateItem name="Split" date="15 May" />
        <MapDateItem name="Zadar" date="1 June" />
        <MapDateItem name="Krk" date="15 July" />
        <MapDateItem name="Split" date="1 August" />
        <MapDateItem name="Krk" date="15 August" />
      </div>
    </div>
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
.spacer-item-desk {
  height: 370px;
}
.map-part {
  height: 1117px;
  display: flex;
  justify-content: center;
  border: 2px solid red;
}

.my-mar {
  margin-top: -12rem;
  padding-bottom: 20rem;
}
.my-cont {
  width: 1111px;
  margin: 0 auto;
}
</style>
