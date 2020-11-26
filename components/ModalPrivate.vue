<template>
  <div class="modal-backdrop z-50 flex-column">
    <div
      class="modal w-full object-center object-cover mx-5 rounded-3xl flex-column"
      style="background-image: url('/images/bg-wavy.jpg')"
    >
      <div
        class="modal2 rounded-3xl m-3"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <button
          type="button"
          @click="close"
          class="focus:outline-none highlight-none ml-auto p-6"
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
        <header id="modalTitle" class="max-w-modal-txtsm break-words mx-auto">
          <h1 class="section-title font-light text-center mb-10">
            <span class="font-semibold">Book</span> a private vegan sailing
          </h1>
        </header>
        <section class="modal-body" id="modalDescription">
          <form name="contact" action="" method="post">
            <div class="content">
              <div class="w-full">
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
                <div
                  class="flex justify-center items-center bg-qna px-10 py-4 mx-5 rounded-xl"
                >
                  <div class="flex flex-col justify-center">
                    <div class="text-left">
                      <input
                        type="radio"
                        id="sailingboat"
                        name="boat"
                        value="sailingboat"
                        checked="checked"
                      />
                      <label for="sailingboat"
                        ><p class="content">Sailingboat</p></label
                      >
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="catamaran"
                        name="boat"
                        value="catamaran"
                      />

                      <label for="catamaran"
                        ><p class="content">Catamaran</p></label
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <client-only>
              <div class="flex flex-col justify-center">
                <div class="mx-auto max-w-modal-inputs w-modal-inputs mt-3">
                  <div class="flex justify-around">
                    <p class="content pl-2">Number of people</p>

                    <!-- ovdje nr input-->
                  </div>
                </div>

                <div class="mx-auto max-w-modal-inputs w-modal-inputs mt-3">
                  <p class="content">Pick a date</p>
                  <date-picker
                    placeholder="test"
                    :inputAttributes="{ placeholder: 'test' }"
                    v-model="date_today"
                  />
                </div>
              </div>

            
            </client-only>
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
                  class="modal-input rounded-xl mt-3"
                  name="message"
                  id="message"
                ></textarea>
              </div>
            </div>
            <input class="form-button" type="submit" value="Send message" />
          </form>
        </section>
        <footer class="modal-footer">
          <div class="flex flex-col items-center mx-auto">
            <p class="content">+ 385(0)98 953 5476</p>
            <p>info@vegansailing.eu</p>
            <div class="flex">
              <img src="/images/instagram.svg" />
              <img src="/images/facebook.svg" />
            </div>
            <button>reserve no</button>
            <button
              type="button"
              class="btn-green"
              @click="close"
              aria-label="Close modal"
            >
              Close me!
            </button>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      date_today: new Date(),
    }
  },
  methods: {
    close() {
      this.$emit('close')
    },
  },
}
</script>
<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal2 {
  background: #ffffff;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
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

[type='radio']:checked,
[type='radio']:not(:checked) {
  position: absolute;
  left: -9999px;
}
[type='radio']:checked + label,
[type='radio']:not(:checked) + label {
  position: relative;
  padding-left: 28px;
  cursor: pointer;
  line-height: 20px;
  display: inline-block;
  color: #666;
}
[type='radio']:checked + label:before,
[type='radio']:not(:checked) + label:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 18px;
  height: 18px;
  border: 1px solid #ddd;
  border-radius: 100%;
  background: #fff;
}
[type='radio']:checked + label:after,
[type='radio']:not(:checked) + label:after {
  content: '';
  width: 10px;
  height: 10px;
  background: #ed4924;
  position: absolute;
  top: 4px;
  left: 4px;
  border-radius: 100%;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
[type='radio']:not(:checked) + label:after {
  opacity: 0;
  -webkit-transform: scale(0);
  transform: scale(0);
}
[type='radio']:checked + label:after {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}

.vue-numeric-input.updown {
  width: 51px !important;
}
.vue-numeric-input .btn {
  border: 2px solid red !important;
}
.vue-number-input__btn-dec {
  background: red !important;
}
</style>
