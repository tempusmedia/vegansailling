<template>
  <div>
    <div>
      <!-- <h2 class="section-title font-semibold text-center mb-10">
        Meet<span class="font-light"> our crew</span>
      </h2> -->

      <!-- first card -->
      <div class="max-w-crew-card sm:max-w-xl mx-auto pb-5 bg-white">
        <img src="/images/skipper01.jpg" />
        <div class="text-center py-6 sm:py-10 px-2 card-shadow">
          <h2 class="card-title pb-2 sm:text-2xl sm:pb-8 sm:pt-0">Skipper</h2>

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
        </div>
      </div>
    </div>
    <!-- <div class="max-w-crew-card mx-auto">
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
        { item: 'Date of birth', desc: '05.01.1992' },
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
          desc:
            'yoga, sailing, hiking, cycling, skiing, swimming, basketball, volleyball',
        },
      ],
    }
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
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.09);
}
</style>
