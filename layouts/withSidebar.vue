<template>
  <v-app>
    <m-header />
    <v-main style="background-color: #f5f5f5;">
      <v-container class="my-8">
        <v-row>
          <v-col cols="3" class="d-flex flex-column" style="gap:16px;">
            <v-card v-for="(item, i) in items" :key="`stc-${i}`" :to="'/market-making'+item.href">
              <v-card-title>
                <v-icon color="primary">
                  mdi-information-variant-circle
                </v-icon>
                <span class="ms-1 text-body-2 font-weight-bold" v-text="item.text" />
              </v-card-title>
            </v-card>
          </v-col>
          <v-col cols="9">
            <nuxt />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <mfooter />
  </v-app>
</template>

<script>
import mfooter from '../components/mfooter.vue'
import MHeader from '../components/mHeader.vue'
export default {
  components: { mfooter, MHeader },
  data () {
    return {
      items: [
        { text: 'معرفی سبدگردانی', href: '/' },
        { text: 'فرآیند سرمایه‌گذاری در سبد', href: '/process-of-investment-in-market-making' },
        { text: 'رویکرد تحلیل اوراق بهادار و منابع اطلاعاتی', href: '#' },
        { text: 'کارمزد سبدگردانی', href: '#' },
        { text: 'قرارداد یا فرم سبدگردانی', href: '#' },
        { text: 'شاخص‌های عملکردی', href: '#' },
        { text: 'سنجش ریسک‌پذیری', href: '#' },
        { text: 'پرسش‌های متداول سبدگردانی', href: '#' }
      ]
    }
  },
  created () {
    this.$vuetify.theme.dark = false
  }
}
</script>
