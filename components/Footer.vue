<template>
  <div id="contact">
    <div
      class="h-footer sm:h-footer-desk bg-no-repeat w-full object-center object-cover flex flex-col items-center justify-evenly my-foot"
      style="background-image: url('/images/footer-bg-desk.jpg')"
    >
      <div class="flex flex-col items-center justify-evenly -mt-2 sm:max-w-xl">
        <h2
          class="section-title text-white font-semibold text-center pt-12 mb-8 font-poppins"
        >
          Contact
          <!-- <span class="font-light font-poppins"> us</span> -->
        </h2>
        <p class="content text-white text-center mb-8">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut
          <span class="font-semibold">+385 98 953 5476 </span>or
          <span class="font-semibold">info(a)vegansialing.eu</span>
        </p>
        <Btn
          :route="route"
          class="btn btn--primary xs:block mt-5 mb-5 xs:mt-2 xs:mb-0 text-white"
          >Book Now</Btn
        >
      </div>
      <div class="flex">
        <a href="/" class="hover:opacity-80"
          ><img src="/images/instagram.svg"
        /></a>
        <a href="/" class="hover:opacity-80"
          ><img src="/images/facebook.svg"
        /></a>
      </div>
    </div>
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
.my-foot {
  background: no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
