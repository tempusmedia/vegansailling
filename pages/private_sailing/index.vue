<template>
  <div>
    <!-- add max-width to each section in front of the bg image. leave bg image w-full, so it looks the same as in the design-->

    <!-- mobile -->
    <div
      class="bg-no-repeat w-full object-center object-cover flex xs:hidden flex-col justify-between overflow-x-hidden"
      style="background-image: url('/images/private-bg-xs.jpg')"
    >
      <TitleCta :route="titleCta.route" :desc="titleCta.descm"
        ><div class="text-center text-vegan-blue">
          <h1 class="font-semibold leading-tight">
            Experience private
            <span class="font-light italic"><p>vegan sailing</p></span> in
            Croatia
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
        <TitleCta :route="titleCta.route" :desc="titleCta.desc"
          ><div class="text-left text-vegan-blue">
            <img class="relative top-wave-line" src="/images/wave-orange.svg" />
            <h1 class="font-semibold leading-tight">
              Experience private
              <p><span class="font-light italic">vegan sailing</span> in</p>
              Croatia
            </h1>
          </div></TitleCta
        >
      </div>
    </div>
    <h1>{{ $t('message') }}</h1>
  </div>
</template>

<script>
export default {
  data: () => ({
    titleCta: {
      route: '/',
      descm:
        'Rent a sailing boat or a \n catamaran with a vegan cook \n and/or skipper',
      desc:
        'Rent a sailing boat or a catamaran \n with a vegan cook and/or skipper',
    },
  }),
}
</script>
<style></style>
