<template>
  <div>
    <button class="close-button" @click="$emit('close')" />
    <div
      class="flex flex-col items-center justify-center m-4 mx-auto mt-0 lg:m-16 xl:m-32"
    >
      <h2
        class="mb-2 font-normal text-center text-white capitalize xl:text-5xl lg:text-left lg:mb-4 xl:mb-8"
      >
        kontakt
      </h2>
      <form
        v-show="!isSubmitted"
        class="flex flex-col items-center w-5/6 mx-auto text-sm lg:w-2/3 xl:w-1/3"
      >
        <div
          class="inline-flex items-center w-full px-4 my-2 transition-all border-white rounded bg-grey-lighter"
        >
          <label for="name" class="whitespace-no-wrap text-developmint-darker"
            >Name</label
          >
          <input
            id="name"
            class="w-5/6 px-2 py-4 mx-2 bg-transparent appearance-none md:mx-0 md:px-8 md:w-full text-developmint-darkest"
            type="text"
            @blur="foucsedElement = ''"
          />
        </div>
        <span class="self-start mb-4 ml-2 text-sm text-red-light"
          >Please type a valid name</span
        >
        <div
          class="inline-flex items-center w-full px-4 my-2 transition-all border-white rounded bg-grey-lighter"
        >
          <label for="email" class="whitespace-no-wrap text-developmint-darker"
            >E-Mail</label
          >
          <input
            id="email"
            class="w-5/6 px-2 py-4 mx-2 bg-transparent appearance-none md:mx-0 md:px-8 md:w-full text-developmint-darkest"
            type="email"
            @blur="foucsedElement = ''"
          />
        </div>
        <span class="self-start mb-4 ml-2 text-sm text-red-light"
          >Please insert a valid E-Mail</span
        >
        <div
          class="inline-flex flex-col w-full px-4 my-2 transition-all border-white rounded bg-grey-lighter"
        >
          <label for="msg" class="py-4 text-developmint-darker">{{}}</label>
          <textarea
            id="msg"
            class="bg-transparent appearance-none resize-none text-developmint-darkest"
            rows="6"
            @blur="foucsedElement = ''"
          />
        </div>
        <span class="self-start mb-4 ml-2 text-sm text-red-light"
          >Please provide a valid message with at least 25 characters</span
        >
        <div class="flex justify-between lg:block lg:ml-auto">
          <button
            class="px-6 py-3 mt-4 mr-4 transition-all border rounded lg:hidden hover:border-yellow hover:text-yellow border-yellow-dark text-grey-light"
            @click.prevent="$emit('close')"
          >
            back
          </button>
          <button
            :disabled="submitting"
            class="px-6 py-3 mt-4 ml-4 transition-all border rounded hover:bg-gradient-rains-dark-rains hover:border-developmint border-grey-light text-grey-light"
            type="submit"
          >
            submit
          </button>
        </div>
      </form>
      <div v-show="isSubmitted" class="text-2xl text-developmint">
        Thanks for your submission!
      </div>
      <div v-if="error" class="text-2xl text-red-dark">An error occurred!</div>
    </div>
  </div>
</template>

<script>
// import { validationMixin } from 'vuelidate/src/index'
// import { email, minLength, required } from 'vuelidate/src/validators'
export default {
  //   mixins: [validationMixin],
  data() {
    return {
      focusedElement: '',
      name: '',
      email: '',
      msg: '',
      submitting: false,
      isSubmitted: false,
      error: false,
    }
  },

  mounted() {
    window.addEventListener('keyup', this.onKeyUp)
  },
  beforeDestroy() {
    window.removeEventListener('keyup', this.onKeyUp)
  },
  methods: {
    onKeyUp(event) {
      if (event.keyCode === 27) {
        this.$emit('close')
      }
    },

    async submitForm() {
      this.submitting = true
      this.$ga.event('submit', 'form', this.$i18n.locale)
      this.error = false
      try {
        await this.$axios.$post('', {
          name: this.name,
          email: this.email,
          msg: this.msg,
        })
        this.submitting = false
        this.isSubmitted = true
        await new Promise((resolve) => setTimeout(resolve, 2500))
        this.$emit('close')
      } catch (e) {
        this.submitting = false
        this.error = true
        console.error(e)
      }
    },
  },
}
</script>
