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

    <!-- for desktop 
    0 100 2101 240
  0 0 2101 300-->
    <div class="absolute hidden w-full my-wave sm:block -bottom-wave -left-16">
      <svg
        class="my-svg-wave"
        viewBox="0 100 2101 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M960.252 185.587C443.346 98.4866 190.103 215.227 7.34908 274.957L7.02537 358.455L2061.95 376L2061.95 160.756C1777.12 350.778 1403.81 260.329 960.252 185.587Z"
          fill="white"
          fill-opacity="0.57"
        />
        <path
          d="M2061.95 160.758C1777.12 350.779 1403.81 260.33 960.252 185.589C548.999 116.291 229.865 222.307 7.00005 316.923C7.00021 345.424 7.00005 327.424 7.00001 340.138L7.00004 340.139L2061.95 364L2061.95 160.758Z"
          fill="white"
        />
        <path
          d="M996.826 204.505C616.78 176.282 1127.65 306.104 1337.15 304.959L2062.5 304.959L2060.84 0.340832C1812.31 379.08 1471.88 239.785 996.826 204.505Z"
          fill="white"
          fill-opacity="0.5"
        />
        <path
          d="M0.572295 256.909C183.373 205.004 435.972 77.435 979.175 187.266C1416.01 275.59 1772.51 364.247 2071.46 187.866"
          stroke="url(#paint0_linear)"
          stroke-width="3"
        />
        <path
          d="M0.572295 256.909C183.373 205.004 435.972 77.435 979.175 187.266C1416.01 275.59 1772.51 364.247 2071.46 187.866"
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
  </div>
</template>
<style>
.my-svg-wave {
  /* min-width: 2101px;
  min-height: 460px;
  width: 120%; */

  margin: 0 auto;
}

.my-wave {
  width: 110% !important;
}
</style>
