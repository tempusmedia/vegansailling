<template>
  <div>
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
          <!-- <Btn
        :route="route"
        class="btn btn--secondary xs:block mt-5 mb-5 xs:mt-2 xs:mb-0"
        >Book now</Btn
      > -->

          <div class="max-w-btn mx-auto xs:mx-0">
            <a
              class="btn btn--secondary xs:block mt-5 mb-5 xs:mt-2 xs:mb-0"
              type="button"
              @click="showModal"
            >
              <p class="font-medium text-btn text-center xs:text-left">
                Book Now
              </p>
            </a>
          </div>
        </template>
      </TitleCta>
    </div>

    <!-- desktop -->
    <div
      class="bg-no-repeat bg-cover w-full object-center object-cover hidden xs:block xs:h-landing-main overflow-x-hidden"
      style="background-image: url('/images/private-bg.jpg')"
    >
      <div
        class="max-w-screen-xl xs:h-landing-main mx-auto flex justify-end items-center"
      >
        <TitleCta
          :route="route"
          :content="this.$t('pages.private_sailing.content')"
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
                type="button"
                @click="showModal"
              >
                <p class="font-medium text-btn text-center xs:text-left">
                  Book Now
                </p>
              </a>
            </div>
          </template>
        </TitleCta>
      </div>
    </div>

    <!-- umjesto carousel staviti na desk normalne ikone-->
    <InfoCarousel />

    <QnA />

    <!-- route example će voditi na svoje pojedinačne pageve zbog mogućih promjena u budućnosti -->
    <RouteExample />
    <OurCrew />
    <Reviews />

    <ModalPrivate v-show="isModalVisible" @close="closeModal" />
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
<style>
.wave-container {
  overflow: hidden;
}
.wave-container > svg {
  display: block;
}
</style>
