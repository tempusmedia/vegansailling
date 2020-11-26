<template>
  <transition name="modal-fade">
    <div class="modal-shade">
      <div
        class="modal-bg"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
        style="background-image: url('/images/bg-wavy.jpg')"
      >
        <div class="modal-content">
          <button
            type="button"
            @click="close"
            class="focus:outline-none highlight-none ml-auto p-2"
            aria-label="Close modal"
          >
            <svg class="h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                stroke="#154752"
                stroke-width="2"
                d="M1.268 20.793l19.5-19.5M1.707 1.293l19.028 19.028"
              />
            </svg>
          </button>
          <header id="modalTitle">
            <div class="text-center text-vegan-blue">
              <h1 class="font-semibold leading-tight">
                {{ $t('pages.book_a_cabin.book') }}
                <span class="font-light italic"
                  ><p>{{ $t('pages.book_a_cabin.a_cabin') }}</p></span
                >
              </h1>
            </div>
          </header>

          <!-- RADIO BUTTON -->
          <section id="modalDescription">
            <div class="radio-bg">
              <div class="flex flex-col justify-center">
                <div class="text-left flex">
                  <input
                    type="radio"
                    id="sailingboat"
                    name="boat"
                    value="sailingboat"
                    checked="checked"
                  />
                  <label for="sailingboat"
                    ><p class="content pl-3">Sailingboat</p></label
                  >
                </div>
                <div class="flex">
                  <input
                    type="radio"
                    id="catamaran"
                    name="boat"
                    value="catamaran"
                  />
                  <label for="catamaran"
                    ><p class="content pl-3">Catamaran</p></label
                  >
                </div>
              </div>
            </div>
          </section>

          <!-- INPUT NUMBER -->
          <InputNumberSlider />

          <!-- INPUT DATE -->

          <input placeholder="Pick a date" type="date" />
          <input
            placeholder="Date"
            class="textbox-n"
            type="text"
            onfocus="(this.type='date')"
            onblur="(this.type='text')"
            id="date"
          />

          <footer>
            <div class="flex flex-col items-center mx-auto">
              <p class="content">+ 385(0)98 953 5476</p>
              <p>info@vegansailing.eu</p>
              <div class="flex">
                <img src="/images/instagram.svg" />
                <img src="/images/facebook.svg" />
              </div>
              <button>reserve no</button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'modal',
  data() {},

  methods: {
    close() {
      this.$emit('close')
    },
  },
}
</script>
<style></style>
