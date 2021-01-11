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
            <div class="text-center text-vegan-blue sm:hidden font-poppins">
              <h1 class="font-semibold leading-tight">
                {{ $t('pages.book_a_cabin.book') }}
                <span class="italic font-light"
                  ><p>{{ $t('pages.book_a_cabin.a_cabin') }}</p></span
                >
              </h1>
            </div>
            <div
              class="hidden text-center text-vegan-blue sm:block font-poppins"
            >
              <h1 class="font-semibold leading-tight">
                {{ $t('pages.book_a_cabin.book') }}
                <span class="italic font-light">{{
                  $t('pages.book_a_cabin.a_cabin')
                }}</span>
              </h1>
            </div>
          </header>

          <form @submit.prevent="sendMail()">
            <section id="modalDescription">
              <div class="radio-bg sm:w-txtarea sm:mx-auto">
                <div
                  class="flex flex-col justify-center sm:flex-row sm:w-76 sm:justify-between"
                >
                  <div class="flex text-left">
                    <input
                      type="radio"
                      id="single"
                      name="accomodation"
                      value="single"
                      checked="checked"
                      v-model="accomodation"
                    />
                    <label for="single"
                      ><p class="pl-3 content">Single</p></label
                    >
                  </div>
                  <div class="flex">
                    <input
                      type="radio"
                      id="double"
                      name="accomodation"
                      value="double"
                      v-model="accomodation"
                    />
                    <label for="double"
                      ><p class="pl-3 content">Double</p></label
                    >
                  </div>
                </div>
              </div>
            </section>

            <section class="mt-3">
              <!-- INPUT NUMBER -->
              <InputNumberSlider @eventname="updatenumber" />
            </section>
            <!-- INPUT DATE -->
            <div class="sm:flex sm:mx-auto">
              <div class="mx-auto mt-3 w-modal-inputs modal-input">
                <select
                  type="date"
                  name="date"
                  class="relative date focus:outline-none"
                  v-model="dateLocation"
                  required
                >
                  <option class="content" value="">
                    Pick a date & location
                  </option>
                  <option value="17July-Krk">17 July - Krk</option>
                  <option value="31July-Zadar">31 July - Zadar</option>
                  <option value="14August-Split">14 August - Split</option>
                </select>
              </div>
            </div>
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
                    id="name"
                    v-model="name"
                    required
                  />
                  <input
                    class="mt-3 modal-input input-name sm:ml-1"
                    placeholder="Your email"
                    name="email"
                    id="email"
                    v-model="userMail"
                    required
                    type="email"
                  />
                </div>
                <textarea
                  class="mt-3 modal-input rounded-2xl input-name sm:relative sm:w-txtarea lefty"
                  placeholder="Write your message"
                  name="message"
                  id="message"
                  v-model="message"
                ></textarea>
                <input
                  class="mt-3 modal-input input-name sm:ml-1"
                  placeholder="Discount code"
                  name="discount"
                  id="discount"
                  v-model="discountCode"
                />
              </div>
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
                By clicking on “Book Now”, you agree to Vegan Sailing’s Privacy
                Policy
              </p>
            </div>
            <div class="mx-auto mt-6 mb-8 max-w-btn">
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
          <footer class="modal-footer content">
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
      subject: 'Book-a-Cabin',
      name: '',
      userMail: '',
      numberOfPeople: '1',
      dateLocation: '',
      message: '',
      accomodation: '',
      discountCode: '',
      acceptance: false,
    }
  },
  methods: {
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
          dateLocation: this.dateLocation,
          accomodation: this.accomodation,
          text: this.message,
          discountCode: this.discountCode,
        })
        .then((response) => {
          if (response == 'success') {
            this.cabinPush()
            this.$emit('modalsuccess')
          } else {
            this.$emit('modalfail')
          }
        })
      this.close()
    },
    cabinPush() {
      this.$gtag.event('book-a-cabin')
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
</style>
