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

          <div class="mx-16">
            <div class="w-2/3 mb-8 -mt-32">
              <img class="cook-mask" src="/images/cook01.jpg" />
            </div>
            <div class="relative pt-3 pb-12 pl-6">
              <h1 class="carousel-main-title">Helena Smoljanić</h1>
            </div>
          </div>
          <div class="grid grid-cols-1 row-gap-3 pb-5 mx-16 sm:grid-cols-3">
            <div>
              <div class="ml-10">
                <p class="mb-3 carousel-modal-title">Date of birth:</p>
                <p class="route-modal-body">1981</p>
              </div>
            </div>

            <div>
              <div class="ml-10">
                <p class="mb-3 carousel-modal-title">Nationality:</p>
                <p class="route-modal-body">Croatian</p>
              </div>
            </div>
            <div>
              <div class="ml-10">
                <p class="mb-3 carousel-modal-title">Profession:</p>
                <p class="route-modal-body">
                  translator, homeopath, yoga teacher
                </p>
              </div>
            </div>
            <div>
              <div class="ml-10">
                <p class="mb-3 carousel-modal-title">Languages:</p>
                <p class="route-modal-body">English, Italian, German</p>
              </div>
            </div>
            <div>
              <div class="ml-10">
                <p class="mb-3 carousel-modal-title">Cooking experience:</p>
                <p class="route-modal-body">
                  vegan cooking classes and daily preparation of vegan meals
                </p>
              </div>
            </div>
            <div>
              <div class="ml-10">
                <p class="mb-3 carousel-modal-title">Hobbies:</p>
                <p class="route-modal-body">
                  Cooking, mountaineering, natural cures, homeopathy
                </p>
              </div>
            </div>
          </div>

          <div class="pb-24 mx-16">
            <div>
              <div class="flex items-start pt-8">
                <div class="ml-10">
                  <p class="mb-3 route-modal-title">
                    An extra person on your sailing trip to make all your cares
                    float away!
                  </p>
                  <p class="route-modal-body">
                    My name is Helena, and it is my duty to make sure you are
                    happy and satisfied with all that comes from our kitchen on
                    board. Delicious ingredients I will buy for you, and the
                    meals I will prepare with joy will give you the feeling of
                    being cared for and keep you totally relaxed. I am a fan of
                    cooking and healthy living, which is a combination that will
                    certainly bring a smile to your face. Your menus will
                    comprise Mediterranean- or Asian-style full-bodied vegan
                    meals with refreshing drinks.
                  </p>
                </div>
              </div>

              <div class="flex items-start pt-8">
                <div class="ml-10">
                  <p class="route-modal-body">
                    I will serve them proficiently and clean up everything
                    afterwards, so forget about wasting your time in the kitchen
                    while the sun and the sea are calling for you! My sole aim
                    is to make you feel carefree, comfortable, and content,
                    therefore before the trip we will discuss your wishes
                    concerning meals. The cooking and kitchen cleaning services
                    are provided with great care and organized in such a way as
                    not to interfere with your daily routines. Depending on your
                    wishes, I can transform into a chameleon or be in charge of
                    entertainment. In any case, everything you need will be done
                    before you need it!
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
