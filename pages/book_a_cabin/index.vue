<template>
  <div>
    <!--xs mobile -->
    <div
      class="bg-no-repeat w-full object-center object-cover flex xs:hidden flex-col justify-between"
      style="background-image: url('/images/public-bg-xs.jpg')"
    >
      <TitleCta :route="titleCta.route" :descm="titleCta.descm"
        ><div class="text-center text-vegan-blue">
          <h1 class="font-semibold leading-tight">
            Book <span class="font-light italic"><p>a cabin</p></span>
          </h1>
        </div></TitleCta
      >
    </div>

    <!--xs: desktop rai-->
    <div
      class="bg-no-repeat bg-cover w-full object-center object-cover hidden xs:block xs:h-landing-main"
      style="background-image: url('/images/public-bg.jpg')"
    >
      <div
        class="max-w-screen-xl xs:h-landing-main mx-auto flex justify-center xs:justify-end items-center"
      >
        <TitleCta :route="titleCta.route" :desc="titleCta.desc"
          ><div class="text-left text-vegan-blue">
            <img
              class="relative"
              style="left: -105px; bottom: -250px; margin-bottom: -90px"
              src="/images/wave-orange.svg"
            />
            <h1 class="font-semibold leading-tight xs:hidden">
              Book <span class="font-light italic"><p>a cabin</p></span>
            </h1>
            <h1 class="font-semibold leading-tight hidden xs:block">
              Book <span class="font-light italic">a cabin</span>
            </h1>
          </div></TitleCta
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    titleCta: {
      route: '/',
      descm:
        'Join all inclusive vegan \n  sailing trip and share a boat \n  with other vegans',
      desc:
        'Join all inclusive vegan sailing trip \n and share a boat with other \n vegans',
      // firstline: 'Join all inclusive vegan',
      // secondline: 'and share a boat with other',
      // thirdline: ' vegans',
    },
  }),
}
</script>
<style></style>
