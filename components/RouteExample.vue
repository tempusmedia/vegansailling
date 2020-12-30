<template>
  <div class="grid grid-cols-12 px-5 mx-auto xl:container mt-28">
    <div class="grid grid-cols-1 col-span-12 lg:grid-cols-2">
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

      <div v-if="route" class="px-5 mt-28 md:mt-0 lg:px-0">
        <h2 class="mb-10 font-semibold text-center section-title sm:text-left">
          Route<span class="font-light"> Example</span>
        </h2>
        <ul class="text-left list-none">
          <li class="flex content">
            <span class="bullet"></span>
            {{ $t('components.route_example.private_1') }}
          </li>
          <li class="flex content">
            <span class="bullet"></span>
            {{ $t('components.route_example.private_2') }}
          </li>
          <li class="flex content">
            <span class="bullet"></span
            >{{ $t('components.route_example.private_3') }}
          </li>
          <li class="flex content">
            <span class="bullet"></span>
            {{ $t('components.route_example.private_4') }}
          </li>
          <li class="flex content">
            <span class="bullet"></span>
            {{ $t('components.route_example.private_5') }}
          </li>
          <li class="flex content">
            <span class="bullet"></span>
            {{ $t('components.route_example.private_6') }}
          </li>
          <li class="flex content">
            <span class="bullet"></span>
            {{ $t('components.route_example.private_7') }}
          </li>
          <li class="flex content">
            <span class="bullet"></span>
            {{ $t('components.route_example.private_8') }}
          </li>
        </ul>
      </div>
      <div v-else class="px-5 mt-28 md:mt-0 lg:px-0">
        <h2 class="mb-10 font-semibold text-center section-title sm:text-left">
          Route<span class="font-light"> Example</span>
        </h2>
        <ul class="text-left list-none">
          <li class="flex content">
            <span class="bullet"></span>
            Route is designed individually, according to your wishes, habits and
            preferences.
          </li>
          <li class="flex content">
            <span class="bullet"></span>
            Usually the route is organized as a round trip but it is also
            possible to make it one way.
          </li>
          <li class="flex content">
            <span class="bullet"></span>Minimum duration of the route is one
            week.
          </li>
          <li class="flex content">
            <span class="bullet"></span>
            We can start from (and return to) any charter base marina in
            Croatia.
          </li>
          <li class="flex content">
            <span class="bullet"></span>
            Bay or marina is generally changed every day or two, preferably in
            the morning in order to catch free buoys/berths or good anchor
            spots.
          </li>
          <li class="flex content">
            <span class="bullet"></span>
            Final route, as well as day-to-day changes are made according to
            weathercast
          </li>
        </ul>
      </div>
    </div>

    <!-- DESKTOP route image container DESKTOP-->
    <div class="grid grid-cols-12 col-span-12 mt-36 gap-x-3 md:gap-x-8 gap-y-8">
      <!-- Split -->
      <div
        class="relative col-span-6 cursor-pointer md:col-span-4 hover:opacity-90 group"
        @click="showModalSplit"
      >
        <!-- na malim ekranima dodati i max-w tako da se može fiksno podesiti elipsa -->
        <div
          class="min-w-32 max-w-route-c relative px-2 xs:px-3.5 mx-auto"
          style="min-width: 133px"
        >
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
              class="absolute w-full object-cover -top-220p lg:-top-34.5"
              src="/images/split-elipse-desk.svg"
            />
          </div>
        </div>
        <div class="flex justify-center -mt-5 sm:mt-0">
          <p class="orange-medium font-size--transition">
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
        class="relative col-span-6 cursor-pointer md:col-span-4 hover:opacity-90 group"
        @click="showModalZadar"
      >
        <div class="min-w-32 max-w-route-c relative px-2 xs:px-3.5 mx-auto">
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
              class="absolute object-cover w-3/4 -top-400p lg:-top-62 -left-8"
              src="/images/wave-orange.svg"
            />
          </div>
        </div>
        <div class="flex justify-center -mt-5 sm:mt-0">
          <p class="orange-medium font-size--transition">
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
        class="relative col-start-4 col-end-10 cursor-pointer md:col-start-9 md:col-end-13 hover:opacity-90 group"
        @click="showModalKrk"
      >
        <!-- max-w-32 sm:max-w-route-c i onda samo smooth-->
        <div
          class="min-w-32 max-w-64 sm:max-w-route-c relative px-2 xs:px-3.5 mx-auto"
        >
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
              class="absolute w-full object-cover -top-475p sm:-top-480p lg:-top-73.5"
              src="/images/krk-elipse-desk.svg"
            />
          </div>
        </div>
        <div class="flex justify-center -mt-5 sm:mt-0">
          <p class="orange-medium font-size--transition">
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
  computed: {
    route: function () {
      if (
        this.$nuxt.$route.path == '/private-sailing' ||
        this.$nuxt.$route.path == '/hr/private-sailing'
      ) {
        return true
      } else return false
    },
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
.bullet::before {
  content: '\2022'; /* Add content: \2022 is the CSS Code/unicode for a bullet */
  color: #ef5e23; /* Change the color */
  font-weight: bold; /* If you want it to be bold */
  /* Needed to add space between the bullet and the text */
  width: 1.5rem; /* Also needed for space (tweak if needed) */
  margin-right: 1.5rem;
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
.font-size--transition {
  transition: all 0.7s ease-in-out !important;
}
</style>
