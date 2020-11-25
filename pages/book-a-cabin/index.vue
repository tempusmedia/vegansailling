<template>
  <div>
    <!--xs mobile -->
    <div
      class="bg-no-repeat w-full object-center object-cover flex xs:hidden flex-col justify-between"
      style="background-image: url('/images/public-bg-xs.jpg')"
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
          <!-- <Btn
        :route="route"
        class="btn btn--secondary xs:block mt-5 mb-5 xs:mt-2 xs:mb-0"
        >Book now</Btn
      > -->
        </template>
      </TitleCta>
    </div>

    <!--xs: desktop rai-->
    <div
      class="bg-no-repeat bg-cover w-full object-center object-cover hidden xs:block xs:h-landing-main"
      style="background-image: url('/images/public-bg.jpg')"
    >
      <div
        class="max-w-screen-xl xs:h-landing-main mx-auto flex justify-center xs:justify-end items-center"
      >
        <TitleCta :route="titleCta.route" :content="titleCta.content">
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
          </template>
        </TitleCta>
      </div>
    </div>
    <QnA />
    <RouteExample />
    <OurCrew />
    <br />
    <BoatAndCabin />
    <Reviews />
    <!-- Footer in layout-->
  </div>
</template>

<script>
export default {
  data: () => ({
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
  }),
}
</script>
<style></style>
