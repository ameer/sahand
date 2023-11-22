<template>
  <v-container class="py-20">
    <h3 class="text-h5 text-md-h4 primary--text text-center font-weight-bold mb-4">
      مزیت‌های سبدگردانی سهند
    </h3>
    <div class="in-viewport mx-auto mt-16" style="max-width:1600px" :class="{animated: isIntersecting}">
      <v-row v-intersect="onIntersect" justify="center">
        <v-col
          v-for="(item,i) in items"
          :key="'benefints-icon-'+i"
          cols="12"
          md="3"
          class="rotate-col text-center mb-6 item"
          :class="item.delay"
        >
          <div class="rotate-border">
            <img

              :src="'img/'+item.img"
              height="164px"
            >
          </div>

          <div class="justify-center text-center mt-4">
            <span class="icon-title high-em">
              {{ item.title }}
            </span>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      isIntersecting: false,
      items: [
        {
          title: 'رصد دقیق سرمایه',
          img: 'icons-01.svg',
          delay: 'delay-100'
        },
        {
          title: 'ایجاد نقدینگی بیشتر',
          img: 'icons-02.svg',
          delay: 'delay-200'
        },
        {
          title: 'رعایت دقیق دستورالعمل',
          img: 'icons-03.svg',
          delay: 'delay-300'
        },
        {
          title: 'پشتیبانی مستمر',
          img: 'icons-04.svg',
          delay: 'delay-400'
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
<style>

</style>
