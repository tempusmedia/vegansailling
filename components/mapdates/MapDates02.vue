<template>
  <div class="relative z-50" style="border: 2px solid purple">
    <div class="relative -z-20" style="top: -50px">
      <svg
        viewBox="10 90 2051 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M961.012 190.584C444.106 103.484 190.863 220.224 8.10903 279.953L8.10907 478.176L2130.5 478.5L2130.5 162.253C1845.67 352.275 1404.57 265.326 961.012 190.584Z"
          fill="white"
          fill-opacity="0.57"
        />
        <path
          d="M997.584 209.502C617.538 181.279 1128.41 311.1 1337.91 309.956L2132.08 305.615L2130.41 0.996943C1881.88 379.736 1472.64 244.781 997.584 209.502Z"
          fill="white"
          fill-opacity="0.5"
        />
        <path
          d="M1.33157 261.906C184.132 210.001 436.731 82.4319 979.934 192.263C1416.77 280.586 1773.27 369.243 2072.22 192.863"
          stroke="url(#paint0_linear)"
          stroke-width="3"
        />
        <path
          d="M1.33157 261.906C184.132 210.001 436.731 82.4319 979.934 192.263C1416.77 280.586 1773.27 369.243 2072.22 192.863"
          stroke="#D5DDDF"
          stroke-width="3"
        />

        <defs>
          <linearGradient
            id="paint0_linear"
            x1="31.4158"
            y1="279.888"
            x2="2065.59"
            y2="354.038"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#ED4924" />
            <stop offset="1" stop-color="#F17322" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <div class="container relative mx-auto" style="border: 2px solid blue">
      <div class="relative z-40">
        <MapDateItem name="Split" date="15 May" />
        <MapDateItem name="Zadar" date="1 June" />
        <MapDateItem name="Krk" date="15 July" />
        <MapDateItem name="Split" date="1 August" />
        <MapDateItem name="Krk" date="15 August" />
      </div>
    </div>
    <!-- style="margin-top: -42rem; border: 5px solid red" -->
    <svg
      class="relative -z-10; min-width:700px"
      style="top: 0"
      id="mapbg"
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
  height: 200px;
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
  background: no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: 100% 100%;
}
.my-cont {
  width: 1111px;
  margin: 0 auto;
  border: 2px solid red;
}
.myClass {
  fill: url(#image);
}
.zasvg {
  top: -425px;
}
.maklas {
  margin-top: clamp(-20rem, -40vw, -42rem);
}
</style>
