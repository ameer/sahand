<template>
  <v-app>
    <m-header />
    <v-main style="background-color: #f5f5f5;">
      <v-container class="my-8">
        <v-row>
          <v-col cols="3">
            <div class="aside sticky d-flex flex-column" style="gap:16px;top:80px;">
              <v-card v-for="(item, i) in items" :key="`stc-${i}`" :to="'/market-making'+item.href" :disabled="item.isDisabled">
                <v-card-title>
                  <v-icon color="primary">
                    mdi-information-variant-circle
                  </v-icon>
                  <span class="ms-1 text-body-2 font-weight-bold" v-text="item.text" />
                </v-card-title>
              </v-card>
            </div>
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
        { text: 'معرفی سبدگردانی', href: '/introduction' },
        { text: 'فرآیند سرمایه‌گذاری در سبد', href: '/process-of-investment-in-market-making' },
        { text: 'رویکرد تحلیل اوراق بهادار و منابع اطلاعاتی', href: '/analytical-studies-of-securities-and-information-sources' },
        { text: 'کارمزد سبدگردانی', href: '/portfolio-management-fee' },
<<<<<<< HEAD
        { text: 'قرارداد یا فرم سبدگردانی', href: '#', isDisabled: true },
        { text: 'شاخص‌های عملکردی', href: '#', isDisabled: true },
=======
        { text: 'قرارداد یا فرم سبدگردانی', href: '/no-content' },
        { text: 'شاخص‌های عملکردی', href: '/no-content' },
>>>>>>> d24d5622e382d8c933a60f128483438f0fc5fd7d
        { text: 'سنجش ریسک‌پذیری', href: '/risk-test' },
        { text: 'پرسش‌های متداول سبدگردانی', href: '/faq' }
      ]
    }
  },
  created () {
    this.$vuetify.theme.dark = false
  }
}
</script>
