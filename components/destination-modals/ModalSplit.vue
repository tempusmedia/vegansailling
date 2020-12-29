<template>
  <transition name="modal-fade">
    <div class="modal-shade overflow-y-auto z-50">
      <div
        class="modal-bg top-0 mt-10 mb-10 max-w-screen-lg"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
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

          <div class="flex mx-16">
            <div class="-mt-24">
              <div class="-mt-10 mb-8">
                <img src="/images/weekly-split.jpg" alt="Weekly Split" />
              </div>
              <div class="pl-6 py-5">
                <h1 class="route-main-title">Split region (South Adriatic)</h1>
              </div>
              <div class="flex items-start pt-8">
                <div>
                  <h1 class="route-modal-nr relative my-top3">1</h1>
                </div>
                <div class="ml-10">
                  <p class="route-modal-title mb-3">
                    Day one
                    <span class="italic text-light">(usually Saturday):</span>
                  </p>
                  <p class="route-modal-body">
                    Check-in from 1pm till 8pm at Murter, marina Haramina If
                    needed, shopping for food and water (supply for 3-7 days,
                    depending on chosen type of route-with or without supply
                    stops) If check-in and supply are finished before 5PM, start
                    sailing to island Tijat (2:30-3:00h 19NM)
                  </p>
                </div>
              </div>
              <div class="flex items-start pt-8">
                <div><h1 class="route-modal-nr relative my-top3">2</h1></div>
                <div class="ml-8">
                  <p class="route-modal-title mb-3">Day two:</p>
                  <p class="route-modal-body">
                    Morning at Tijat island; yoga and meditation program
                    available Departure towards Krka falls after lunch, with
                    optional stop in Šibenik (1:30h 11NM)
                  </p>
                </div>
              </div>
              <div class="relative">
                <img
                  class="absolute top-14 w-64 -left-40"
                  src="/images/wave-orange.svg"
                  alt="Orange Wave"
                />
              </div>
            </div>
            <div>
              <div class="flex items-start pt-8">
                <div>
                  <h1 class="route-modal-nr relative my-top3">3</h1>
                </div>
                <div class="ml-10">
                  <p class="route-modal-title mb-3">Day three:</p>
                  <p class="route-modal-body">
                    Visit Krka falls in the morning (3-5h) Afternoon departure
                    to Žirje (if buoy is reserved in advance) 2:30-3:00h 18NM
                  </p>
                </div>
              </div>
              <div class="flex items-start pt-8">
                <div>
                  <h1 class="route-modal-nr relative my-top3">4</h1>
                </div>
                <div class="ml-10">
                  <p class="route-modal-title mb-3">Day four:</p>
                  <p class="route-modal-body">
                    Departure from Žirje to Kornati after morning activities
                    (yoga and meditation/swimming/breakfast)
                  </p>
                </div>
              </div>
              <div class="flex items-start pt-8">
                <div>
                  <h1 class="route-modal-nr relative my-top3">5</h1>
                </div>
                <div class="ml-10">
                  <p class="route-modal-title mb-3">Day five:</p>
                  <p class="route-modal-body">
                    (optional early morning hike to attractive “rock plate” at
                    island Kornat) Departure to natural park Telaščica after
                    breakfast Trip to salty lake; diving/jumping/ hiking cliffs
                    Peaceful afternoon onboard in Telaščica bay or other nearby
                    bay
                  </p>
                </div>
              </div>
              <div class="flex items-start pt-8">
                <div>
                  <h1 class="route-modal-nr relative my-top3">6</h1>
                </div>
                <div class="ml-10">
                  <p class="route-modal-title mb-3">Day six:</p>
                  <p class="route-modal-body">
                    Departure towards Žut island marina after breakfast (1:10h
                    8NM) Replenish supplies in local store Hike (20-30min) to
                    the top of the island for one of the most beautiful sunsets
                    behind Kornati archipelagos Dinner onboard or at one of the
                    local restaurants
                  </p>
                </div>
              </div>
              <div class="flex items-start pt-8">
                <div>
                  <h1 class="route-modal-nr relative my-top3">7</h1>
                </div>
                <div class="ml-10">
                  <p class="route-modal-title mb-3">Day seven:</p>
                  <p class="route-modal-body">
                    Departure to Kakan island (or other nearby island according
                    to weathercast) after breakfast 3:00h 20NM Lunch, afternoon
                    swimming and relaxing onboard
                  </p>
                </div>
              </div>
              <div class="flex items-start pt-8">
                <div>
                  <h1 class="route-modal-nr relative my-top3">8</h1>
                </div>
                <div class="ml-8">
                  <p class="route-modal-title mb-3">Day eight:</p>
                  <p class="route-modal-body">Return to Murter and check-out</p>
                </div>
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
