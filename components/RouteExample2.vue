<template>
  <div class="px-5 mx-auto xl:container mt-28" style="border: 2px solid red">
    <div class="grid grid-cols-1 gap-10 lg:grid-cols-2">
      <div class="relative flex">
        <div class="w-1/2">
          <img style="width: 100%" src="/images/boat01-xs.jpg" />
        </div>
        <div class="w-1/2">
          <img
            class="relative object-contain w-full -left-10 top-14"
            src="/images/boat02-xs.jpg"
          />
        </div>
      </div>

      <div class="px-5 mt-28 md:mt-0 lg:px-0">
        <h2 class="mb-10 font-semibold text-center section-title sm:text-left">
          Route<span class="font-light"> Example</span>
        </h2>
        <ul class="text-left">
          <li class="content">
            <span class="bullet"></span>
            Route is designed individually, according to your wishes, habits and
            preferences.
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

    <!-- DESKTOP route image container DESKTOP-->
    <div class="grid grid-cols-3 gap-10 mt-36">
      <!-- Split -->
      <div
        class="relative col-span-1 cursor-pointer hover:opacity-90 group"
        @click="showModalSplit"
      >
        <div class="relative px-3 mx-auto max-w-route-c">
          <div class="relative overflow-hidden rounded-full pb-full">
            <img
              class="absolute object-cover w-full h-full"
              src="/images/split-xs.jpg"
            />
          </div>
        </div>

        <div class="relative mx-auto max-w-route-c">
          <div class="relative pb-2/10">
            <img
              class="absolute object-cover w-full -top-220p lg:-top-35"
              src="/images/split-elipse-desk.svg"
            />
          </div>
        </div>
        <div class="flex justify-center">
          <p class="orange-medium title-elipse">
            {{ $t('components.route_example.split') }}
          </p>
          <img
            class="pl-1 group-hover:animate-rightbounce"
            src="/images/arrow-lg-r.svg"
          />
        </div>
      </div>
      <!-- Zadar -->

      <div
        class="relative col-span-1 cursor-pointer hover:opacity-90 group"
        @click="showModalZadar"
      >
        <!-- <img class="absolute wave-pos" src="/images/wave-orange.svg" /> -->

        <div class="relative px-3 mx-auto max-w-route-c">
          <div class="relative overflow-hidden rounded-full pb-full">
            <img
              class="absolute object-cover w-full h-full"
              src="/images/zadar-xs.jpg"
            />
          </div>
        </div>

        <div class="relative mx-auto max-w-route-c">
          <div class="relative pb-2/10">
            <img
              class="absolute object-cover w-full -top-220p lg:-top-35"
              src="/images/wave-orange.svg"
            />
          </div>
        </div>
        <div class="flex justify-center">
          <p class="orange-medium title-elipse">
            {{ $t('components.route_example.zadar') }}
          </p>
          <img
            class="pl-1 group-hover:animate-rightbounce"
            src="/images/arrow-lg-r.svg"
          />
        </div>
      </div>

      <!-- krk -->

      <div
        class="relative col-span-1 cursor-pointer hover:opacity-90 group"
        @click="showModalKrk"
      >
        <!-- <img class="absolute top-cdesk10" src="/images/krk-elipse-desk.svg" /> -->
        <div class="relative px-3 mx-auto max-w-route-c">
          <div class="relative overflow-hidden rounded-full pb-full">
            <img
              class="absolute object-cover w-full h-full"
              src="/images/krk-xs.jpg"
            />
          </div>
        </div>

        <div class="relative mx-auto max-w-route-c">
          <div class="relative pb-2/10">
            <img
              class="absolute object-cover w-full -top-220p lg:-top-35"
              src="/images/krk-elipse-desk.svg"
            />
          </div>
        </div>
        <div class="flex justify-center">
          <p class="orange-medium title-elipse">
            {{ $t('components.route_example.krk') }}
          </p>
          <img
            class="pl-1 group-hover:animate-rightbounce"
            src="/images/arrow-lg-r.svg"
          />
        </div>
      </div>
    </div>
    <!-- modals -->
    <transition name="fade">
      <ModalSplit v-show="isModalVisibleSplit" @close="closeModalSplit" />
    </transition>
    <transition name="fade">
      <ModalZadar v-show="isModalVisibleZadar" @close="closeModalZadar" />
    </transition>
    <transition name="fade">
      <ModalKrk v-show="isModalVisibleKrk" @close="closeModalKrk" />
    </transition>
  </div>
</template>
<script>
//po potrebi dodati da čita da li se korisnik nalazi na /private ili /book-a-cabin i sukladno tome prikazivati odgovarajući modal u skripti
//napraviti private i cabin varijante components
export default {
  data() {
    return {
      isModalVisibleSplit: false,
      isModalVisibleKrk: false,
      isModalVisibleZadar: false,
    }
  },
  methods: {
    showModalSplit() {
      this.isModalVisibleSplit = true
    },
    closeModalSplit() {
      this.isModalVisibleSplit = false
    },
    showModalKrk() {
      this.isModalVisibleKrk = true
    },
    closeModalKrk() {
      this.isModalVisibleKrk = false
    },
    showModalZadar() {
      this.isModalVisibleZadar = true
    },
    closeModalZadar() {
      this.isModalVisibleZadar = false
    },
  },
}
</script>
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
  bottom: 65px;
  width: 330px;
}

.wave-pos {
  top: 25px;
  left: -20px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.route-xs-wave {
  transform: scaleX(1) rotate(180deg);
}
.negative-5 {
  top: -5rem;
}
</style>
