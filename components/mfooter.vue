<template>
  <v-footer padless color="#f5f5f5" light>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#166178"
      preserveAspectRatio="none"
      viewBox="0 0 1680 40"
      class="position-absolute width-full z-2"
      style="bottom: -1px; position: relative; left: 0; right: 0; width: 100%"
    >
      <path d="M0 40h1680V30S1340 0 840 0 0 30 0 30z" fill="#166178" />
    </svg>
    <v-container fluid class="py-12" style="background: #166178">
      <v-row style="max-width: 425px" class="mx-auto">
        <v-col cols="6" class="d-flex">
          <v-img src="/img/sahand-avatar.jpg" eager />
        </v-col>
        <v-divider vertical dark />
        <v-col cols="6" class="white--text">
          <div class="d-flex flex-column justify-center pr-4 h-100">
            <h3 class="text-3xl mb-2 high-em">
              سهـــند
            </h3>
            <p class="text-l mt-2 high-em">
              راهی نوین در سبدگردانی
            </p>
          </div>
        </v-col>
      </v-row>
      <v-divider dark class="mt-10 mb-16" />
      <v-row style="max-width: 960px" class="mx-auto" align="center">
        <v-col cols="12" sm="6">
          <h3 class="text-h5 white--text mb-4">
            درباره سهند
          </h3>
          <p
            class="white--text high-em text-justify text-sm doubled-line-height"
          >
            "شرکت سبدگردان سهند" با استفاده از ساختار هوشمند خود بهترین راه
            سرمایه‌گذاری در بازار سرمایه ایران را به شما نشان می‌دهد. ما در
            سهند، بر روی تکنولوژی ها و محصولات نوین بر پایه هوش مصنوعی و علوم
            داده کار می‌کنیم. تمرکز اصلی ما حل مشکلات و هوشمند‌سـازی سبدگردانی
            در بـازار سرمایـه است. ما توانسته‌ایم با جمع‌آوری داده‌های متنوع و
            اطلاعات مرتبط طی سالیان گذشته و سپس پایش و بسط آنها به حوزه‌
            سرمایه‌گذاری بهترین متدها جهت حفظ ارزش و افزایش سرمایه را به خانواده
            بزرگ سهند ارائه دهیم. ما بر آنیم تا با استفاده از تیم‌های تخصصی و
            کارشناسان باتجربه و باهوش در کنار کار تیمی منسجم، راهکاری مطمئن برای
            سرمایه‌گذاری در اختیار شما قرار دهیم.
          </p>
        </v-col>
        <v-col cols="12" sm="6" class="pt-md-16">
          <v-row align="center" justify="center">
            <v-col cols="6" class="text-center">
              <v-img
                src="/img/footer/bourse.svg"
                contain
                width="112px"
                class="px-4 d-inline-block"
                height="112px"
                eager
              />
            </v-col>
            <v-col cols="6" class="text-center">
              <v-img
                src="/img/footer/farabourse.svg"
                contain
                width="112px"
                class="px-4 d-inline-block"
                height="112px"
                eager
              />
            </v-col>
            <v-col cols="6" class="text-center">
              <v-img
                src="/img/footer/ito.png"
                contain
                width="112px"
                class="px-4 d-inline-block"
                height="112px"
                eager
              />
            </v-col>
            <v-col cols="6" class="text-center">
              <v-img
                src="/img/footer/makna.png"
                contain
                width="112px"
                class="px-4 d-inline-block"
                height="112px"
                eager
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-divider dark class="mt-16 mb-10" />
      <v-row class="mx-auto text-center" no-gutters>
        <v-col cols="12" md="6" offset-md="3">
          <p class="mb-4 white--text high-em">
            تهران، میدان آرژانتین، خیابان خالد اسلامبولی، کوچه سیزدهم، پلاک ۱۸
          </p>
        </v-col>
        <v-col cols="12" md="6" offset-md="3">
          <div class="mb-4">
            <a
              class="text-decoration-none white--text letter-spacing-low high-em"
              href="tel:02112345678"
            >۰۲۱-۱۲۳۴۵۶۷۸</a>
            <span class="white--text medium-em">|</span>
            <a
              class="text-decoration-none white--text letter-spacing-low high-em"
              href="mailto:info@sahand.ir"
            >info@sahand.ir</a>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
<style></style>
