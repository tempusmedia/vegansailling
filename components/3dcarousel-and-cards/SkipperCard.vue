<template>
  <div>
    <div>
      <!-- first card -->
      <div class="mx-auto bg-white max-w-crew-card sm:max-w-crew-card-desk">
        <div class="relative bg-qna">
          <!-- mobile -->
          <svg
            class="absolute z-50 sm:hidden"
            viewBox="0 10 284 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.8"
              d="M1 69.1545C149.424 -12.6724 153.203 68.0384 256.151 93.4635C265.881 95.8667 279.044 96.9436 285.716 97.0324"
              stroke="#EAECF1"
              stroke-width="4"
            />
            <path
              d="M1.09721 0V55.5C148.603 -11.0035 162.097 74.5 285.597 86.5V0H1.09721Z"
              fill="#E9EBEF"
            />
          </svg>

          <!-- desktop -->
          <svg
            class="absolute z-50 hidden sm:block"
            viewBox="0 0 554 128"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.8"
              d="M1.5 72.0001C289 -86.4999 296.319 69.8381 495.731 119.087C514.579 123.742 540.076 125.828 553 126"
              stroke="white"
              stroke-width="4"
            />
          </svg>

          <img class="skipper-mask" src="/images/skipper01.jpg" />
        </div>
        <div class="px-2 py-6 text-center sm:py-10 card-shadow">
          <h2 class="pb-2 card-title sm:text-2xl sm:pb-8 sm:pt-0">
            Filip Đurić
          </h2>

          <table id="thirdTable" class="content sm:mr-12">
            <tbody>
              <tr class="table-row" v-for="row in rows">
                <!-- for space between rows add class="py-1" to <td>  -->
                <td v-for="col in columns">
                  <p>{{ row[col] }}</p>
                </td>
              </tr>
            </tbody>
          </table>
          <div
            class="pt-4 text-xl cursor-pointer text-vegan-red font-poppins hover:opacity-80"
            @click="isModalVisible"
          >
            <p>Read more</p>
          </div>
        </div>
      </div>
      <svg
        width="0"
        height="0"
        viewBox="0 0 576 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="mySkip">
            <path d="M576 439.248H0V439.77H576V439.248Z" fill="black" />
            <path
              d="M345.293 38.9788C208.266 -38.3384 64.7964 17.5395 0 51.4402V439.248H576V115.459C537.834 117.628 465.745 106.943 345.293 38.9788Z"
              fill="black"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
    <!-- <div class="mx-auto max-w-crew-card">
      <img src="/images/cook01.jpg" />
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      rows: [
        { item: 'Name', desc: 'Filip Đurić' },
        { item: 'Year of birth', desc: '1992' },
        { item: 'Nationality', desc: 'Croatian' },
        { item: 'Profession', desc: 'Product designer' },
        { item: 'Languages', desc: 'English, Slovenian, Croatian' },
        {
          item: 'Yachting experience',
          desc: 'from childhood',
        },
        {
          item: 'Skipper from',
          desc: '2012',
        },
        {
          item: 'Hobbies',
          desc: 'yoga, sailing, hiking, cycling, skiing...',
        },
      ],
    }
  },
  methods: {
    isModalVisible(event) {
      this.$emit('clicked', true)
    },
  },
  computed: {
    columns: function columns() {
      if (this.rows.length == 0) {
        return []
      }
      return Object.keys(this.rows[0])
    },
  },
}
</script>
<style>
.table-row td:first-child {
  text-align: right;
  border-right: 2px solid #e5ebec;
  padding-right: 1rem;
  width: 50%;
  position: relative;
}

.table-row td:first-child > p {
  position: absolute;
  top: 0;
  right: 1rem;
}

.table-row td:last-child {
  text-align: left;
  padding-left: 1rem;
  width: 50%;
  word-wrap: break-word;
}
.card-shadow {
  /* box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.09); */
  box-shadow: inset 0px 0px 20px 0px rgba(0, 0, 0, 0.09);
}

.skipper-mask {
  clip-path: url(#mySkip);
}
</style>
