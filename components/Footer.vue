<template>
  <div id="contact">
    <div
      class="flex flex-col items-center object-cover object-center w-full bg-no-repeat h-footer sm:h-footer-desk justify-evenly my-foot"
      style="background-image: url('/images/footer-bg-desk.jpg')"
    >
      <div class="flex flex-col items-center -mt-2 justify-evenly sm:max-w-xl">
        <h2
          class="pt-12 mb-8 font-semibold text-center text-white section-title font-poppins"
        >
          Contact
          <!-- <span class="font-light font-poppins"> us</span> -->
        </h2>

        <p class="mb-8 text-center text-white content">
          Have more questions? Contact us directly at
          <br />
          <a href="mailto:info@vegansailing.eu" class="font-semibold">
            <span class="font-semibold">info@vegansailing.eu</span></a
          >
        </p>
        <!-- <Btn
          :route="route"
          class="mt-5 mb-5 text-white btn btn--primary xs:block xs:mt-2 xs:mb-0"
          >Book Now</Btn
        > -->
        <div class="flex justify-center">
          <a
            class="mt-5 mb-5 text-white btn btn--primary xs:block xs:mt-2 xs:mb-0"
            @click="showModal"
          >
            <p
              class="font-medium text-center select-none text-btn xs:text-left"
            >
              Book Now
            </p>
          </a>
        </div>
      </div>
      <div class="flex">
        <a
          href="https://www.instagram.com/vegan_sailing/"
          class="hover:opacity-80"
          target="_blank"
          ><img src="/images/instagram.svg"
        /></a>
        <a
          href="https://www.facebook.com/vegansailing.eu/"
          class="hover:opacity-80"
          target="_blank"
          ><img src="/images/facebook.svg"
        /></a>
      </div>
      <div class="flex flex-col justify-center text-center align-center">
        <p class="text-white font-poppins">Designed by</p>
        <a class="mx-auto" target="_blank" href="https://paras.hr/"
          ><img class="w-1/2 mx-auto" src="/icons/paras-logo.png"
        /></a>
      </div>
    </div>

    <transition name="fade">
      <ModalCabin
        v-show="isModalVisibleCabin"
        @close="closeModalCabin"
        @modalsuccess="showSuccess"
      />
    </transition>
    <transition name="fade">
      <ModalPrivate
        v-show="isModalVisiblePrivate"
        @close="closeModalPrivate"
        @modalsuccess="showSuccess"
      />
    </transition>
    <transition name="fade">
      <ModalSuccess v-show="isSuccessVisible" @close="closeSuccess" />
    </transition>
    <CookieControl class="absolute bottom-0 z-50 bg-vegan-orange">
      <template v-slot:bar>
        <p class="font-poppins">
          This website uses cookies to give you an incredible experience. By
          using our website you consent to our cookies in accordance with our
          <nuxt-link to="/privacy-policy"> Privacy Policy</nuxt-link> and
          <nuxt-link to="/terms-and-conditions"
            >Terms and Conditions.</nuxt-link
          >
        </p>
        <!-- <n-link>Go somewhere</n-link> -->
      </template>
    </CookieControl>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isSuccessVisible: false,
      isModalVisibleCabin: false,
      isModalVisiblePrivate: false,
    }
  },
  methods: {
    showSuccess() {
      this.isSuccessVisible = true
    },
    closeSuccess() {
      this.isSuccessVisible = false
    },
    showModal() {
      if (
        this.$nuxt.$route.path == '/private-sailing' ||
        this.$nuxt.$route.path == '/hr/private-sailing'
      ) {
        this.showModalPrivate()
      }
      if (
        this.$nuxt.$route.path == '/book-a-cabin' ||
        this.$nuxt.$route.path == '/hr/book-a-cabin'
      ) {
        this.showModalCabin()
      }
    },
    showModalCabin() {
      this.isModalVisibleCabin = true
    },
    closeModalCabin() {
      this.isModalVisibleCabin = false
    },
    showModalPrivate() {
      this.isModalVisiblePrivate = true
    },
    closeModalPrivate() {
      this.isModalVisiblePrivate = false
    },
  },
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

.cookieControl__Bar {
  background: linear-gradient(
    90deg,
    rgba(237, 73, 36, 0.85) 7%,
    rgba(241, 115, 34, 0.85) 100%
  );
}

.cookieControl__BarButtons button {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 2rem;
  padding-right: 2rem;
  --border-opacity: 1;
  border-color: #fff;
  border-color: rgba(255, 255, 255);
  border-radius: 9999px;
  border-style: solid;
  border-width: 2px;
  font-family: Poppins;
  cursor: pointer;
  background: none;
  color: #fff;
}

.cookieControl__ModalButtons {
  margin-top: 70px;
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
}

.cookieControl__BarButtons button:hover {
  background: #ffffff4d;
}

.cookieControl__ModalButtons button {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 2rem;
  padding-right: 2rem;
  border-color: #154752;

  border-radius: 9999px;
  border-style: solid;
  border-width: 2px;
  font-family: Poppins;
  cursor: pointer;
  background: none;
  color: #154752;
  width: 148px;
}

.cookieControl__ModalButtons button:hover {
  background-color: #15475226;
  border-color: rgba(47, 124, 140);
  color: rgba(47, 124, 140);
}

.cookieControl__ModalContent {
  border-radius: 1.5rem;
  padding-top: 90px;
}

.cookieControl__ModalContent input:checked + label {
  background-color: rgba(237, 73, 36);
}
</style>
