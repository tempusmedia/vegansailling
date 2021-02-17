<template>
  <transition name="modal-fade">
    <div class="z-50 overflow-y-auto modal-shade">
      <div
        class="top-0 max-w-screen-lg mt-10 mb-10 book-modal-bg"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
        style="background-image: url('/images/bg-wavy.jpg')"
      >
        <div class="book-modal-content">
          <button
            type="button"
            @click="close"
            class="p-2 ml-auto focus:outline-none highlight-none"
            aria-label="Close modal"
          >
            <svg class="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                stroke="#154752"
                stroke-width="2"
                d="M1.268 20.793l19.5-19.5M1.707 1.293l19.028 19.028"
              />
            </svg>
          </button>
          <header class="mt-3 mb-10">
            <div class="text-center text-vegan-red font-poppins">
              <h1 class="font-semibold leading-tight">
                Ups!
                <span class="italic font-light "> Something went wrong!</span>
              </h1>
              <p class="mt-4 text-base font-light font-poppins text-vegan-blue">
                Please try again in a minute, or contact us via mail at
                <p>
                <span
                  ><a class="font-semibold text-vegan-blue" href="mailto:info@vegansailing.eu">
                    info@vegansailing.eu</a
                  ></span
                >
            </p>
              </p>
            </div>
          </header>
          <div class="mx-auto mt-0 mb-10 sm:mt-0 w-197px">
            <a
              class="mt-5 mb-5 btn btn--secondary xs:block xs:mt-2 xs:mb-0"
              type="button"
              @click="close()"
            >
              <p class="font-medium text-center select-none text-btn">Ok</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  methods: {
    close() {
      this.$emit('close')
    },
  },
}
</script>

<style scoped></style>
