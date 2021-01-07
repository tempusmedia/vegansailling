<template>
  <div class="slide-transition">
    <!-- add max-width to each section in front of the bg image. leave bg image w-full, so it looks the same as in the design-->

    <!-- mobile -->
    <div
      class="flex flex-col justify-between w-full overflow-x-hidden bg-top bg-no-repeat bg-cover h-landing-xs sm:hidden"
      style="background-image: url('/images/cover-pvs-small.jpg')"
    >
      <TitleCta
        :route="route"
        :content="this.$t('pages.private_sailing.content_mobile')"
      >
        <template #title>
          <div class="text-center text-vegan-blue">
            <h1 class="font-semibold leading-tight">
              {{ $t('pages.private_sailing.experience_private') }}
              <span class="italic font-light"
                ><p>{{ $t('pages.private_sailing.vegan_sailing') }}</p></span
              >
              {{ $t('pages.private_sailing.in') }}
              {{ $t('pages.private_sailing.croatia') }}
            </h1>
          </div></template
        >

        <!-- mobile -->
        <template #button>
          <div class="mx-auto max-w-btn sm:mx-0">
            <a
              class="mt-5 mb-5 btn btn--secondary sm:block sm:mt-2 sm:mb-0"
              type="button"
              @click="showModal"
            >
              <p
                class="font-medium text-center select-none text-btn sm:text-left"
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
      class="relative hidden object-cover object-center w-full overflow-x-hidden overflow-y-hidden bg-no-repeat bg-cover sm:block sm:h-landing-main big:h-landing-main-big"
      style="background-image: url('/images/cover-pvs-small.jpg')"
    >
      <div
        class="flex items-center justify-end max-w-screen-xl mx-auto sm:h-landing-main big:h-landing-main-big"
      >
        <TitleCta
          data-aos="fade-left"
          data-aos-duration="500"
          :route="route"
          :content="this.$t('pages.private_sailing.content')"
          class="relative -top-10"
        >
          <template #title>
            <div class="text-left text-vegan-blue">
              <img
                class="relative z-0 top-wave-line"
                src="/images/wave-orange.svg"
              />

              <h1 class="font-semibold leading-tight">
                {{ $t('pages.private_sailing.experience_private') }}
                <p>
                  <span class="italic font-light">
                    {{ $t('pages.private_sailing.vegan_sailing') }}</span
                  >
                  {{ $t('pages.private_sailing.in') }}
                </p>
                {{ $t('pages.private_sailing.croatia') }}
              </h1>
            </div></template
          >

          <!-- desktop -->
          <template #button>
            <div class="mx-auto max-w-btn sm:mx-0">
              <a
                class="mt-5 mb-5 btn btn--secondary sm:block sm:mt-2 sm:mb-0"
                @click="
                  showModal()

               
                "
              >
                <p
                  class="font-medium text-center select-none text-btn sm:text-left"
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
    <!-- white wave on mobile -->

    <PrivateInfoCarousel class="sm:hidden" />

    <section class="hidden max-w-screen-xl mx-auto my-32 mt-8 sm:block">
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
            <p class="icon-content">4 - 10</p>
          </div>
        </div>
        <div>
          <div class="flex flex-col items-center justify-center max-w-sm h-50">
            <img class="icon-height" src="/icons/much.svg" />
            <h2 class="pt-2 icon-title">How much</h2>
            <p class="icon-content">2000-10 000 eur</p>
          </div>
        </div>
        <div>
          <div class="flex flex-col items-center justify-center max-w-sm h-50">
            <img class="icon-height" src="/icons/duration.svg" />
            <h2 class="pt-2 icon-title">Duration</h2>
            <p class="icon-content">7 - 14 days</p>
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
            <p class="icon-content">Any sailing boat or</p>
            <p class="icon-content">catamaran in Croatia</p>
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
    <!-- route example će voditi na svoje pojedinačne pageve zbog mogućih promjena u budućnosti -->

    <OurCrew />

    <BoatAndCabin />
    <Gallery />

 
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
    <!-- <DataFetcher /> -->
  </div>
</template>

<script>
export default {
  // async asyncData({ $axios }) {
  //   const api = 'http://localhost:3000/api/'
  //   const mountains = await $axios.$get(api)
  //   return { mountains }
  // },

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
  transition: {
    name: 'fade',
  },

  head: {
    title: 'Experience Private Vegan Sailing | Vegan Sailing',
    meta: [
      {
        hid: 'title',
        name: 'title',
        content: 'Experience Private Vegan Sailing | Vegan Sailing',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Private Vegan Sailing | A vacation for all your senses. 7-14 days long sailing tour. Choose your days. Rent a boat with a vegan cook and/or skipper.',
      },
      //opengraph facebook
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://vegan.tempusmedia.hr/private-sailing',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Experience Private Vegan Sailing | Vegan Sailing',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Private Vegan Sailing | A vacation for all your senses. 7-14 days long sailing tour. Choose your days. Rent a boat with a vegan cook and/or skipper.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/private-bg.jpg',
      },
      //twitter
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:url',
        property: 'twitter:url',
        content: 'https://vegan.tempusmedia.hr/private-sailing',
      },
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: 'Experience Private Vegan Sailing | Vegan Sailing',
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content:
          'Private Vegan Sailing | A vacation for all your senses. 7-14 days long sailing tour. Choose your days. Rent a boat with a vegan cook and/or skipper.',
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: '/private-bg.jpg',
      },
    ],
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
