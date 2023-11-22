<template>
  <section id="why-section" class="relative py-32 mWhite">
    <h3 class="text-h5 text-md-h4 primary--text text-center font-weight-bold mb-4">
      چرا شرکت سبدگردان سهند برای شما مناسب است؟
    </h3>
    <v-container class="in-viewport py-16" :class="{animated: isIntersecting}">
      <v-row v-intersect="onIntersect" class="" no-gutters>
        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
          sm="3"
          class="z-2 px-6 item mb-8"
          :class="'delay-'+i*100"
        >
          <v-card color="rgba(255,255,255,.75)" class="py-8" height="100%">
            <div class="text-center mb-8">
              <v-img :src="`/img/why/icon-${i+1}.svg`" contain height="120px" />
            </div>
            <v-card-text class="text-sm-h6 text-body-2 text-center text--secondary">
              {{ item.title }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
export default {
  data () {
    return {
      isIntersecting: false,
      items: [
        {
          title: 'دقت و سرعت بالا در انجام معاملات'
        },
        {
          title: 'گذر بازار سرمایه ایران به سمت تکنولوژی'
        },
        {
          title: 'سازگاری با استراتژی‌های مدیریت سبدگردانی'
        },
        {
          title: 'داده‌های مستحکم و رعایت دستورالعمل‌های سبدگردانی'
        }
      ]
    }
  },
  methods: {
    onIntersect (entries, observer) {
      // More information about these options
      // is located here: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
      this.isIntersecting = entries[0].isIntersecting
    }
  }
}
</script>
<style scoped>
#why-section {
  position: relative;
}
#why-section::after {
    background: url("~/static/img/why-bg-1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  opacity: .2;
  z-index: 0;
}
</style>
