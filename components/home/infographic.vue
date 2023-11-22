<template>
  <section class="py-16">
    <h3 class="text-h5 text-md-h4 primary--text text-center font-weight-bold mb-8 mb-sm-16">
      اینفوگرافی
    </h3>
    <v-container class="in-viewport" :class="{animated: isIntersecting}">
      <v-row v-intersect="onIntersect">
        <v-col
          v-for="(item, index) in items"
          :key="'info-'+index"
          cols="12"
          sm="6"
          class="px-3 item"
        >
          <v-img
            :src="`img/info/${item.img}.jpg`"
            :lazy-src="`img/info/lazy/${item.img}-min.jpg`"
            contain
            class="rounded-l elevation-2 pointer img-with-sliding-caption"
            @click="showSlide(index)"
          >
            <template #placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                />
              </v-row>
            </template>
            <div v-if="item.description !== ''" class="slide-up-caption">
              <p>{{ item.description }}</p>
            </div>
          </v-img>
        </v-col>
      </v-row>
      <v-dialog
        v-model="dialog"
        fullscreen
        eager
      >
        <v-carousel v-model="model" height="100%" hide-delimiters>
          <v-toolbar
            color="transparent"
            elevation="0"
            absolute
            width="100%"
            tag="div"
            class="ltr"
          >
            <v-btn
              fab
              x-small
              dark
              class="ml-1"
              elevation="2"
              @click="dialog = false"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
          <v-carousel-item
            v-for="(item, index) in items"
            :key="'slide-'+index"
          >
            <v-sheet
              color="#333333"
              height="100%"
              tile
              class="d-flex align-center"
            >
              <v-container>
                <div v-if="item.description !== ''" class="white--text high-em text-center pb-4">
                  <p>{{ item.description }}</p>
                </div>
                <v-row
                  align="center"
                  justify="center"
                >
                  <v-img
                    :src="`img/info/${item.img}.jpg`"
                    :lazy-src="`img/info/lazy/${item.img}-min.jpg`"
                    contain
                    class="rounded-l elevation-2 pointer"
                  >
                    <template #placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="grey lighten-5"
                        />
                      </v-row>
                    </template>
                  </v-img>
                </v-row>
              </v-container>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-dialog>
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
          description: 'اینفوگرافی خالص ارزش دارایی صندوق‌های سبدگردانی با اخرین اپدیت در دسترس در سایت صندوق‌ها برای پایان تیرماه ۱۴۰۰',
          img: '1'
        },
        {
          description: 'اینفوگرافی مربوط به مدیران سبدگردانی با بیشترین تعداد سهم تحت مدیریت:اطلاعات مربوط به تعداد سهام تحت مدیریت از آخرین امیدنامه‌های مندرج در سایت مدیران به تاریخ تیرماه ۱۴۰۰ یا از طریق تماس تلفنی با مدیریت مربوطه استخراج شده است.',
          img: '2'
        },
        {
          description: '',
          img: '3'
        },
        {
          description: 'اینفوگرافی مربوط به مدیران سبدگردانی با بیشترین تعداد صندوق‌ تحت مدیریت طبق آخرین آپدیت امیدنامه صندوق‌ها به تاریخ تیرماه ۱۴۰۰',
          img: '4'
        }
      ],
      dialog: false,
      model: 0,
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange'
      ]
    }
  },
  methods: {
    onIntersect (entries, observer) {
      // More information about these options
      // is located here: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
      this.isIntersecting = entries[0].isIntersecting
    },
    showSlide (index) {
      this.model = index
      this.dialog = true
    }
  }
}
</script>
<style scoped>
.v-skeleton-loader__image {
    height:350px !important;
}
</style>
