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
          <header id="modalTitle" class="mt-3 mb-10">
            <div
              class="px-5 text-center text-vegan-blue sm:hidden font-poppins sm:px-0"
            >
              <h1 class="font-semibold leading-tight">
                Book
                <span class="italic font-light"
                  ><p>a private vegan sailing</p></span
                >
              </h1>
            </div>
            <div
              class="hidden text-center text-vegan-blue sm:block font-poppins"
            >
              <h1 class="font-semibold leading-tight">
                Book
                <span class="italic font-light"> a private vegan sailing </span>
              </h1>
            </div>
          </header>

          <form ref="form" @submit.prevent="onSubmit()" id="app">
            <!-- CHECKBOX -->
            <section>
              <div class="flex justify-center">
                <div class="sm:flex sm:w-76 sm:justify-between">
                  <label class="box content"
                    >Hire skipper
                    <input
                      type="checkbox"
                      checked="checked"
                      v-model="hireSkipper"
                    />
                    <!-- {{ hireSkipper ? 'yes' : 'no' }} -->
                    <span class="checkmark"></span>
                  </label>
                  <label class="box content"
                    >Hire cook
                    <input type="checkbox" v-model="hireCook" />
                    <!-- {{ hireCook ? 'yes' : 'no' }} -->
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
            </section>
            <!-- RADIO BUTTON -->
            <section id="modalDescription">
              <div class="radio-bg sm:w-txtarea sm:mx-auto">
                <div
                  class="flex flex-col justify-center sm:flex-row sm:w-76 sm:justify-between"
                >
                  <div class="flex text-left">
                    <input
                      type="radio"
                      id="sailingboatprivate"
                      name="accomodation"
                      value="sailingboatPrivate"
                      v-model="accomodation"
                    />
                    <label for="sailingboatprivate"
                      ><p class="pl-3 content">Sailing boat</p></label
                    >
                  </div>
                  <div class="flex">
                    <input
                      type="radio"
                      id="catamaranprivate"
                      name="accomodation"
                      value="catamaranPrivate"
                      v-model="accomodation"
                    />
                    <label for="catamaranprivate"
                      ><p class="pl-3 content">Catamaran</p></label
                    >
                  </div>
                </div>
              </div>
            </section>

            <section class="mt-3">
              <!-- INPUT NUMBER -->
              <!-- <InputNumberSlider @eventname="updatenumber" /> -->
              <section class="flex justify-center mt-5">
                <!-- INPUT NUMBER -->
                <!-- <InputNumberSlider @eventname="updatenumber" /> -->
                <label class="pr-3 content">Number of people</label>
                <input
                  class="pl-3 my-cust-nr-input"
                  min="0"
                  value="1"
                  type="number"
                  v-model="numberOfPeople"
                />
              </section>
            </section>
            <!-- INPUT DATE -->
            <div class="sm:flex sm:mx-auto sm:w-523px">
              <!-- <div
                class="mx-auto mt-3 w-modal-inputs modal-input sm:mx-0 sm:mr-1"
              >
                <select
                  type="date"
                  name="date"
                  class="relative date focus:outline-none"
                  v-model="date"
                  required
                >
                  <option class="content" value="">Pick a date</option>
                  <option value="01/01/2021-07/01/2021">
                    01/01/2021 - 05/01/2021
                  </option>
                  <option value="07/01/2021-14/01/2021">
                    07/01/2021 - 14/01/2021
                  </option>
                  <option value="14/01/2021-21/01/2021">
                    14/01/2021 - 21/01/2021
                  </option>
                  <option value="21/01/2021-28/01/2021">
                    21/01/2021 - 28/01/2021
                  </option>
                </select>
              </div> -->

              <div
                class="mx-auto mt-3 w-modal-inputs modal-input sm:mx-0 sm:mr-1"
              >
                <label class="pr-3 content">Start date:</label>
                <input
                  class="w-full"
                  type="date"
                  v-model="startDate"
                  name="trip-start"
                  value="2021-01-01"
                  min="2021-01-01"
                  max="2023-12-31"
                />
              </div>

              <!-- INPUT LOCATION -->
              <div
                class="mx-auto mt-3 w-modal-inputs modal-input sm:mx-0 sm:ml-1"
              >
                <label class="pr-3 content">End date:</label>
                <input
                  class="w-full"
                  type="date"
                  v-model="endDate"
                  name="trip-end"
                  value="2021-01-01"
                  min="2021-01-01"
                  max="2023-12-31"
                />
              </div>
            </div>

            <!-- INPUT LOCATION -->
            <!-- 
            <div class="sm:flex sm:mx-auto sm:w-523px">
              <div
                class="mx-auto mt-3 w-modal-inputs modal-input sm:mx-0 sm:ml-1"
              >
                <select
                  type="location"
                  name="location"
                  class="relative date focus:outline-none"
                  v-model="location"
                  required
                >
                  <option class="content" value="">Pick location</option>
                  <option value="Krk">North Adriatic (Krk)</option>
                  <option value="Zadar">Central Adriatic (Zadar)</option>
                  <option value="Split">South Adriatic (Split)</option>
                  <option value="Split">South Adriatic (Dubrovnik)</option>
                </select>
              </div>
            </div> -->

            <section class="mt-3">
              <!-- INPUT NUMBER -->
              <!-- <InputNumberSlider @eventname="updatenumber" /> -->
              <section class="flex justify-center mt-5">
                <div
                  class="mx-auto mt-3 w-modal-inputs modal-input sm:mx-0 sm:ml-1"
                >
                  <select
                    type="location"
                    name="location"
                    class="relative date focus:outline-none"
                    v-model="location"
                    required
                  >
                    <option class="content" value="">Pick location</option>
                    <option value="Krk">North Adriatic (Krk)</option>
                    <option value="Zadar">Central Adriatic (Zadar)</option>
                    <option value="Split">South Adriatic (Split)</option>
                    <option value="Split">South Adriatic (Dubrovnik)</option>
                  </select>
                </div>
              </section>
            </section>

            <!-- INPUT INFO -->
            <div class="flex justify-center mx-auto content w-modal-inputs">
              <div class="flex flex-col w-modal-inputs">
                <div
                  class="flex flex-col sm:flex-row sm:mx-auto sm:relative lefty"
                >
                  <input
                    class="mt-3 modal-input input-name sm:mr-1"
                    placeholder="Your name"
                    name="name"
                    id="namePrivate1"
                    v-model="name"
                    required
                  />
                  <input
                    class="mt-3 modal-input input-name sm:ml-1"
                    placeholder="Your email"
                    name="email"
                    type="email"
                    id="emailPrivate"
                    v-model="userMail"
                    required
                  />
                </div>
                <textarea
                  class="mt-3 modal-input rounded-2xl input-name sm:relative sm:w-txtarea lefty"
                  placeholder="Write your message"
                  name="message"
                  id="messagePrivate"
                  v-model="message"
                ></textarea>
              </div>
            </div>

            <!-- Book now & close modal & send data & show success modal-->

            <!-- mobile -->
            <div
              class="flex flex-col items-center justify-between pt-6 pb-6 mx-auto sm:hidden"
            >
              <!-- <div>
                <p class="text-base font-light font-poppins text-vegan-blue">
                  + 385(0)98 953 5476
                </p>
              </div>
              <div>
                <p class="text-base font-light text-vegan-red font-poppins">
                  info@vegansailing.eu
                </p>
              </div> -->
              <div>
                <p class="text-base font-light font-poppins text-vegan-blue">
                  Any questions? Contact us directly:
                </p>
              </div>
              <div>
                <a href="mailto:info@vegansailing.eu"
                  ><span
                    class="text-base font-light text-vegan-red font-poppins"
                    >info@vegansailing.eu</span
                  ></a
                >
              </div>
              <div class="flex">
                <a
                  href="https://www.instagram.com/vegan_sailing/"
                  target="_blank"
                  ><img src="/images/instagram.svg"
                /></a>

                <a
                  href="https://www.facebook.com/vegansailing.eu/"
                  target="_blank"
                  ><img src="/images/facebook.svg"
                /></a>
              </div>
            </div>

            <!-- desktop -->
            <!-- <div
              class="items-center justify-between hidden pt-5 mx-auto sm:flex w-txtarea"
            >
              <div>
                <p class="text-base font-light font-poppins text-vegan-blue">
                  + 385(0)98 953 5476
                </p>
              </div>
              <div class="flex">
                <a
                  href="https://www.instagram.com/vegan_sailing/"
                  target="_blank"
                  ><img src="/images/instagram.svg"
                /></a>

                <a
                  href="https://www.facebook.com/vegansailing.eu/"
                  target="_blank"
                  ><img src="/images/facebook.svg"
                /></a>
              </div>
              <div>
                <p class="text-base font-light text-vegan-red font-poppins">
                  info@vegansailing.eu
                </p>
              </div>
            </div> -->
            <div
              class="items-center hidden pt-6 mx-auto justify-evenly sm:flex w-txtarea"
            >
              <p class="text-base font-light font-poppins text-vegan-blue">
                Any questions? Contact us directly:
              </p>
              <a href="mailto:info@vegansailing.eu"
                ><span class="text-base font-light text-vegan-red font-poppins"
                  >info@vegansailing.eu</span
                ></a
              >
            </div>

            <div
              class="flex justify-between pt-5 pl-2 mx-auto mt-5 sm:items-center w-76 sm:w-txtarea"
            >
              <input
                class="mt-2 sm:mt-0 sm:mb-5"
                type="checkbox"
                checked="checked"
                v-model="acceptance"
                required
              />
              <p class="text-base box content">
                By clicking on “Book Now”, you agree to Vegan Sailing’s
                <nuxt-link to="/privacy-policy">Privacy Policy</nuxt-link>
                and
                <nuxt-link to="/terms-and-conditions">Terms of Use</nuxt-link>
              </p>
            </div>
            <!-- <recaptcha
              @error="onError"
              @success="onSuccess"
              @expired="onExpired"
            /> -->
            <recaptcha />

            <div class="mx-auto mt-4 mb-10 max-w-btn">
              <button
                class="mt-5 mb-5 btn btn--secondary xs:block xs:mt-2 xs:mb-0"
                type="submit"
                value="Submit"
              >
                <p
                  class="font-medium text-center select-none text-btn xs:text-left"
                >
                  Book Now
                </p>
              </button>
            </div>
          </form>
          <!-- orange footer -->
          <!-- <footer class="modal-footer content">
            <div class="flex flex-col items-center mx-auto my-5">
              <h1 class="font-semibold leading-tight">
                Have
                <span class="italic font-light">more</span>
              </h1>
              <h1 class="hidden font-semibold leading-tight xs:block">
                <span class="italic font-light"> questions?</span>
              </h1>
              <p class="mt-3 text-base text-white content">
                + 385(0)98 953 5476
              </p>
              <p class="font-semibold">info@vegansailing.eu</p>
              <div class="flex mt-3">
                <img src="/images/instagram.svg" />
                <img src="/images/facebook.svg" />
              </div>
            </div>
          </footer> -->
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  // head() {
  //   return {
  //     script: [
  //       {
  //         src: 'https://www.googletagmanager.com/gtag/js?id=GTM-MHGR4PQ',
  //         async: true,
  //       },
  //     ],
  //   }
  // },
  // mounted() {
  //   window.dataLayer = window.dataLayer || []
  //   function gtag() {
  //     dataLayer.push(arguments)
  //   }
  //   gtag('js', new Date())

  //   gtag('config', 'GTM-MHGR4PQ')
  // },
  name: 'modal',
  data() {
    return {
      subject: 'Private vegan sailing',
      name: '',
      userMail: '',
      numberOfPeople: '1',
      startDate: '',
      endDate: '',
      location: '',
      message: '',
      accomodation: '',
      hireCook: true,
      hireSkipper: true,
      acceptance: false,
    }
  },

  methods: {
    onError(error) {
      console.log('Error happened:', error)
    },
    // async onSubmit() {
    //   try {
    //     const token = await this.$recaptcha.getResponse()
    //     console.log('ReCaptcha token:', token)
    //     await this.$recaptcha.reset()
    //   } catch (error) {
    //     console.log('Login error:', error)
    //   }
    // },

    async onSubmit() {
      try {
        const token = await this.$recaptcha.getResponse()
        console.log('ReCaptcha token:', token)
        this.sendMail()
        // send token to server alongside your form data

        // at the end you need to reset recaptcha
        await this.$recaptcha.reset()
      } catch (error) {
        console.log('Login error:', error)
      }
    },

    // onSuccess(token) {
    //   // console.log('Succeeded:', token)
    //   // this.sendMail()
    // },
    // onExpired() {
    //   console.log('Expired')
    // },
    updatenumber(persons) {
      this.numberOfPeople = persons
    },

    sendMail() {
      this.$axios
        .$post(`${process.env.baseUrl}/api/`, {
          subject: this.subject,
          userMail: this.userMail,
          name: this.name,
          numberOfPeople: this.numberOfPeople,
          startDate: this.startDate,
          endDate: this.endDate,
          location: this.location,
          text: this.message,
          accomodation: this.accomodation,
          hireCook: this.hireCook,
          hireSkipper: this.hireSkipper,
        })
        .then((response) => {
          if (response == 'success') {
            this.privatePush()
            this.$emit('modalsuccess')
          } else {
            this.$emit('modalfail')
          }
        })
        .catch((error) => {
          this.$emit('modalfail')
          const response = error.response
        })
      this.close()
    },

    privatePush() {
      dataLayer.push({
        event: 'booking-private',
      })
    },
    close() {
      this.$emit('close')
    },
  },
}
</script>
<style>
.lefty {
  left: -8.3rem;
}
select.date {
  font-family: 'Poppins', sans-serif;
  color: #154752;
  font-weight: 300;
  width: 210px;
  background: white !important;
}

/* The container */
.box {
  display: block;
  position: relative;
  padding-left: 27px;
  margin-bottom: 12px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.box input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 18px;
  width: 18px;
  background-color: white;
  border: 1px solid #d3d3d3;
}

/* On mouse-over, add a grey background color */
.box:hover input ~ .checkmark {
  background-color: white;
  border: 1px solid #d3d3d3;
}

/* When the checkbox is checked, add a blue background */
.box input:checked ~ .checkmark {
  background-color: white;
  border: 1px solid #d3d3d3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.box input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.box .checkmark:after {
  left: 6px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: solid #ed4924;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

input.input-name::placeholder,
textarea.input-name::placeholder {
  font-family: 'Poppins', sans-serif;
  color: #154752;
  font-weight: 300;
}

button option {
  -webkit-appearance: none;
}

input[type='number']::-webkit-inner-spin-button {
  opacity: 1;
}
input[type='number'] {
  border: 1px solid #d3d3d3;
  font-family: 'Poppins', sans-serif;
  color: #154752;
}
.my-cust-nr-input {
  width: 50px;
}

input[type='date'] {
  font-family: 'Poppins', sans-serif;
  color: #154752;
}
</style>
