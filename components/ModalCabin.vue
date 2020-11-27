<template>
  <transition name="modal-fade">
    <div class="modal-shade overflow-y-auto z-50">
      <div
        class="modal-bg top-0 mt-10 mb-10"
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
          <header id="modalTitle" class="mt-3 mb-10">
            <div class="text-center text-vegan-blue">
              <h1 class="font-semibold leading-tight">
                {{ $t('pages.book_a_cabin.book') }}
                <span class="font-light italic"
                  ><p>{{ $t('pages.book_a_cabin.a_cabin') }}</p></span
                >
              </h1>
            </div>
          </header>

          <!-- CHECKBOX -->
          <section>
            <div class="flex justify-center">
              <div>
                <label class="box content"
                  >Hire skipper
                  <input type="checkbox" checked="checked" />
                  <span class="checkmark"></span>
                </label>
                <label class="box content"
                  >Hire cook
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
          </section>
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

          <section class="mt-3">
            <!-- INPUT NUMBER -->
            <InputNumberSlider />
          </section>
          <!-- INPUT DATE -->

          <div class="w-modal-inputs modal-input mt-3 mx-auto">
            <select
              type="date"
              name="date"
              class="date relative focus:outline-none"
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
          </div>

          <!-- INPUT LOCATION -->
          <div class="w-modal-inputs modal-input mt-3 mx-auto">
            <select
              type="location"
              name="location"
              class="date relative focus:outline-none"
            >
              <option class="content" value="">Pick location</option>
              <option value="Krk">Krk</option>
              <option value="Zadar">Zadar</option>
              <option value="Split">Split</option>
            </select>
          </div>

          <!-- INPUT INFO -->
          <div class="content flex justify-center w-modal-inputs mx-auto">
            <div class="flex flex-col w-modal-inputs">
              <input
                class="modal-input mt-3"
                placeholder="Your name"
                name="name"
                id="name"
              />
              <input
                class="modal-input mt-3"
                placeholder="Your email"
                name="email"
                id="email"
              />
              <textarea
                placeholder="Write your message"
                class="modal-input rounded-2xl mt-3"
                name="message"
                id="message"
              ></textarea>
            </div>
          </div>

          <!-- Book now & close modal & send data & show success modal-->

          <div class="max-w-btn mx-auto xs:mx-0">
            <a
              class="btn btn--secondary xs:block mt-5 mb-5 xs:mt-2 xs:mb-0"
              type="button"
              @click="close"
            >
              <p
                class="font-medium text-btn text-center xs:text-left select-none"
              >
                Book Now
              </p>
            </a>
          </div>
          <footer class="modal-footer content">
            <div class="flex flex-col items-center mx-auto my-5">
              <h1 class="font-semibold leading-tight">
                Have
                <span class="font-light italic">more</span>
              </h1>
              <h1 class="font-semibold leading-tight hidden xs:block">
                <span class="font-light italic"> questions?</span>
              </h1>
              <p class="content text-white text-base mt-3">
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
  data() {},

  methods: {
    close() {
      this.$emit('close')
    },
  },
}
</script>
<style>
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
</style>
