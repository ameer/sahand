<template>
  <v-app-bar app class="px-4" height="70px">
    <img src="/img/sahand-logo.svg" alt="sahand logotype" contain width="128px">
    <div class="ms-4 d-flex align-center justify-center">
      <v-btn
        v-for="(item,i) in menuItems"
        :key="`main-nav-item-${i}`"
        text
        :to="item.href"
        class="main-nav__btn"
        height="44"
        :exact="true"
      >
        <span class="text-body-2 ms-2 font-weight-medium" v-text="item.text" />
      </v-btn>
    </div>
    <v-spacer />
    <v-btn outlined color="#4472b8">
      ورود به سامانه
    </v-btn>
  </v-app-bar>
</template>
<script>
export default {
  data () {
    return {
      menuItems: [
        { text: 'سرمایه‌گذاری', href: '#', icon: 'mdi-view-dashboard-outline' },
        { text: 'شعبه‌ها', href: '#', icon: 'mdi-account-group' },
        { text: 'اخبار و تازه‌ها', href: '#', icon: 'mdi-devices' },
        // { text: 'بورس کالا و انرژی', href: '#', icon: 'mdi-devices' },
        { text: 'مسئولیت اجتماعی', href: '#', icon: 'mdi-devices' },
        { text: 'مشاوره', href: '#', icon: 'mdi-devices' },
        { text: 'درباره ما', href: '#', icon: 'mdi-domain' }
      ]
    }
  }
}
</script>
