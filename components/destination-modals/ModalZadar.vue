<template>
  <transition name="modal-fade">
    <div class="z-50 overflow-y-auto modal-shade">
      <div
        class="top-0 max-w-screen-lg mb-10 sm:mt-10 modal-bg"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <div class="modal-content">
          <div
            class="flex flex-col justify-between w-full overflow-x-hidden bg-left bg-no-repeat bg-cover h-80 sm:hidden"
            style="background-image: url('/images/weekly-zadar.jpg')"
          >
            <button
              type="button"
              @click="close"
              class="p-5 pr-4 ml-auto focus:outline-none highlight-none"
              aria-label="Close modal"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke="#154752"
                  stroke-width="2"
                  d="M1.268 20.793l19.5-19.5M1.707 1.293l19.028 19.028"
                />
              </svg>
            </button>
          </div>

          <button
            type="button"
            @click="close"
            class="hidden p-2 ml-auto focus:outline-none highlight-none sm:block"
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

          <div class="relative z-10 -mt-20 sm:hidden">
            <svg
              width="100vw"
              viewBox="0 0 368 182"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0)">
                <path
                  d="M-5.00001 29.6805L-4.99999 66.3019L384.5 66.3019L384.5 38.8216C322.057 52.4771 247.441 35.9151 162.652 21.6278C88.0374 9.05506 35.1952 17.4076 -5.00001 29.6805Z"
                  fill="white"
                  fill-opacity="0.57"
                />
                <path
                  d="M-0.499974 45.3331L-0.499979 182L384.5 182L384.5 32.5411C328.179 51.2421 263.154 39.7824 179.5 25.6864C109.074 13.8194 47.8928 25.399 -0.499974 45.3331Z"
                  fill="white"
                />
                <path
                  d="M-97 46.1863C5.50002 0.686348 30.3593 -5.66238 167.426 22.0514C277.652 44.3381 367.609 66.5576 443.043 22.0514"
                  stroke="url(#paint0_linear)"
                  stroke-width="3"
                />
                <path
                  d="M-97 46.1863C5.50002 0.686348 30.3593 -5.66238 167.426 22.0514C277.652 44.3381 367.609 66.5576 443.043 22.0514"
                  stroke="#D5DDDF"
                  stroke-width="3"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="-71.7237"
                  y1="45.4538"
                  x2="441.56"
                  y2="64.1642"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#ED4924" />
                  <stop offset="1" stop-color="#F17322" />
                </linearGradient>
                <clipPath id="clip0">
                  <rect width="385" height="182" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div
            class="relative z-20 flex flex-col p-5 -mt-32 sm:mt-0 sm:mx-16 sm:flex-row"
          >
            <div class="sm:-mt-24">
              <div class="hidden mb-8 -mt-10 sm:block">
                <img src="/images/weekly-zadar.jpg" alt="Weekly Zadar" />
              </div>
              <div class="py-5 pl-6">
                <h1 class="route-main-title">
                  Zadar region (Central Adriatic)
                </h1>
              </div>
              <div class="flex items-start pt-8">
                <div>
                  <h1 class="relative route-modal-nr my-top3">1</h1>
                </div>
                <div class="ml-10">
                  <p class="mb-3 route-modal-title">
                    Day one
                    <span class="italic text-light">(usually Saturday):</span>
                  </p>
                  <p class="route-modal-body">
                    Check-in from 5 pm in one of the marinas in Zadar Region. If
                    so agreed, shopping will be done with you before leaving the
                    marina. Welcoming drink. Unpacking and getting ready to
                    sail.Short afternoon sailing to one of the nice close-by
                    islands Ugljan or Sestrunj for overnight anchoring.
                  </p>
                </div>
              </div>
              <div class="flex items-start pt-8">
                <div><h1 class="relative route-modal-nr my-top3">2</h1></div>
                <div class="ml-8">
                  <p class="mb-3 route-modal-title">Day two:</p>
                  <p class="route-modal-body">
                    Breakfast, slow morning, navigation with optional (group
                    choice) snorkeling at the shipwreck which is on our way to
                    Dugi otok, Saharun bay, famous sandy beach where we will
                    have lunch and stay overnight.
                  </p>
                </div>
              </div>
              <div class="relative hidden md:block">
                <img
                  class="absolute w-64 top-14 -left-40"
                  src="/images/wave-orange.svg"
                  alt="Orange Wave"
                />
              </div>
            </div>
            <div>
              <div class="flex items-start pt-8">
                <div>
                  <h1 class="relative route-modal-nr my-top3">3</h1>
                </div>
                <div class="ml-10">
                  <p class="mb-3 route-modal-title">Day three:</p>
                  <p class="route-modal-body">
                    After breakfast, navigation to the nearby cave and a natural
                    pool. You can enter the cave by swimming, and it’s light
                    since there is a hole in the sealing. Anchoring in Natural
                    Park Telaščica.
                  </p>
                </div>
              </div>
              <div class="flex items-start pt-8">
                <div>
                  <h1 class="relative route-modal-nr my-top3">4</h1>
                </div>
                <div class="ml-10">
                  <p class="mb-3 route-modal-title">Day four:</p>
                  <p class="route-modal-body">
                    Morning visit to the cliffs and snorkeling at open sea
                    vertical underwater wall.Navigation through the National
                    Park Kornati Islands to Žirje, Mala Stupica. Optional walk
                    around Žirje Island where you will see some remainings of
                    the military bunkers with a great view.
                  </p>
                </div>
              </div>
              <div class="flex items-start pt-8">
                <div>
                  <h1 class="relative route-modal-nr my-top3">5</h1>
                </div>
                <div class="ml-10">
                  <p class="mb-3 route-modal-title">Day five:</p>
                  <p class="route-modal-body">
                    Early morning departure towards Skradin. After breakfast a
                    trip to the amazing Krka Falls. You will get a lunch box.
                    Evening visit to the Town of Šibenik or, if group decides
                    so, staying on the anchor in one of the bays in front of
                    city entrance.
                  </p>
                </div>
              </div>
              <div class="flex items-start pt-8">
                <div>
                  <h1 class="relative route-modal-nr my-top3">6</h1>
                </div>
                <div class="ml-10">
                  <p class="mb-3 route-modal-title">Day six:</p>
                  <p class="route-modal-body">
                    After breakfast, departure towards Žut Island where we stay
                    anchored or on the buoy for the lunch. Evening hiking on top
                    of the hill for a spectacular and unforgettable sunset. *Žut
                    Marina has showers, toilets, and a small shop.
                  </p>
                </div>
              </div>
              <div class="flex items-start pt-8">
                <div>
                  <h1 class="relative route-modal-nr my-top3">7</h1>
                </div>
                <div class="ml-10">
                  <p class="mb-3 route-modal-title">Day seven:</p>
                  <p class="route-modal-body">
                    Morning at Marina Žut or some of the nearby bays. Afternoon
                    moving towards the marina from which we’ve left, with a
                    break for swimming. We have to reach the marina till 5 pm.
                    Dinner onboard in the marina.
                  </p>
                </div>
              </div>
              <div class="flex items-start pt-8">
                <div>
                  <h1 class="relative route-modal-nr my-top3">8</h1>
                </div>
                <div class="ml-8">
                  <p class="mb-3 route-modal-title">Day eight:</p>
                  <p class="route-modal-body">
                    Early breakfast in the marina and check-out.
                  </p>
                </div>
              </div>

              <div class="flex justify-center pt-5 sm:hidden">
                <div class="pr-2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 -2 20 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.5 6.5L0.792893 5.79289C0.402369 6.18342 0.402369 6.81658 0.792893 7.20711L1.5 6.5ZM6.29289 12.7071C6.68342 13.0976 7.31658 13.0976 7.70711 12.7071C8.09763 12.3166 8.09763 11.6834 7.70711 11.2929L6.29289 12.7071ZM7.70711 1.70711C8.09763 1.31658 8.09763 0.683418 7.70711 0.292893C7.31658 -0.0976311 6.68342 -0.0976311 6.29289 0.292893L7.70711 1.70711ZM19.5 5.5H1.5V7.5H19.5V5.5ZM0.792893 7.20711L6.29289 12.7071L7.70711 11.2929L2.20711 5.79289L0.792893 7.20711ZM2.20711 7.20711L7.70711 1.70711L6.29289 0.292893L0.792893 5.79289L2.20711 7.20711Z"
                      fill="#ED4C24"
                    />
                  </svg>
                </div>
                <p
                  @click="close"
                  class="font-medium font-poppins text-vegan-red"
                >
                  Go Back
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'modal',

  methods: {
    close() {
      this.$emit('close')
    },
  },
}
</script>
<style>
.my-top3 {
  top: -1.3rem;
}
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

.route-modal-title::before {
  width: 100px;
  border-bottom: 1px solid #ef5f23;
  content: '';
  position: absolute;
  top: 1.7rem;
  left: -1.5rem;
}
</style>
