<template>
  <div>
    <!-- for mobile -->

    <div
      class="relative -mt-40 sm:hidden -mb-44 sm:-mb-64 lg:-mb-96 bg-gradient-to-b from-transparent via-qna-smooth to-qna"
    >
      <svg
        class="relative z-10"
        id="mapbg"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2000 3550"
      >
        <defs>
          <pattern
            id="imagexs"
            width="1"
            height="1"
            viewBox="11 10 80 100"
            preserveAspectRatio="none"
          >
            <image
              xlink:href="/images/bgmap01xs.jpg"
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
        <!-- 
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
        />-->
        <path
          d="M0.572295 256.909C183.373 205.004 435.972 77.435 979.175 187.266C1416.01 275.59 1772.51 364.247 2071.46 187.866"
          stroke="#D5DDDF"
          stroke-width="3"
          transform="translate(0,-143)"
        />
        <!-- 
        <path
          class="myClassxs"
          d="M1004.35 28.1551C560.827 -52.4969 225.516 87.0171 1.24292 194.26L1.24309 2594.5H2105.97L2106.06 0.643066C1821.12 206.502 1447.87 108.807 1004.35 28.1551Z"
          fill="#FFBBFF"
        /> -->

        <path
          class="myClassxs"
          d="M1004.44 42.529C560.982 -93.8725 199.312 70.1264 -24.9299 251.5V4492H2079.5L2106 -4.00025C1821.1 344.156 1447.9 178.931 1004.44 42.529Z"
          fill="#FFBBFF"
        />
      </svg>
      <div class="container relative z-50 mx-auto pl-7 bottom-96">
        <div class="relative z-40">
          <MapDateItem name="Krk " region="(North Adriatic)" date="17 July" />
          <MapDateItem
            name="Zadar "
            region="(Central Adriatic)"
            date="31 July"
          />
          <MapDateItem
            name="Split "
            region="(South Adriatic)"
            date="14 August"
          />
        </div>
      </div>
    </div>
    <!-- for desktop -->

    <div class="relative hidden -mt-40 sm:block -mb-44 sm:-mb-64 lg:-mb-96">
      <svg
        class="relative z-10"
        id="mapbg"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2000 1050"
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
              xlink:href="/images/bgmap02.jpg"
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
      <div class="container relative z-50 pl-20 mx-auto" style="bottom: 37vw">
        <div class="relative z-40">
          <MapDateItem name="Krk " region="(North Adriatic)" date="17 July" />
          <MapDateItem
            name="Zadar "
            region="(Central Adriatic)"
            date="31 July"
          />
          <MapDateItem
            name="Split "
            region="(South Adriatic)"
            date="14 August"
          />
        </div>
      </div>
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
.myClassxs {
  fill: url(#imagexs);
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
