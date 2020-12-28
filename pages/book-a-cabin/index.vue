<template>
  <div class="slide-transition">
    <!--xs mobile -->
    <div
      class="bg-no-repeat bg-cover bg-left w-full flex xs:hidden flex-col justify-between overflow-x-hidden"
      style="background-image: url('/images/cover-bac-small.jpg')"
    >
      <TitleCta
        :route="titleCta.route"
        :content-mobile="titleCta.contentMobile"
      >
        <template #title>
          <div class="text-center text-vegan-blue">
            <h1 class="font-semibold leading-tight">
              {{ $t('pages.book_a_cabin.book') }}
              <span class="font-light italic"
                ><p>{{ $t('pages.book_a_cabin.a_cabin') }}</p></span
              >
            </h1>
          </div></template
        >
        <template #button>
          <div class="max-w-btn mx-auto xs:mx-0">
            <a
              class="btn btn--secondary xs:block mt-5 mb-5 xs:mt-2 xs:mb-0"
              type="button"
              @click="showModal"
            >
              <p
                class="font-medium text-btn text-center xs:text-left select-none"
              >
                Book Now
              </p>
            </a>
          </div>
        </template>
      </TitleCta>
    </div>

    <!--xs: desktop rai-->
    <div
      class="bg-no-repeat bg-cover w-full object-center object-cover hidden xs:block xs:h-landing-main overflow-x-hidden relative z-10"
      style="background-image: url('/images/cover-bac-small.jpg')"
    >
      <div
        class="max-w-screen-xl xs:h-landing-main mx-auto flex justify-center xs:justify-end items-center"
      >
        <TitleCta
          data-aos="fade-left"
          data-aos-duration="500"
          :route="titleCta.route"
          :content="titleCta.content"
          class="relative top-16"
        >
          <template #title>
            <div class="text-left text-vegan-blue">
              <img
                class="relative"
                style="left: -105px; bottom: -250px; margin-bottom: -90px"
                src="/images/wave-orange.svg"
              />
              <h1 class="font-semibold leading-tight xs:hidden">
                {{ $t('pages.book_a_cabin.book') }}
                <span class="font-light italic"
                  ><p>{{ $t('pages.book_a_cabin.a_cabin') }}</p></span
                >
              </h1>
              <h1 class="font-semibold leading-tight hidden xs:block">
                {{ $t('pages.book_a_cabin.book') }}
                <span class="font-light italic">{{
                  $t('pages.book_a_cabin.a_cabin')
                }}</span>
              </h1>
            </div></template
          >
          <template #button>
            <!-- <Btn
          :route="route"
          class="btn btn--secondary xs:block mt-5 mb-5 xs:mt-2 xs:mb-0"
          >Book now</Btn
        > -->
            <div class="max-w-btn mx-auto xs:mx-0">
              <a
                class="btn btn--secondary xs:block mt-5 mb-5 xs:mt-2 xs:mb-0"
                @click="showModal"
              >
                <p
                  class="font-medium text-btn text-center xs:text-left select-none"
                >
                  Book Now
                </p>
              </a>
            </div>
          </template>
        </TitleCta>
      </div>
    </div>
    <MapDates />
    <div
      class="bg-no-repeat w-full object-center object-cover flex flex-col justify-between overflow-x-hidden xs:mx-auto relative sm:-mt-40"
    >
      <!-- style="background-image: url('/images/bg-orangecta.jpg')" -->
      <OrangeCta>
        <template #title>
          <div class="sm:hidden">
            <h1 class="font-semibold leading-tight text-white text-center">
              All inclusive
              <span class="font-light italic"><p>vegan sailing</p></span>
            </h1>
          </div>
          <div class="hidden sm:block">
            <h1 class="font-semibold leading-tight text-white text-center">
              All inclusive
              <span class="font-light italic">vegan sailing</span>
            </h1>
          </div></template
        >
        <template #content
          ><p class="text-white text-center max-w-lg py-5">
            Single cabin or bunkbed price: €900 / Double bed cabin price: €2100
            *all reservations are closed 30 days before the trip
          </p></template
        >
        <template #button>
          <div class="flex justify-center">
            <a
              class="btn btn--primary xs:block mt-5 mb-5 xs:mt-2 xs:mb-0 text-white"
              @click="showModal"
            >
              <p
                class="font-medium text-btn text-center xs:text-left select-none"
              >
                Reserve <span class="font-light italic">cabin</span> now
              </p>
            </a>
          </div>
        </template>
      </OrangeCta>
    </div>

    <!-- info -->
    <BcaInfoCarousel class="sm:hidden sm:mt-5" />
    <section class="hidden sm:block max-w-screen-xl mx-auto my-32">
      <div
        class="flex max-w-6xl justify-evenly my-12 mx-auto"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div>
          <div class="h-50 flex flex-col items-center justify-center">
            <img class="icon-height" src="/icons/where.svg" />
            <h2 class="icon-title pt-2">Where</h2>
            <p class="icon-content">Krk / Zadar / Split</p>
          </div>
        </div>
        <div>
          <div class="h-50 flex flex-col items-center justify-center">
            <img class="icon-height" src="/icons/when.svg" />
            <h2 class="icon-title pt-2">When</h2>
            <p class="icon-content">May / September</p>
          </div>
        </div>
        <div>
          <div class="h-50 max-w-sm flex flex-col items-center justify-center">
            <img class="icon-height" src="/icons/people.svg" />
            <h2 class="icon-title pt-2">How many people</h2>
            <p class="icon-content">6 - 10</p>
          </div>
        </div>
        <div>
          <div class="h-50 max-w-sm flex flex-col items-center justify-center">
            <img class="icon-height" src="/icons/much.svg" />
            <h2 class="icon-title pt-2">How much</h2>
            <p class="icon-content">900-1050 eur</p>
            <p class="icon-content">per person</p>
          </div>
        </div>
        <div>
          <div class="h-50 max-w-sm flex flex-col items-center justify-center">
            <img class="icon-height" src="/icons/duration.svg" />
            <h2 class="icon-title pt-2">Duration</h2>
            <p class="icon-content">7 days</p>
          </div>
        </div>
      </div>

      <div
        class="flex max-w-5xl justify-evenly mx-auto"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
      >
        <div>
          <div class="h-50 max-w-sm flex flex-col items-center justify-center">
            <img class="icon-height" src="/icons/skipper.svg" />
            <h2 class="icon-title pt-2">Skipper</h2>
            <p class="icon-content">For safety and</p>
            <p class="icon-content">comfort</p>
          </div>
        </div>
        <div>
          <div class="h-50 max-w-sm flex flex-col items-center justify-center">
            <img class="icon-height" src="/icons/boat.svg" />
            <h2 class="icon-title pt-2">What boat</h2>
            <p class="icon-content">Sailing boat or a catamaran</p>
            <p class="icon-content">from 45-55 feet</p>
          </div>
        </div>
        <div>
          <div class="h-50 max-w-sm flex flex-col items-center justify-center">
            <img class="icon-height" src="/icons/extras.svg" />
            <h2 class="icon-title pt-2">Extras</h2>
            <p class="icon-content">Yoga, snorkling,</p>
            <p class="icon-content">caves, hiking</p>
          </div>
        </div>
        <div>
          <div class="h-50 max-w-sm flex flex-col items-center justify-center">
            <img class="icon-height" src="/icons/cook.svg" />
            <h2 class="icon-title pt-2">Cook</h2>
            <p class="icon-content">Experienced in</p>
            <p class="icon-content">vegan dishes</p>
          </div>
        </div>
      </div>
    </section>

    <section class="w-full mx-auto overflow-x-hidden">
      <QnA />
    </section>
    <section>
      <RouteExample />
    </section>
    <OurCrew />

    <Reviews />

    <transition name="fade">
      <ModalCabin v-show="isModalVisible" @close="closeModal" />
    </transition>
    <!-- Footer in layout-->

    <probna />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isModalVisible: false,
      titleCta: {
        route: '/',
        contentMobile:
          'Join all inclusive vegan \n  sailing trip and share a boat \n  with other vegans',
        content:
          'Join all inclusive vegan sailing trip \n and share a boat with other \n vegans',
        // firstline: 'Join all inclusive vegan',
        // secondline: 'and share a boat with other',
        // thirdline: ' vegans',
      },
    }
  },
  //ako promjenim stanje radit će tranzicija npr. dodam još nešto
  methods: {
    showModal() {
      this.isModalVisible = true
    },
    closeModal() {
      this.isModalVisible = false
    },
  },
  transition: {
    name: 'fade',
  },
}
</script>
<style scoped>
.slide-transition {
  scroll-behavior: smooth;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
