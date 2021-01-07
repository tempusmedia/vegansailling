<!-- custom component -->
<template>
  <section class="flex items-center justify-center">
    <label class="pr-3 content" for="numberp">Number of people</label>
    <div
      class="relative flex w-12 h-10 overflow-hidden border rounded-md border-modal-input"
    >
      <input
        class="absolute w-12 outline-none input-nr-sld"
        id="numberp"
        v-model="persons"
        type="number"
        readonly
      />

      <button
        class="absolute text-modal-input hover:text-arrow-active focus:outline-none input-nr-btn"
        @click="dec"
      >
        <svg
          class="h-2 select-none fill-current"
          viewBox="0 0 12 7"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.3504 0.921818C11.5474 0.728271 11.5502 0.411701 11.3566 0.214739C11.1631 0.0177763 10.8465 0.0150076 10.6496 0.208555L11.3504 0.921818ZM6 5.47848L5.64955 5.83512L6 6.17949L6.35045 5.83512L6 5.47848ZM1.35045 0.208554C1.15349 0.0150067 0.836916 0.0177754 0.643369 0.214738C0.449822 0.4117 0.45259 0.728271 0.649553 0.921818L1.35045 0.208554ZM10.6496 0.208555L5.64955 5.12185L6.35045 5.83512L11.3504 0.921818L10.6496 0.208555ZM6.35045 5.12185L1.35045 0.208554L0.649553 0.921818L5.64955 5.83512L6.35045 5.12185Z"
          />
        </svg>
      </button>

      <button
        class="absolute text-modal-input hover:text-arrow-active focus:outline-none input-nr-btn2"
        @click="inc"
      >
        <svg
          class="h-2 select-none fill-current"
          viewBox="0 0 12 7"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.649554 5.39935C0.452591 5.59289 0.44982 5.90946 0.643366 6.10643C0.836912 6.30339 1.15348 6.30616 1.35045 6.11262L0.649554 5.39935ZM6 0.842743L6.35045 0.486109L6 0.141744L5.64955 0.486109L6 0.842743ZM10.6496 6.11262C10.8465 6.30616 11.1631 6.30339 11.3566 6.10643C11.5502 5.90946 11.5474 5.59289 11.3504 5.39935L10.6496 6.11262ZM1.35045 6.11262L6.35045 1.19938L5.64955 0.486109L0.649554 5.39935L1.35045 6.11262ZM5.64955 1.19938L10.6496 6.11262L11.3504 5.39935L6.35045 0.486109L5.64955 1.19938Z"
          />
        </svg>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      persons: '1',
    }
  },
  methods: {
    updateValue: function (value) {
      this.$emit('input', value)
    },
    dec: function () {
      if (this.persons > 0) {
        this.persons--
        this.$emit('eventname', this.persons)
      } else {
        this.persons = 0
        this.$emit('eventname', this.persons)
      }
    },
    inc: function () {
      this.persons++
      this.$emit('eventname', this.persons)
    },
  },
}
</script>
<style scoped>
.input-nr-sld {
  top: 7.5px;
  left: 9px;
  font-family: 'Poppins';
  color: #828282;
}
.input-nr-btn {
  right: 7px;
  bottom: 6px;
}
.input-nr-btn2 {
  right: 7px;
  top: 7px;
}
</style>
