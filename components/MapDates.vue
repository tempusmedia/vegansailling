<template>
  <div>
    <!-- for mobile -->
    <div>
      <svg
        class="w-full -mt-8 sm:hidden"
        viewBox="0 0 389 119"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 27.0874V23.5C48.3928 6.15647 113.574 -6.16145 184 4.16331L188.322 4.79715C269.9 16.7643 333.653 26.1166 389 10.1272L389 118.5H0V27.0874Z"
          fill="#ffffff"
        />
        <path
          d="M-7.50001 14.9942L-7.49999 51.6155L382 51.6155L382 24.1352C319.557 37.7907 244.941 21.2288 160.152 6.94146C85.5374 -5.63128 32.6952 2.7213 -7.50001 14.9942Z"
          fill="white"
          fill-opacity="0.57"
        />

        <path
          d="M-99.5 48.4999C2.99999 3.00001 27.8593 -3.34873 164.926 24.365C275.152 46.6518 365.109 68.8712 440.543 24.3651"
          stroke="url(#paint0_linear)"
          stroke-width="3"
        />
      </svg>
    </div>

    <!-- for desktop -->

    <div class="-mt-40">
      <svg
        class="relative z-10"
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
          d="M960.252 185.587C443.346 98.4866 190.103 215.227 7.34908 274.957L7.02537 358.455L2061.95 376L2061.95 160.756C1777.12 350.778 1403.81 260.329 960.252 185.587Z"
          fill="white"
          fill-opacity="0.57"
          transform="translate(-10,-148)"
        />
        <path
          d="M2061.95 160.758C1777.12 350.779 1403.81 260.33 960.252 185.589C548.999 116.291 229.865 222.307 7.00005 316.923C7.00021 345.424 7.00005 327.424 7.00001 340.138L7.00004 340.139L2061.95 364L2061.95 160.758Z"
          fill="white"
          fill-opacity="0"
          transform="translate(0,-143)"
        />
        <!-- <path
          d="M996.826 204.505C616.78 176.282 1127.65 306.104 1337.15 304.959L2062.5 304.959L2060.84 0.340832C1812.31 379.08 1471.88 239.785 996.826 204.505Z"
          fill="white"
          fill-opacity="0.5"
        /> -->

        <path
          d="M996.826 204.505C616.78 176.282 1127.65 306.104 1337.15 304.959H2000V153C1720 304 1471.88 239.785 996.826 204.505Z"
          fill="white"
          fill-opacity="0.5"
          transform="translate(0,-143)"
        />

        <path
          d="M0.572295 256.909C183.373 205.004 435.972 77.435 979.175 187.266C1416.01 275.59 1772.51 364.247 2071.46 187.866"
          stroke="url(#paint0_linear)"
          stroke-width="3"
          transform="translate(0,-143)"
        />
        <path
          d="M0.572295 256.909C183.373 205.004 435.972 77.435 979.175 187.266C1416.01 275.59 1772.51 364.247 2071.46 187.866"
          stroke="#D5DDDF"
          stroke-width="3"
          transform="translate(0,-143)"
        />
        <path
          class="myClass"
          d="M1004.35 28.155C560.827-52.497 225.516 87.017 1.243 194.26l-.476 896.71H2105.49L2106.06.643c-284.94 205.859-658.19 108.164-1101.71 27.512z"
          fill="#fbfb"
        />
      </svg>
    </div>
  </div>
</template>

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

.my-wave {
  width: 110% !important;
}
</style>
