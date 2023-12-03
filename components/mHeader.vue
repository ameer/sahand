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
          href: '/market-making',
          hasSubmenu: true,
          subItems: [
            { text: 'معرفی سبدگردانی', href: '/market-making' },
            { text: 'فرآیند سرمایه‌گذاری در سبد', href: '#' },
            { text: 'رویکرد تحلیل اوراق بهادار و منابع اطلاعاتی', href: '#' },
            { text: 'کارمزد سبدگردانی', href: '#' },
            { text: 'قرارداد یا فرم سبدگردانی', href: '#' },
            { text: 'شاخص‌های عملکردی', href: '#' },
            { text: 'سنجش ریسک‌پذیری', href: '#' },
            { text: 'پرسش‌های متداول سبدگردانی', href: '#' }
          ]
        },
        { text: 'صندوق‌ها', href: '#' },
        { text: 'درباره ما', href: '#' },
        { text: 'ارتباط با ما', href: '#' }
      ]
    }
  }
}
</script>
