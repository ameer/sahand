<template>
  <v-container class="my-6 my-sm-12">
    <v-row align="stretch">
      <v-col cols="12" class="text-center">
        <h3 class="text-h5 font-weight-bold py-6 primary--text">
          درباره شرکت سبدگردان سهند
        </h3>
        <v-divider />
      </v-col>
      <v-col cols="12" sm="3">
        <v-img rounded src="/img/about-us/office.webp" class="fill-height" />
      </v-col>
      <v-col cols="12" sm="9" class="fill-height">
        <v-card class="fill-height">
          <v-card-text class="text-body-1" style="line-height: 2.75rem !important;">
            سبدگردان سهند در راستای ترویج سرمایه گذاری غیر مستقیم در بورس تهران، سعی دارد
            با اتکا بر دانش و تجربه‌ی سرمایه‌ی انسانی خود، خدمت مدیریت دارایی را با هدف ثروت
            آفرینی برای مشتریان خود فراهم سازد. به همین منظور شرکت سبدگردان سهند با سرمایه
            500میلیارد ریالی و با شماره ثبت......مورخ.....نزد اداره ثبت شرکتها و موسسات غیر
            تجاری تهران تاسیس و با شماره ثبت ....مورخ.... نزد سازمان بورس و اوراق
            بهادار فعالیت خود را آغاز نمود.
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" class="text-center">
        <h3 class="text-h5 font-weight-bold py-6 primary--text">
          اعضای هیئت مدیره
        </h3>
        <v-divider />
      </v-col>
      <v-col v-for="member in 3" :key="`mb-${member}`" cols="6" md="4" class="text-center">
        <v-avatar size="128">
          <v-img :src="`/img/about-us/member-${member}.jpg`" />
        </v-avatar>
        <h3 class="text-h6 font-weight-bold mt-4">
          هادی نجفیان
        </h3>
        <h4 class="text-body-1 mt-4">
          مدیرعامل
        </h4>
      </v-col>
      <v-col cols="12" class="my-8" />
      <v-col cols="12" class="text-center">
        <h3 class="text-h5 font-weight-bold py-6 primary--text">
          سرمایه انسانی
        </h3>
        <v-divider />
      </v-col>
      <v-col v-for="member in 9" :key="`person-${member}`" cols="6" md="4" class="text-center">
        <v-avatar size="128">
          <v-img :src="`/img/about-us/person-1.jpg`" />
        </v-avatar>
        <h3 class="text-h6 font-weight-bold mt-4">
          هومن ناصری
        </h3>
        <h4 class="text-body-1 mt-4">
          کارمند ارشد
        </h4>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {

}
</script>
<style>

</style>
