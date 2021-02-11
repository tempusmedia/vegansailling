<template>
  <div
    class="absolute z-50 justify-center w-full h-screen bg-white align-center"
  >
    
      <img src="/images/carrot-loader.gif" class="mx-auto"/>
      <!-- <div class="relative top-1/3 loader"></div> -->
      <div class="pl-5 mx-auto subtext "><p class="text-xs opacity-75 text-vegan-blue text-light font-poppins">LOADING...</p></div>
    </div>
  </div>
</template>
<style scoped>
img, .subtext {
  height: 100px !important;
  max-width: 143px !important;
  position: relative;
  top: 40%;
}

.subtext > p {
  margin-left: 24px !important;
}
</style>
