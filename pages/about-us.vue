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
            سبدگردان سهند در راستای ترویج سرمایه‌گذاری غیر مستقیم در بورس تهران، سعی دارد
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
      <v-col v-for="(manager,i) in managers" :key="`mb-${i}`" cols="12" class="text-center">
        <manager-card v-bind="manager" />
      </v-col>
      <v-col cols="12" class="my-4" />
      <v-col cols="12" class="text-center">
        <h3 class="text-h5 font-weight-bold pb-6 primary--text">
          سرمایه انسانی
        </h3>
        <v-divider />
      </v-col>
    </v-row>
    <v-row align="stretch">
      <v-col v-for="(member,i) in members" :key="`hr-${i}`" cols="12" md="4" class="text-center">
        <member-card v-bind="member" class="fill-height" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      managers: [
        {
          imgSrc: '/img/about-us/member-1.jpg',
          name: 'فرهاد ذات علی فرد',
          title: 'مدیر عامل و عضو موظف هیئت مدیره',
          jobHistory: [
            'مدیر سرمایه‌گذاری شرکت صنایع پتروشیمی خلیج فارس',
            'مدیر سرمایه‌گذاری شرکت سرمایه‌گذاری تجاری شستان',
            'رئیس هیئت مدیره سرمایه‌گذاری مدبران اقتصاد',
            'عضو هیئت مدیره شرکت پتروشیمی گلستان'
          ]
        },
        {
          imgSrc: '/img/about-us/member-2.jpg',
          name: 'سیامک بوربور',
          title: 'رئیس هیئت مدیره',
          jobHistory: [
            'مدیر سرمایه‌گذاری توسعه کسب و کار گروه مالی نماد غدیر',
            'عضو هیئت مدیره سرمایه‌گذاری آذر',
            'مدیر سرمایه‌گذاری سبدگردان سورین',
            'مدیر پورتفو و امور شرکت‌های هلدینگ توسعه صنایع و معادن غدیر'
          ]
        },
        {
          imgSrc: '/img/about-us/member-3.jpg',
          name: 'علی جهدی',
          title: 'نایب رئیس هیئت مدیره',
          jobHistory: [
            'مدیر سرمایه‌گذاری شرکت سرمایه‌گذار غدیر',
            'هیئت مدیره سرمایه‌گذاری هامون سپاهان',
            'عضو هیئت مدیره گسترش صنعت نوین ایرانیان',
            'عضو هیئت مدیره حمل ونقل ریلی پارسیان',
            'عضو هیئت مدیره شرکت غدیر انرژی لامرد'
          ]
        }
      ],
      members: [
        {
          name: 'کامیار کرمانی',
          title: 'مدیر سبد',
          degree: 'کارشناسی ارشد مدیریت مالی',
          certs: [
            'اصول بازار سرمایه',
            'معامله‌گری بازار سرمایه',
            'تحلیل‌گری بازار سرمایه',
            'مدیریت سبد'
          ],
          jobHistory: [
            'مدیر سرمایه‌گذاری شرکت سرمایه‌گذاری آذر',
            'مدیر سرمایه‌گذاری شرکت سرمایه‌گذاری تدبیرگران فارس و خوزستان',
            'مدیر سبد شرکت سبدگردان هدف'
          ]
        },
        {
          name: 'میرهاشم قاضی',
          title: 'مدیر مالی',
          degree: 'کارشناسی حسابداری',
          certs: false,
          jobHistory: [
            'مدیرمالی اداری سرمایه‌گذاری اعتضاد غدیر',
            'مدیر مالی اداری مشاور سرمایه‌گذاری هدف حافظ',
            'مدیر مالی شرکت سرمایه‌گذاری ایران فرانسه'
          ]
        },
        {
          name: 'مرضیه شبانی',
          title: 'تحلیل‌گر',
          degree: 'کارشناسی ارشد مدیریت کسب و کار',
          certs: [
            'اصول بازار سرمایه',
            'تحلیلگری بازار سرمایه'
          ],
          jobHistory: [
            'کارشناس تحلیل شرکت سرمایه گذاری هامون صبا'
          ]
        }
      ]
    }
  }
}
</script>
<style>

</style>
