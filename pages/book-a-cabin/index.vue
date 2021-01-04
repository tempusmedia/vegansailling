<template>
  <div class="slide-transition">
    <!--xs mobile -->
    <div
      class="flex flex-col justify-between w-full overflow-x-hidden bg-left bg-no-repeat bg-cover xs:hidden h-bac-landing-xs"
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
              <span class="italic font-light"
                ><p>{{ $t('pages.book_a_cabin.a_cabin') }}</p></span
              >
            </h1>
          </div></template
        >
        <template #button>
          <div class="mx-auto max-w-btn xs:mx-0">
            <a
              class="mt-5 mb-5 btn btn--secondary xs:block xs:mt-2 xs:mb-0"
              type="button"
              @click="showModal"
            >
              <p
                class="font-medium text-center select-none text-btn xs:text-left"
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
      class="relative hidden object-cover object-center w-full overflow-x-hidden overflow-y-hidden bg-no-repeat bg-cover xs:block xs:h-landing-main big:h-landing-main-big"
      style="background-image: url('/images/cover-bac-small.jpg')"
    >
      <div
        class="flex items-center justify-end max-w-screen-xl mx-auto xs:h-landing-main big:h-landing-main-big"
      >
        <TitleCta
          data-aos="fade-left"
          data-aos-duration="500"
          :route="titleCta.route"
          :content="titleCta.content"
          class="relative -top-10"
        >
          <template #title>
            <div class="text-left text-vegan-blue">
              <img
                class="relative wave-props-1"
                src="/images/wave-orange.svg"
              />
              <h1 class="font-semibold leading-tight xs:hidden">
                {{ $t('pages.book_a_cabin.book') }}
                <span class="italic font-light"
                  ><p>{{ $t('pages.book_a_cabin.a_cabin') }}</p></span
                >
              </h1>
              <h1 class="hidden font-semibold leading-tight xs:block">
                {{ $t('pages.book_a_cabin.book') }}
                <span class="italic font-light">{{
                  $t('pages.book_a_cabin.a_cabin')
                }}</span>
              </h1>
            </div></template
          >
          <template #button>
            <!-- <Btn
          :route="route"
          class="mt-5 mb-5 btn btn--secondary xs:block xs:mt-2 xs:mb-0"
          >Book now</Btn
        > -->
            <div class="mx-auto max-w-btn xs:mx-0">
              <a
                class="mt-5 mb-5 btn btn--secondary xs:block xs:mt-2 xs:mb-0"
                @click="showModal"
              >
                <p
                  class="font-medium text-center select-none text-btn xs:text-left"
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
      class="relative flex flex-col justify-between object-cover object-center w-full overflow-x-hidden bg-no-repeat xs:mx-auto sm:-mt-40"
    >
      <OrangeCta>
        <template #title>
          <div class="sm:hidden">
            <h1 class="font-semibold leading-tight text-center text-white">
              All inclusive
              <span class="italic font-light"><p>vegan sailing</p></span>
            </h1>
          </div>
          <div class="hidden sm:block">
            <h1 class="font-semibold leading-tight text-center text-white">
              All inclusive
              <span class="italic font-light">vegan sailing</span>
            </h1>
          </div></template
        >
        <template #content
          ><p class="max-w-lg py-5 text-center text-white">
            Single cabin or bunkbed price: €900 / Double bed cabin price: €2100
            *all reservations are closed 30 days before the trip
          </p></template
        >
        <template #button>
          <div class="flex justify-center">
            <a
              class="mt-5 mb-5 text-white btn btn--primary xs:block xs:mt-2 xs:mb-0"
              @click="showModal"
            >
              <p
                class="font-medium text-center select-none text-btn xs:text-left"
              >
                Reserve <span class="italic font-light">cabin</span> now
              </p>
            </a>
          </div>
        </template>
      </OrangeCta>
    </div>

    <!-- info -->
    <BcaInfoCarousel class="sm:hidden sm:mt-5" />
    <section class="hidden max-w-screen-xl mx-auto my-32 sm:block">
      <div
        class="flex max-w-6xl mx-auto my-12 justify-evenly"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div>
          <div class="flex flex-col items-center justify-center h-50">
            <img class="icon-height" src="/icons/where.svg" />
            <h2 class="pt-2 icon-title">Where</h2>
            <p class="icon-content">Krk / Zadar / Split</p>
          </div>
        </div>
        <div>
          <div class="flex flex-col items-center justify-center h-50">
            <img class="icon-height" src="/icons/when.svg" />
            <h2 class="pt-2 icon-title">When</h2>
            <p class="icon-content">May / September</p>
          </div>
        </div>
        <div>
          <div class="flex flex-col items-center justify-center max-w-sm h-50">
            <img class="icon-height" src="/icons/people.svg" />
            <h2 class="pt-2 icon-title">How many people</h2>
            <p class="icon-content">6 - 10</p>
          </div>
        </div>
        <div>
          <div class="flex flex-col items-center justify-center max-w-sm h-50">
            <img class="icon-height" src="/icons/much.svg" />
            <h2 class="pt-2 icon-title">How much</h2>
            <p class="icon-content">900-1050 eur</p>
            <p class="icon-content">per person</p>
          </div>
        </div>
        <div>
          <div class="flex flex-col items-center justify-center max-w-sm h-50">
            <img class="icon-height" src="/icons/duration.svg" />
            <h2 class="pt-2 icon-title">Duration</h2>
            <p class="icon-content">7 days</p>
          </div>
        </div>
      </div>

      <div
        class="flex max-w-5xl mx-auto justify-evenly"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
      >
        <div>
          <div class="flex flex-col items-center justify-center max-w-sm h-50">
            <img class="icon-height" src="/icons/skipper.svg" />
            <h2 class="pt-2 icon-title">Skipper</h2>
            <p class="icon-content">For safety and</p>
            <p class="icon-content">comfort</p>
          </div>
        </div>
        <div>
          <div class="flex flex-col items-center justify-center max-w-sm h-50">
            <img class="icon-height" src="/icons/boat.svg" />
            <h2 class="pt-2 icon-title">What boat</h2>
            <p class="icon-content">Sailing boat or a catamaran</p>
            <p class="icon-content">from 45-55 feet</p>
          </div>
        </div>
        <div>
          <div class="flex flex-col items-center justify-center max-w-sm h-50">
            <img class="icon-height" src="/icons/extras.svg" />
            <h2 class="pt-2 icon-title">Extras</h2>
            <p class="icon-content">Yoga, snorkling,</p>
            <p class="icon-content">caves, hiking</p>
          </div>
        </div>
        <div>
          <div class="flex flex-col items-center justify-center max-w-sm h-50">
            <img class="icon-height" src="/icons/cook.svg" />
            <h2 class="pt-2 icon-title">Cook</h2>
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

    <Gallery />
    <Reviews />

    <transition name="fade">
      <ModalCabin v-show="isModalVisible" @close="closeModal" />
    </transition>
    <!-- Footer in layout-->
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
.wave-props-1 {
  left: -105px;
  bottom: -250px;
  margin-bottom: -90px;
}
</style>
