<template>
  <transition name="modal-fade">
    <div class="z-50 overflow-y-auto modal-shade">
      <div
        class="top-0 max-w-screen-lg mt-10 mb-10 modal-bg"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <div class="modal-content">
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

          <div class="mx-8 sm:mx-16">
            <div class="hidden w-full mb-8 sm:block sm:w-2/3">
              <img class="-mt-32 cook-mask" src="/images/cook02.jpg" />
            </div>
            <div class="relative pt-3 pb-12 pl-6">
              <h1 class="carousel-main-title">Doris Valković</h1>
            </div>
          </div>
          <div class="grid grid-cols-1 row-gap-3 pb-5 mx-16 sm:grid-cols-3">
            <div>
              <div class="ml-0 sm:ml-10">
                <p class="mb-3 carousel-modal-title">Date of birth:</p>
                <p class="route-modal-body">1990</p>
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
                <p class="route-modal-body">
                  BA in Cultural Studies, social media content creator, recipe
                  creator, food photographer, food blogger
                </p>
              </div>
            </div>
            <div>
              <div class="ml-0 sm:ml-10">
                <p class="mb-3 carousel-modal-title">Languages:</p>
                <p class="route-modal-body">English, Croatian</p>
              </div>
            </div>
            <div>
              <div class="ml-0 sm:ml-10">
                <p class="mb-3 carousel-modal-title">Cooking experience:</p>
                <p class="route-modal-body">
                  school of natural cuisine, creation and production of natural
                  products of my own brand of healthy food, holding cooking
                  workshops, more than 5 years of food blogging and creating
                  vegan recipes
                </p>
              </div>
            </div>
            <div>
              <div class="ml-0 sm:ml-10">
                <p class="mb-3 carousel-modal-title">Hobbies:</p>
                <p class="route-modal-body">
                  cooking, photography, travel, yoga, hiking, various physical
                  activities
                </p>
              </div>
            </div>
          </div>

          <div class="pb-24 mx-16">
            <div>
              <div class="flex items-start pt-8">
                <div class="ml-0 sm:ml-10">
                  <p class="mb-3 route-modal-title">
                    I am a big fan of cooking, which I feel as a kind of
                    meditation.
                  </p>
                  <p class="route-modal-body">
                    When I’m in the kitchen, all my creativity spills over into
                    the dish and eventually onto the plate. It was experimenting
                    in the kitchen with natural and whole foods that prompted me
                    to start writing recipes and recording my creations on the
                    food blog “Foodoris” in 2015. Until recently, I produced
                    granola and energy balls under my “Seed” brand name because
                    my desire is to change eating habits and offer not only
                    recipes but also a finished product. I consider it a great
                    privilege to make people happy with a recipe or a prepared
                    meal because food is a pleasure and an invitation to
                    socialize. At the same time, I choose only quality foods,
                    those without animal origin.
                  </p>
                </div>
              </div>

              <div class="flex items-start pt-8">
                <div class="ml-0 sm:ml-10">
                  <p class="route-modal-body">
                    Since I am a Mediterranean child, raised at sea and with the
                    sea, this type of diet suits me best. But I like to
                    experiment with new flavors and world cuisines. I’ll make
                    sure you feel at home on your vacation, by eating delicious
                    and nourishing food, and I also want to inspire you to
                    explore and taste some new flavors. All you have to do is to
                    sit comfortably at the table, enjoy and share the experience
                    with your companions.
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
