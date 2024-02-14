<template>
  <v-app-bar app class="px-4" height="70px">
    <img src="/img/sahand-logo.svg" alt="sahand logotype" contain width="128px">
    <div class="ms-4 d-flex align-center justify-center">
      <template v-for="(item,i) in menuItems">
        <v-menu
          v-if="item.hasSubmenu"
          :key="`submenu-${i}`"
          open-on-hover
          bottom
          offset-y
          transition="slide-y-transition"
        >
          <template #activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              :key="`main-nav-item-${i}`"
              text
              :to="item.href"
              class="main-nav__btn mx-4"
              height="44"
              :exact="true"
              v-on="on"
            >
              <span class="text-body-2 ms-2 font-weight-medium" v-text="item.text" />
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="(subItem, index) in item.subItems"
              :key="index"
              :to="subItem.href"
              :disabled="subItem.isDisabled"
            >
              <v-list-item-title class="text-body-2">
                {{ subItem.text }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn
          v-else
          :key="`main-nav-item-${i}`"
          text
          :to="item.href"
          class="main-nav__btn mx-4"
          height="44"
          :exact="true"
          :disabled="item.isDisabled"
        >
          <span class="text-body-2 ms-2 font-weight-medium" v-text="item.text" />
        </v-btn>
      </template>
    </div>
    <v-spacer />
    <!-- <v-btn outlined color="#4472b8">
      ورود به سامانه
    </v-btn> -->
  </v-app-bar>
</template>
<script>
export default {
  data () {
    return {
      menuItems: [
        { text: 'صفحه اصلی', href: '/' },
        {
          text: 'سبدگردانی',
          href: '#',
          hasSubmenu: true,
          subItems: [
            { text: 'معرفی سبدگردانی', href: '/market-making/introduction' },
            { text: 'فرآیند سرمایه‌گذاری در سبد', href: '/market-making/process-of-investment-in-market-making' },
            { text: 'رویکرد تحلیل اوراق بهادار و منابع اطلاعاتی', href: '/market-making/analytical-studies-of-securities-and-information-sources' },
            { text: 'کارمزد سبدگردانی', href: '/market-making/portfolio-management-fee' },
            { text: 'قرارداد یا فرم سبدگردانی', href: '/#?', isDisabled: true },
            { text: 'شاخص‌های عملکردی', href: '/#?', isDisabled: true },
            { text: 'سنجش ریسک‌پذیری', href: '/market-making/risk-test' },
            { text: 'پرسش‌های متداول سبدگردانی', href: '/market-making/faq' }
          ]
        },
        { text: 'صندوق‌ها', href: '/boxes', isDisabled: true },
        { text: 'درباره ما', href: '/about-us' },
        { text: 'ارتباط با ما', href: '/contact-us' }
      ]
    }
  }
}
</script>
