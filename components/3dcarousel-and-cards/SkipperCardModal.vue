<template>
  <transition name="modal-fade">
    <div class="z-50 modal-shade">
      <div class="z-50 overflow-y-auto modal-shade">
        <div
          class="top-0 max-w-screen-lg mb-10 modal-bg-skipper"
          role="dialog"
          aria-labelledby="modalTitle"
          aria-describedby="modalDescription"
        >
          <div class="mt-0 mb-0 bg-white sm:mt-28 sm:mb-28 rounded-3xl">
            <div class="modal-content">
              <div
                class="flex flex-col justify-between w-full overflow-x-hidden bg-left bg-no-repeat bg-cover h-80 sm:hidden"
                style="background-image: url('/images/skipper01.jpg')"
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
              <div class="relative z-30 mx-8 -mt-36 sm:mt-0 sm:mx-16">
                <div class="hidden w-full mb-8 sm:block sm:w-2/3">
                  <img class="-mt-36 cook-mask" src="/images/skipper01.jpg" />
                </div>
                <div class="relative pt-3 pb-12 pl-8 text-left sm:pl-6">
                  <h1 class="carousel-main-title">Filip Đurić</h1>
                </div>
              </div>
              <div
                class="relative z-30 grid grid-cols-2 row-gap-6 col-gap-10 pb-5 mx-16 sm:row-gap-3 sm-col-gap-0 sm:grid-cols-3"
              >
                <div>
                  <div class="ml-0 sm:ml-10">
                    <p class="mb-3 carousel-modal-title">Year of birth:</p>
                    <p class="route-modal-body">1992</p>
                  </div>
                </div>

                <div>
                  <div class="ml-0 sm:ml-10">
                    <p class="mb-3 carousel-modal-title">Nationality:</p>
                    <p class="route-modal-body">Croatian</p>
                  </div>
                </div>
                <div>
                  <div class="ml-0 sm:ml-10">
                    <p class="mb-3 carousel-modal-title">Profession:</p>
                    <p class="route-modal-body">Product designer</p>
                  </div>
                </div>
                <div>
                  <div class="ml-0 sm:ml-10">
                    <p class="mb-3 carousel-modal-title">Languages:</p>
                    <p class="route-modal-body">English, Slovenian, Croatian</p>
                  </div>
                </div>
                <div>
                  <div class="ml-0 sm:ml-10">
                    <p class="mb-3 carousel-modal-title">
                      Yachting experience:
                    </p>
                    <p class="route-modal-body">from childhood</p>
                  </div>
                </div>
                <div>
                  <div class="ml-0 sm:ml-10">
                    <p class="mb-3 carousel-modal-title">Skipper:</p>
                    <p class="route-modal-body">2012</p>
                  </div>
                </div>
                <div>
                  <div class="ml-0 sm:ml-10">
                    <p class="mb-3 carousel-modal-title">Hobbies:</p>
                    <p class="route-modal-body">
                      yoga, sailing, hiking, cycling, skiing, swimming,
                      basketball, volleyball
                    </p>
                  </div>
                </div>
              </div>

              <div class="pb-24 mx-16">
                <div>
                  <div class="flex items-start pt-8">
                    <div class="ml-0 sm:ml-10">
                      <p class="mb-3 route-modal-title">
                        Since childhood I was going on cruises with my family,
                        where I was slowly gathering experience as a sailor.
                      </p>
                      <p class="route-modal-body">
                        Over the years I’ve visited numerous islands and bays,
                        not only those which are popular, but also those for
                        which most people have no knowledge about. Through those
                        experiences I’ve also gained the knowledge about the
                        navigation, anchoring, mooring and all those little
                        things necessary for life on a boat. In elementary
                        school I’ve started to train sailing in the yacht club
                        “Galeb” and few years after I’ve joined the crew of the
                        yacht club “Neverin”. In 2012, I’ve started working as a
                        sailboat skipper and in that way started to share my
                        experience and landscape discoveries with everyone who
                        wants to enjoy the beauties of the Adriatic sea. Since
                        2017, I cooperate as a lecturer for company “Navticni
                        tecaji” from Slovenia at the courses for boat leader
                        licenses, and as a teacher at the skipper academy
                        practical trainings. Since 2018 I cooperate with “NAS”
                        sailing center from Krk, Croatia, as a skipper, as well
                        as theoretical and practical instructor at variety of
                        sailing courses, from beginners course through
                        navigation course to the skipper training.
                      </p>
                    </div>
                  </div>

                  <div class="flex items-start pt-8">
                    <div class="ml-0 sm:ml-10">
                      <p class="route-modal-body">
                        I became a vegetarian when I was 10 and at age of 23
                        I’ve upgraded my diet choice to veganism. I’m trying my
                        best to live my everyday life according to Yogic
                        principles, which are great providers of knowledge and
                        awareness in shaping my moral and ethical views. I’m
                        about to become yoga instructor according to Yoga in
                        Daily life System.
                      </p>
                    </div>
                  </div>
                  <div class="relative">
                    <img
                      class="absolute w-64 top-10 -left-40"
                      src="/images/wave-orange.svg"
                      alt="Orange Wave"
                    />
                  </div>
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
