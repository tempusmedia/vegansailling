<template>
  <div class="relative sm:pb-24 sm:mt-12" id="about">
    <svg
      viewBox="0 0 1920 279"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="relative hidden sm:block top-14"
    >
      <path
        d="M0 70.4156C284.537 -36.0454 563.384 -17.2181 1048.67 96.1064C1429.44 185.025 1689.99 95.2092 1892.51 25.3945C1901.8 22.195 1910.96 19.0374 1920 15.941V278.5L3.66508e-05 278.5L0 70.4156Z"
        fill="#EAECF1"
      />
    </svg>
    <svg
      viewBox="0 0 1920 279"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="relative mt-5 sm:hidden top-5"
    >
      <path
        d="M0 70.4156C284.537 -36.0454 563.384 -17.2181 1048.67 96.1064C1429.44 185.025 1689.99 95.2092 1892.51 25.3945C1901.8 22.195 1910.96 19.0374 1920 15.941V278.5L3.66508e-05 278.5L0 70.4156Z"
        fill="#EAECF1"
      />
    </svg>
    <h2 class="relative pt-12 font-semibold text-center section-title bg-qna">
      Meet<span class="font-light"> your skipper</span>
    </h2>
    <div class="flex justify-center crew-container"></div>
    <div class="my-mr-top">
      <ThreeCarouselSkipper />

      <h2
        class="relative pt-0 -mt-32 font-semibold text-center sm:mt-0 sm:pt-12 section-title"
      >
        Meet<span class="font-light"> your cook</span>
      </h2>
      <div class="mt-12">
        <ThreeCarouselCook />
      </div>
      <!-- <SkipperCard />
      <br />
      <br />
      <CookCard /> -->
    </div>
  </div>
</template>
<style scoped>
.crew-container {
  height: 743px;
  background-color: #eaecf1;
  position: relative;
  z-index: -1;
}
.my-mr-top {
  margin-top: -710px;
}
</style>
