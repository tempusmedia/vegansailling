<template>
  <div class="mt-10 flex flex-col">
    <!-- zamjeniti ove dvije fotke -->
    <div class="flex sm:hidden">
      <img src="/images/boat01-xs.jpg" />
      <img src="/images/boat02-xs.jpg" />
    </div>

    <div class="py-10 mx-5 sm:mt-24">
      <div class="flex">
        <div class="hidden sm:flex sm:w-1/2 relative justify-end pr-10">
          <img
            src="/images/boat01-lg.jpg"
            class="relative"
            style="top: -5rem"
          />
          <div class="relative opacity-80">
            <img src="/images/boat02-lg.jpg" class="relative -left-20" />
            <svg
              class="w-full absolute -bottom-6 -left-16"
              viewBox="0 0 468 151"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.8144 99.6368C154.292 -4.50714 258.027 210.724 454.88 6.52001"
                stroke="white"
                stroke-width="4"
              />
            </svg>

            <svg
              class="w-full absolute bottom-0 -left-20"
              viewBox="0 0 343 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M343 1.51107V49.6062H0V1.88697C27.343 -2.01141 60.6183 -0.363166 99.6712 11.5124C214.671 46.4827 276.9 41.329 343 1.51107Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div class="sm:w-1/2 sm:max-w-md sm:-mt-10">
          <h2
            class="section-title font-semibold text-center sm:text-left mb-10"
          >
            Route<span class="font-light"> Example</span>
          </h2>
          <ul class="text-left">
            <li class="content">
              <span class="bullet"></span>
              Route is designed individually, according to your wishes, habits
              and preferences.
            </li>
            <li class="content">
              <span class="bullet"></span>
              Usually the route is organized as a round trip but it is also
              possible to make it one way.
            </li>
            <li class="content">
              <span class="bullet"></span>Minimum duration of the route is one
              week.
            </li>
            <li class="content">
              <span class="bullet"></span>
              We can start from (and return to) any charter base marina in
              Croatia.
            </li>
            <li class="content">
              <span class="bullet"></span>
              Bay or marina is generally changed every day or two, preferably in
              the morning in order to catch free buoys/berths or good anchor
              spots.
            </li>
            <li class="content">
              <span class="bullet"></span>
              Final route, as well as day-to-day changes are made according to
              weathercast
            </li>
          </ul>
        </div>
      </div>
      <!-- route img container xs-->
      <div class="mt-12 lg:hidden">
        <div class="flex justify-between">
          <!-- Split -->
          <div class="relative">
            <div class="flex flex-col items-center">
              <img class="rounded-full h-36 w-36" src="/images/split-xs.jpg" />
              <span class="flex pt-2"
                ><p class="orange-medium">Split</p>
                <img class="pl-1" src="/images/arrow-right-xs.svg"
              /></span>
            </div>
            <img class="absolute bottom-c10" src="/images/elipse-bottom.svg" />
          </div>
          <!-- Zadar -->
          <div class="relative">
            <img class="absolute wave-pos" src="/images/waves-on-cyrcle.svg" />

            <div class="flex flex-col items-center">
              <img class="rounded-full h-36 w-36" src="/images/zadar-xs.jpg" />
              <span class="flex pt-2"
                ><p class="orange-medium">Zadar</p>
                <img class="pl-1" src="/images/arrow-right-xs.svg"
              /></span>
            </div>
          </div>
        </div>
        <!-- Krk -->
        <div class="flex justify-center mt-4 relative">
          <img class="absolute top-c10" src="/images/elipse-top.svg" />
          <div class="flex flex-col items-center">
            <img class="rounded-full h-36 w-36" src="/images/krk-xs.jpg" />
            <span class="flex pt-2"
              ><p class="orange-medium">Krk</p>
              <img class="pl-1" src="/images/arrow-right-xs.svg"
            /></span>
          </div>
        </div>
      </div>

      <!-- route image container desk-->
      <div class="mt-28 hidden lg:block max-w-screen-xl mx-auto mb-12">
        <div class="flex justify-evenly">
          <!-- Split -->
          <div class="relative w-1/3 flex flex-col justify-center">
            <div class="flex flex-col items-center">
              <img class="rounded-full h-76 w-76" src="/images/split-xs.jpg" />
              <img
                class="absolute bottom-cdesk10"
                src="/images/split-elipse-desk.svg"
              />
              <span class="flex pt-8"
                ><p class="orange-medium">Split</p>
                <img class="pl-1" src="/images/arrow-right-xs.svg"
              /></span>
            </div>
          </div>
          <!-- Zadar -->
          <div class="relative">
            <img class="absolute wave-pos" src="/images/wave-orange.svg" />

            <div class="flex flex-col items-center">
              <img class="rounded-full h-76 w-76" src="/images/zadar-xs.jpg" />
              <span class="flex pt-8"
                ><p class="orange-medium">Zadar</p>
                <img class="pl-1" src="/images/arrow-right-xs.svg"
              /></span>
            </div>
          </div>
          <div class="relative w-1/3 flex flex-col justify-center">
            <div class="flex flex-col items-center">
              <img class="rounded-full h-76 w-76" src="/images/krk-xs.jpg" />
              <img
                class="absolute top-cdesk10"
                src="/images/krk-elipse-desk.svg"
              />
              <span class="flex pt-8"
                ><p class="orange-medium">Krk</p>
                <img class="pl-1" src="/images/arrow-right-xs.svg"
              /></span>
            </div>
          </div>
        </div>
        <!-- Krk -->
      </div>
    </div>
  </div>
</template>

<style>
ul {
  list-style: none; /* Remove default bullets */
}

li {
  display: flex;
}

.bullet::before {
  content: '\2022'; /* Add content: \2022 is the CSS Code/unicode for a bullet */
  color: red; /* Change the color */
  font-weight: bold; /* If you want it to be bold */
  /* Needed to add space between the bullet and the text */
  width: 1.5rem; /* Also needed for space (tweak if needed) */
  margin-right: 1.5rem;
}

.top-c10 {
  top: -7px;
}

.top-cdesk10 {
  top: -14px;
  width: 330px;
}

.bottom-c10 {
  bottom: 35px;
  left: 10px;
}

.bottom-cdesk10 {
  bottom: 45px;
  width: 330px;
}

.wave-pos {
  top: 25px;
  left: -20px;
}
</style>
