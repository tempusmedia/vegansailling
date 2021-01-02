<template>
  <div>
    <svg
      id="mapbg"
      width="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2000 800"
    >
      <defs>
        <pattern
          id="image"
          width="1"
          height="1"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <image
            xlink:href="/images/bgmap01.jpg"
            width="100"
            height="100"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          ></image>
        </pattern>
      </defs>
      <path
        class="myClass"
        d="M1004.35 28.155C560.827-52.497 225.516 87.017 1.243 194.26l-.476 896.71H2105.49L2106.06.643c-284.94 205.859-658.19 108.164-1101.71 27.512z"
        fill="#fbfb"
      />
    </svg>
  </div>
</template>
<style scoped>
.myClass {
  fill: url(#image);
}
</style>
