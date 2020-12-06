<template>
  <div class="slide-transition">
    <!-- add max-width to each section in front of the bg image. leave bg image w-full, so it looks the same as in the design-->

    <!-- mobile -->
    <div
      class="bg-no-repeat w-full object-center object-cover flex xs:hidden flex-col justify-between overflow-x-hidden"
      style="background-image: url('/images/private-bg-xs.jpg')"
    >
      <TitleCta
        :route="route"
        :content="this.$t('pages.private_sailing.content_mobile')"
      >
        <template #title>
          <div class="text-center text-vegan-blue">
            <h1 class="font-semibold leading-tight">
              {{ $t('pages.private_sailing.experience_private') }}
              <span class="font-light italic"
                ><p>{{ $t('pages.private_sailing.vegan_sailing') }}</p></span
              >
              {{ $t('pages.private_sailing.in') }}
              {{ $t('pages.private_sailing.croatia') }}
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

    <!-- desktop overflow-x-hidden-->
    <div
      class="bg-no-repeat bg-cover w-full object-center object-cover hidden xs:block xs:h-landing-main relative overflow-x-hidden overflow-y-hidden"
      style="background-image: url('/images/private-bg.jpg')"
    >
      <div
        class="max-w-screen-xl xs:h-landing-main mx-auto flex justify-end items-center"
      >
        <TitleCta
          data-aos="fade-left"
          data-aos-duration="500"
          :route="route"
          :content="this.$t('pages.private_sailing.content')"
          class="relative -top-16"
        >
          <template #title>
            <div class="text-left text-vegan-blue">
              <img
                class="relative top-wave-line z-0"
                src="/images/wave-orange.svg"
              />
              <h1 class="font-semibold leading-tight">
                {{ $t('pages.private_sailing.experience_private') }}
                <p>
                  <span class="font-light italic">
                    {{ $t('pages.private_sailing.vegan_sailing') }}</span
                  >
                  {{ $t('pages.private_sailing.in') }}
                </p>
                {{ $t('pages.private_sailing.croatia') }}
              </h1>
            </div></template
          >

          <template #button>
            <!-- <Btn
          :route="route"
          class=""
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

      <WaveTitle />
    </div>

    <!-- info -->
    <InfoCarousel class="sm:hidden" />

    <section class="hidden sm:block max-w-screen-xl mx-auto my-32 mt-8">
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
            <p class="icon-content">4 - 10</p>
          </div>
        </div>
        <div>
          <div class="h-50 max-w-sm flex flex-col items-center justify-center">
            <img class="icon-height" src="/icons/much.svg" />
            <h2 class="icon-title pt-2">How much</h2>
            <p class="icon-content">2000-10 000 eur</p>
          </div>
        </div>
        <div>
          <div class="h-50 max-w-sm flex flex-col items-center justify-center">
            <img class="icon-height" src="/icons/duration.svg" />
            <h2 class="icon-title pt-2">Duration</h2>
            <p class="icon-content">7 - 14 days</p>
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
            <p class="icon-content">Any sailing boat or</p>
            <p class="icon-content">catamaran in Croatia</p>
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

    <section class="max-w-screen-xl mx-auto">
      <QnA />
    </section>
    <section>
      <RouteExample />
    </section>
    <!-- route example će voditi na svoje pojedinačne pageve zbog mogućih promjena u budućnosti -->

    <OurCrew />

    <BoatAndCabin />
    <Reviews />
    <!-- <carousel-3d>
      <slide :index="0"> Slide 1 Content </slide>
      <slide :index="1"> Slide 2 Content </slide>
      <slide :index="2"> Slide 3 Content </slide>
    </carousel-3d> -->
    <transition name="fade">
      <ModalPrivate v-show="isModalVisible" @close="closeModal" />
    </transition>
    <!-- <ModalPrivate v-show="isModalVisible" @close="closeModal" /> -->
    <!-- Footer in layout-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      route: '/',
      isModalVisible: false,
    }
  },
  methods: {
    showModal() {
      this.isModalVisible = true
    },
    closeModal() {
      this.isModalVisible = false
    },
  },
}
</script>
<style scoped>
.test {
  color: rgb(167, 13, 13);
}
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
