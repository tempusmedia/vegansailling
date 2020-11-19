<template>
  <div>
    <!-- mobile -->
    <div
      class="bg-no-repeat w-full object-center object-cover flex xs:hidden flex-col justify-between"
      style="background-image: url('/images/public-bg-xs.jpg')"
    >
      <TitleCta
        :route="titleCta.route"
        :firstline="titleCta.firstline"
        :secondline="titleCta.secondline"
        :thirdline="titleCta.thirdline"
        ><div class="text-center text-vegan-blue">
          <h1 class="font-semibold leading-tight">
            Book <span class="font-light italic"><p>a cabin</p></span>
          </h1>
        </div></TitleCta
      >
    </div>

    <!-- desktop -->
    <div
      class="bg-no-repeat w-full object-center object-cover hidden xs:flex flex-col justify-between"
      style="background-image: url('/images/public-bg.jpg')"
    >
      <TitleCta
        :route="titleCta.route"
        :firstline="titleCta.firstline"
        :secondline="titleCta.secondline"
        :thirdline="titleCta.thirdline"
        ><div class="text-center text-vegan-blue">
          <h1 class="font-semibold leading-tight">
            Book <span class="font-light italic"><p>a cabin</p></span>
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
      firstline: 'Join all inclusive vegan',
      secondline: 'sailing trip and share a boat',
      thirdline: ' with other vegans',
    },
  }),
}
</script>
<style></style>
