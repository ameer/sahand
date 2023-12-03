<template>
  <section id="counter-section" class="primary darken-2 py-16">
    <v-container>
      <v-row class="align-center py-6">
        <v-col v-for="(item, index) in items" :key="'counter-item-'+index" cols="12" sm="4">
          <div class="white--text text-center">
            <p class="text-h3 font-weight-bold high--em mb-2">
              <number
                ref="number1"
                :from="0"
                :to="item.number"
                :format="formatNumber"
                :duration="3"
                :delay="2"
                easing="Power0.easeNone"
              />
            </p>
            <p class="text-h5 font-weight-light medium-em mb-0">
              {{ item.title }}
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
export default {
  data: () => ({
    items: [
      {
        number: 400,
        title: 'هزار میلیارد ارزش دارایی تحت مدیریت'
      },
      {
        number: 42,
        title: 'تعداد سهم‌های اجرا شده'
      },
      {
        number: 4,
        title: 'تعداد مجوزهای اخذ شده'
      }
    ]
  }),
  methods: {
    formatNumber (number) {
      return Intl.NumberFormat('fa-IR', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(number)
    }
  }
}
</script>
<style>
</style>
