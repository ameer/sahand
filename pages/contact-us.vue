<template>
  <v-container class="my-6 my-sm-12">
    <v-row align="stretch">
      <v-col cols="12" class="text-center">
        <h3 class="text-h5 font-weight-bold py-6 primary--text">
          ارتباط با شرکت سبدگردان سهند
        </h3>
        <v-divider />
      </v-col>
      <v-col cols="12" sm="6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d809.675931788431!2d51.41414206964565!3d35.733504286917054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e01002b147111%3A0x29327bac6ba563e8!2z2LTYsdqp2Kog2LPYqNiv2q_Ysdiv2KfZhiDYs9mH2YbYrw!5e0!3m2!1sen!2sus!4v1707917129867!5m2!1sen!2sus"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </v-col>
      <v-col cols="12" sm="6" class="fill-height">
        <v-card class="fill-height">
          <v-card-text class="text-body-1" style="line-height: 2.75rem !important;">
            <span class="text--disabled">تلفن:</span>
            <a href="tel:+9821123456789"><span dir="ltr" class="text--secondary font-weight-bold">021-123456789</span></a>
          </v-card-text>
          <v-card-text class="text-body-1" style="line-height: 2.75rem !important;">
            <span class="text--disabled">ایمیل:</span>
            <a href="mailto:info@sahandam.ir"><span dir="ltr" class="text--secondary font-weight-bold">info@sahandam.ir</span></a>
          </v-card-text>
          <v-card-text class="text-body-1" style="line-height: 2.75rem !important;">
            <span class="text--disabled">نشانی:</span>
            <span class="text--secondary font-weight-bold">تهران، میدان آرژانتین، خیابان خالد اسلامبولی، کوچه سیزدهم، پلاک ۱۸</span>
          </v-card-text>
        </v-card>
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
