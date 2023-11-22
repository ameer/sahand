<template>
  <v-container id="dashboard-page" fluid class="px-5 py-6">
    <v-row>
      <v-col cols="12" sm="9">
        <v-data-table
          height="500px"

          :headers="headers"
          :items="instruments"
          :items-per-page="-1"
          class="elevation-1 overflow-hidden"
        />
      </v-col>
      <v-col cols="12" sm="3" />
    </v-row>
  </v-container>
</template>
<script>
export default {
  layout: 'dashboard',
  middleware: 'auth',
  data () {
    return {
      instruments: [],
      headers: [
        // {
        //   text: 'عملیات بازارگردانی',
        //   align: 'start',
        //   sortable: false,
        //   value: 'name'
        // },
        { text: 'نماد', value: 'name', align: 'center' },
        { text: 'استراتژی بازارگردانی', value: 'algorithm', align: 'center' },
        { text: 'تعداد سهم', value: 'asset', align: 'center' },
        { text: 'آخرین قیمت', value: 'lastTradePrice', align: 'center' },
        { text: 'ارزش لحظه‌ای', value: 'liveValue', align: 'center' }
        // { text: 'رصد سهم', value: 'iron' }
      ]
    }
  },
  async fetch () {
    const response = await this.$axios.get('/ajax/instrument/get', { withCredentials: true })
    this.instruments = response.data
  }
}
</script>
<style>

</style>
