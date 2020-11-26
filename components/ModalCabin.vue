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
          <section class="flex items-center justify-center">
            <label class="content pr-3" for="numberp">Number of people</label>
            <div
              class="flex border border-modal-input overflow-hidden relative rounded-md h-10 w-12"
            >
              <input
                class="w-12 absolute"
                style="
                  top: 7.5px;
                  left: 9px;
                  font-family: 'Poppins';
                  color: #828282;
                "
                id="numberp"
                :value="persons"
                type="number"
                readonly
              />
              <button
                class="absolute"
                style="right: 5px; bottom: 6px"
                @click="dec"
              >
                <svg
                  class="h-2 select-none"
                  viewBox="0 0 12 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.3504 0.921818C11.5474 0.728271 11.5502 0.411701 11.3566 0.214739C11.1631 0.0177763 10.8465 0.0150076 10.6496 0.208555L11.3504 0.921818ZM6 5.47848L5.64955 5.83512L6 6.17949L6.35045 5.83512L6 5.47848ZM1.35045 0.208554C1.15349 0.0150067 0.836916 0.0177754 0.643369 0.214738C0.449822 0.4117 0.45259 0.728271 0.649553 0.921818L1.35045 0.208554ZM10.6496 0.208555L5.64955 5.12185L6.35045 5.83512L11.3504 0.921818L10.6496 0.208555ZM6.35045 5.12185L1.35045 0.208554L0.649553 0.921818L5.64955 5.83512L6.35045 5.12185Z"
                    fill="#D3D3D3"
                  />
                </svg>
              </button>
              <button
                class="absolute"
                style="right: 5px; top: 6px"
                @click="inc"
              >
                <svg
                  class="h-2 select-none"
                  viewBox="0 0 12 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.649554 5.39935C0.452591 5.59289 0.44982 5.90946 0.643366 6.10643C0.836912 6.30339 1.15348 6.30616 1.35045 6.11262L0.649554 5.39935ZM6 0.842743L6.35045 0.486109L6 0.141744L5.64955 0.486109L6 0.842743ZM10.6496 6.11262C10.8465 6.30616 11.1631 6.30339 11.3566 6.10643C11.5502 5.90946 11.5474 5.59289 11.3504 5.39935L10.6496 6.11262ZM1.35045 6.11262L6.35045 1.19938L5.64955 0.486109L0.649554 5.39935L1.35045 6.11262ZM5.64955 1.19938L10.6496 6.11262L11.3504 5.39935L6.35045 0.486109L5.64955 1.19938Z"
                    fill="#828282"
                  />
                </svg>
              </button>
            </div>
          </section>

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
  data() {
    return {
      persons: '1',
    }
  },

  methods: {
    close() {
      this.$emit('close')
    },
    dec: function () {
      if (this.persons > 0) {
        this.persons--
      } else {
        this.persons = 0
      }
    },
    inc: function () {
      this.persons++
    },
  },
}
</script>
<style></style>
