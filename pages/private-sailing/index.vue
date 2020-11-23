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
        ><div class="text-center text-vegan-blue">
          <h1 class="font-semibold leading-tight">
            {{ $t('pages.private_sailing.experience_private') }}
            <span class="font-light italic"
              ><p>{{ $t('pages.private_sailing.vegan_sailing') }}</p></span
            >
            {{ $t('pages.private_sailing.in') }}
            {{ $t('pages.private_sailing.croatia') }}
          </h1>
        </div></TitleCta
      >
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
          ><div class="text-left text-vegan-blue">
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
          </div></TitleCta
        >
      </div>
    </div>

    <!-- umjesto carousel staviti na desk normalne ikone-->
    <InfoCarousel />

    <QnA />
  </div>
</template>

<script>
export default {
  data: () => ({
    route: '/',
  }),
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
