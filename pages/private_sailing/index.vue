<template>
  <div>
    <!-- add max-width to each section in front of the bg image. leave bg image w-full, so it looks the same as in the design-->

    <!-- mobile -->
    <div
      class="bg-no-repeat w-full object-center object-cover flex xs:hidden flex-col justify-between"
      style="background-image: url('/images/private-bg-xs.jpg')"
    >
      <TitleCta
        :route="titleCta.route"
        :firstline="titleCta.firstline"
        :secondline="titleCta.secondline"
        :thirdline="titleCta.thirdline"
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
      class="bg-no-repeat w-full object-center object-cover hidden xs:flex flex-col justify-between"
      style="background-image: url('/images/private-bg.jpg')"
    >
      <TitleCta
        :route="titleCta.route"
        :firstline="titleCta.firstline"
        :secondline="titleCta.secondline"
        :thirdline="titleCta.thirdline"
        ><div class="text-center text-vegan-blue">
          <h1 class="font-semibold leading-tight">
            Experience private
            <span class="font-light italic"><p>vegan sailing</p></span> in
            Croatia
          </h1>
        </div></TitleCta
      >
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    titleCta: {
      route: '/',
      firstline: 'Rent a sailing boat or a ',
      secondline: 'catamaran with a vegan cook ',
      thirdline: 'and/or skipper',
    },
  }),
}
</script>
<style></style>
