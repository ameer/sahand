<template>
  <v-card class="py-8 px-16" color="#fff" elevation="0">
    <v-card-title class="text-body-2 font-weight-bold text--primary">
      آزمون سنجش ریسک‌پذیری
    </v-card-title>
    <!-- <v-card-subtitle>
      <span class="font-weight-bold">
        پرسش {{ humanReadableIndex }} از {{ numberOfQuestions }}
      </span>
    </v-card-subtitle> -->
    <v-divider />
    <v-card-text v-if="showResult" class="text-body-1 text--primary text-center">
      <div>بر اساس پاسخ‌ها، شما یک شخصیت</div>
      <h3 class="text-h4 font-weight-bold my-4 primary--text" v-text="resultType" />
      <div>هستید.</div>
    </v-card-text>
    <v-card-text v-else>
      <v-container>
        <v-row no-gutters style="align-items: baseline !important;">
          <v-col cols="auto" class="pe-2">
            <span
              class="text-h5 font-weight-bold"
              v-text="humanReadableIndex + '.'"
            />
          </v-col>
          <v-col cols="11">
            <h3
              class="text-h5 font-weight-bold primary--text text--darken-1"
              style="line-height: 3rem;"
              v-text="currentQuestion?.question"
            />
          </v-col>
        </v-row>
      </v-container>
      <v-radio-group :value="userAnswers[currentIndex]" hide-details @change="setUserAnswer">
        <v-container>
          <v-row>
            <!-- in fact the value of radios should be the `point` but because there might be answers with same points which leads to multiple active radios in the same time, then we use `answer` objects.  -->
            <v-radio
              v-for="(answer, i) in currentQuestion.answers"
              :key="`arb-${currentIndex}-${i}`"
              class="answer-radio col col-12 pa-6 mb-3 mb-md-6"
              :value="answer"
              color="gold"
            >
              <template #label>
                <div class="text-h6 text-right" v-text="answer.text" />
              </template>
            </v-radio>
          </v-row>
        </v-container>
      </v-radio-group>
    </v-card-text>
    <v-divider />
    <v-card-actions class="py-6 px-4">
      <template v-if="!showResult">
        <transition name="slide-x-reverse-transition">
          <v-btn
            v-if="prevButton.show"
            class="elevation-0 pl-5 rounded-lg"
            color="primary darken-1"
            text
            large
            @click="prevQuestion"
          >
            <v-icon left>
              mdi-chevron-right
            </v-icon>
            <span class="text-body-1" v-text="prevButton.text" />
          </v-btn>
        </transition>
        <v-spacer />
        <v-btn
          v-if="hasEnded"
          class="elevation-0 pr-5 rounded-lg"
          color="primary darken-1"
          outlined
          large
          @click="setEnd"
        >
          <span class="text-body-1" v-text="'پایان و مشاهده نتیجه'" />
          <v-icon right>
            mdi-chevron-left
          </v-icon>
        </v-btn>
        <v-btn
          v-else
          class="elevation-0 pr-5 rounded-lg"
          color="primary darken-1"
          outlined
          large
          :disabled="!nextButton.disabled"
          @click="nextQuestion"
        >
          <span class="text-body-1" v-text="nextButton.text" />
          <v-icon right>
            mdi-chevron-left
          </v-icon>
        </v-btn>
      </template>
      <template v-else>
        <v-spacer />
        <v-btn
          class="elevation-0 pr-5 rounded-lg"
          color="primary darken-1"
          outlined
          large
          @click="restart"
        >
          <span class="text-body-1" v-text="'شروع مجدد آزمون'" />
          <v-icon right>
            mdi-refresh
          </v-icon>
        </v-btn>
        <v-spacer />
      </template>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  layout: 'withSidebar',
  data () {
    return {
      currentIndex: 0,
      pointBase: 42,
      questions: [
        {
          question: 'چند سال دارید؟',
          answers: [
            {
              text: '35 سال یا کمتر',
              point: 6
            },
            {
              text: 'بین 36 تا 54',
              point: 3
            },
            {
              text: '55 سال یا بیشتر',
              point: 0
            }
          ]
        },
        {
          question:
            'میزان آشنایی شما با امور سرمایه گذاری در اوراق بهادار چقدر است؟ ',
          answers: [
            {
              text: 'به هیچ وجه با سرمایه گذاری در اوراق بهادار آشنایی ندارم. ',
              point: 0
            },
            {
              text: 'تا حدودی با سرمایه گذاری در اوراق بهادار آشنا هستم ولی درک کاملی از آن ندارم.',
              point: 2
            },
            {
              text: 'با سرمایه گذاری در اور اق بهادار آشنا هستم و عوامل مختلفی که بر بازده سرمایه گذاری مؤثرند را درک می کنم اما تجربه کافی برای انجام این کار ندارم.',
              point: 4
            },
            {
              text: 'آشنایی زیادی با سرمایه گذاری در اوراق بهادار دارم. در اتخاذ تصمیمات سرمایه گذاری خود، از تحقیقات انجام شده و سایر اطلاعات مرتبط استفاده میکنم و عوامل مختلفی که بر بازده سرمایه گذار ی مؤثرند را درک میکنم.',
              point: 6
            }
          ]
        },
        {
          question: 'منبع عمده کسب اطلاعات اقتصادی شما کدام است؟',
          answers: [
            {
              text: 'رادیو و تلویزیون ',
              point: 0
            },
            {
              text: 'روزنامه های اقتصادی',
              point: 2
            },
            {
              text: 'سایتهای تخصصی بازار سرمایه، مجلات تخصصی و روزنامه های اقتصادی',
              point: 4
            },
            {
              text: 'شبکه های اجتماعی',
              point: 6
            }
          ]
        },
        {
          question:
            'آیا تاکنون تجربه ناموفق سرمایه‌گذاری داشته‌اید؟ آیا این تجربه در برنامه آینده شما برای سرمایه گذاری تاثیر دارد؟',
          answers: [
            {
              text: 'بله-بله',
              point: 0
            },
            {
              text: 'بله-خیر',
              point: 6
            },
            {
              text: 'خیر',
              point: 0
            }
          ]
        },
        {
          question:
            'اولین چیزی که از واژه ریسک در ذهن شما متبادر می‌شود، چیست؟',
          answers: [
            {
              text: 'زیان',
              point: 0
            },
            {
              text: 'عدم اطمینان',
              point: 2
            },
            {
              text: 'فرصت',
              point: 4
            },
            {
              text: 'هیجان',
              point: 6
            }
          ]
        },
        {
          question:
            'آیا تاکنون برای انجام سرمایه‌گذاری، وجهی از دیگران قرض گرفته اید؟',
          answers: [
            {
              text: 'بله',
              point: 6
            },
            {
              text: 'اگر موقعیت خوبی باشد، قرض خواهم گرفت.',
              point: 3
            },
            {
              text: 'خیر',
              point: 0
            }
          ]
        },
        {
          question:
            'حفظ اصل سرمایه برای من بسیار مهمتر از کسب سود قابل توجه است.',
          answers: [
            {
              text: 'به شدت موافقم.',
              point: 0
            },
            {
              text: 'موافقم.',
              point: 2
            },
            {
              text: 'مخالفم.',
              point: 4
            },
            {
              text: 'به شدت مخالفم.',
              point: 6
            }
          ]
        },
        {
          question: 'برای سرمایه گذاری کدام گزینه را ترجیح می دهید؟',
          answers: [
            {
              text: 'اصل پول و حداقل سود بانکی تضمین شده با وجود سود کم',
              point: 0
            },
            {
              text: 'اصل پول تضمین شده با وجود سود متوسط که شاید کمتر از سود بانکی باشد.',
              point: 2
            },
            {
              text: 'عدم تضمین اصل پول با وجود احتمال سود بالا',
              point: 6
            }
          ]
        },
        {
          question:
            'اگر مایل به سرمایه گذاری در سهام شرکتها هستید، کدام یک از موارد زیر را ترجیح میدهید؟ ',
          answers: [
            {
              text: 'سهام شرکت های شناخته شده و بزرگ ',
              point: 2
            },
            {
              text: 'سهام شرکتهای تازه وارد به بورس که زیاد شناخته شده نیستند ولی ممکن است در آینده سودآوری بالایی داشته باشند.',
              point: 6
            },
            {
              text: 'ترکیبی از هر دو',
              point: 4
            }
          ]
        },
        {
          question:
            'اگر ناچار باشید بین دو شغل، یکی با امنیت شغلی بالا و حقوق معقول و دیگری با امنیت کمتر ولی حقوق بالا، یکی را انتخاب نمایید، کدامیک را برمی گزینید؟ ',
          answers: [
            {
              text: 'یقیناً شغل با حقوق بالاتر و امنیت کمتر ',
              point: 6
            },
            {
              text: 'احتمالا شغل با حقوق بالاتر و امنیت کمتر',
              point: 4
            },
            {
              text: 'باید سایر جنبه ها را در نظر بگیرم',
              point: 2
            },
            {
              text: 'یقیناً شغل دارای امنیت بیشتر و حقوق کمتر',
              point: 0
            }
          ]
        },
        {
          question: 'ضرر نکردن در بازار برایم مهمتر از کسب سود است.',
          answers: [
            {
              text: 'کاملا موافقم',
              point: 0
            },
            {
              text: 'نظری ندارم',
              point: 3
            },
            {
              text: 'کاملا مخالفم',
              point: 6
            }
          ]
        },
        {
          question:
            'طبق پیش بینی که انجام دادید و تحلیل هایی که داشته اید، به این نتیجه رسیده اید که سکه برای سوددهی گزینه فوق العاده ای است؛ ده سکه خریداری می کنید ولی چند روز بعد شایعه ای پخش می شود که روزهای آینده قیمت سکه در حال کاهش است. شما چه کاری انجام می دهید؟',
          answers: [
            {
              text: 'بدون اعمال تغییر در برنامه، ریسک احتمالی را می پذیرم؛ چرا که دید بلندمدت نسبت به این بازار دارم.',
              point: 6
            },
            {
              text: 'یک سال قبل از اینکه تصمیم به فروش بگیرم، شرایط را بررسی می کنم و به ضررهای کوتاه مدت اهمیتی نمی دهم.',
              point: 4
            },
            {
              text: 'هر چند ممکن است نگران شوم؛ ولی تصمیم فوری نمی گیرم. اگر نگرانی من ادامه پیدا کرد و این شرایط چند هفته طول کشید، سکه ها را می فروشم.',
              point: 2
            },
            {
              text: 'سکه ها را می فروشم و پولی که به دست آمده است را در بازار دیگری سرمایه گذاری می کنم.',
              point: 0
            }
          ]
        },
        {
          question:
            'سرمایه‌گذاری‌هایی که از پتانسیل رشد بالاتری برخوردارند، معمولا پرریسک هستند. آیا مشکلی با افت ارزش سرمایه خود در اثر نوسانات بازار ندارید؟',
          answers: [
            {
              text: ' برای کسب سود حداکثری، حاضرم زیان احتمالی سرمایه‌گذاری را نیز بپذیرم.',
              point: 6
            },
            {
              text: 'همانقدر که به سود اهمیت می‌دهم، احتمال زیان را نیز در تصمیم‌گیری در نظر می‌گیرم',
              point: 3
            },
            {
              text: 'به هیچ عنوان تحمل زیان ندارم.',
              point: 0
            }
          ]
        },
        {
          question:
            'اگر امکان سرمایه گذاری مبلغ 100 میلیون تومان داشته باشید، کدام فرصت سرمایه گذاری را ترجیح میدهید؟',
          answers: [
            {
              text: 'سرمایه گذاری در پروژه ای که قطعاً 20 میلیون تومان سود به همراه خواهد داشت.',
              point: 0
            },
            {
              text: 'سرمایه گذاری در پروژه ای که احتمال دارد 40 میلیون تومان سود کسب کنید یا امکان دارد هیچ سودی به دست نیاورید.',
              point: 2
            },
            {
              text: 'سرمایه گذاری در پروژه ای که احتمال دارد 80 میلیون تومان سود کسب کنید یا امکان دارد 40 میلیون تومان ضرر کنید.',
              point: 4
            },
            {
              text: 'سرمایه گذاری در پروژه ای که احتمال دارد 120 میلیون تومان سود کسب کنید یا امکان دارد 80 میلیون تومان ضرر کنید',
              point: 6
            }
          ]
        },
        {
          question:
            'به نظرتان اگر از دوستانتان درباره شخصیت شما سوال شود، توصیف آنها در مورد شما به کدام مورد زیر نزدیکتر است:',
          answers: [
            {
              text: 'از نظر آنها من شخصی خوشبین هستم و خیلی خود را درگیر جزئیات کارها نمیکنم.',
              point: 6
            },
            {
              text: 'از نظر آنها من تاحدودی خوشبین هستم و بعد از فکر و برنامه ریزی لازم اقدام به انجام هرکاری میکنم.',
              point: 4
            },
            {
              text: 'از نظر آنها من شخصی محاسبه گر و محتاط هستم.',
              point: 2
            },
            {
              text: 'از نظر آنها من شخصی شدیداً محتاط و محاسبه گر هستم و برای انجام هر کاری تمام جوانب آن را میسنجم.',
              point: 0
            }
          ]
        },
        {
          question:
            'اگر یک ثروت قابل توجه به طور غیرمنتظره، مثلا یک ارث قابل توجه به دست آورید، با آن چه خواهید کرد؟',
          answers: [
            {
              text: 'درصورتی که فرصت مناسب ایجاد شود، شغل فعلی را رها کرده و با پول موردنظر کسب و کار جدیدی را آغاز خواهم نمود. ',
              point: 6
            },
            {
              text: 'سعی می کنم ثروت به دست آمده را در دارائی های مختلف با ریسک متفاوت، سرمایه گذاری کنم.',
              point: 4
            },
            {
              text: 'قسمتی از آن را در بانک سرمایه گذاری کرده و در مورد سرمایه گذاری باقی مانده آن، با افراد آگاه مشورت خواهم کرد. ',
              point: 2
            },
            {
              text: 'اصولا آن را در حساب سپرده سرمایه گذاری می کنم.',
              point: 0
            }
          ]
        },
        {
          question:
            'اگر پس اندازی داشته باشید که آن را طی چند سال به دست آورده باشید، چگونه آن را سرمایه گذاری میکنید؟',
          answers: [
            {
              text: 'در دارائیهای کم ریسک مانند سپرده بانکی یا اوراق بهادار با درآمد ثابت',
              point: 0
            },
            {
              text: 'در دارائیهای با ریسک متوسط مانند واحدهای صندوقهای سرمایه گذاری مشترک',
              point: 2
            },
            {
              text: 'در دارائیهای با ریسک زیاد مانند سهام شرکتها',
              point: 4
            },
            {
              text: 'در دارائیهای با ریسک خیلی زیاد مانند قراردادهای آتی و اوراق اختیار معامله',
              point: 6
            }
          ]
        },
        {
          question:
            'تورم تا حد زیادی میتواند نرخ واقعی بازده سرمایه گذاری را در طول زمان کاهش دهد. کدام یک از گزینه های زیر به بهترین وجه ریسک سرمایه گذاری شما را با توجه به تورم توضیح میدهد؟ من مایل به پذیرش...',
          answers: [
            {
              text: 'حداقل پتانسیل زیان هستم، اگرچه سرمایه گذاری ام ممکن است همگام با تورم بازدهی داشته باشد.',
              point: 0
            },
            {
              text: 'پتانسیل زیان در حد متوسط و با نوسانات کمتر هستم اما همواره تلاش میکنم تا بازدهی بالاتر از تورم داشته باشم.',
              point: 3
            },
            {
              text: 'پتانسیل زیان در حد بالا و با نوسانات بسیار زیاد هستم و تلاش میکنم تا بازدهی بسیار بیشتر از تورم داشته باشم',
              point: 6
            }
          ]
        },
        {
          question:
            'اگر بخواهید در یک مسابقه اسب سواری، بر روی اسب دوست داشتنی خود شرط بندی کنید، باید مبلغ پنجاه میلیون تومان پرداخت کنید. در صورتیکه حدس شما درست باشد و شرط بندی را ببرید، به شما یک میلیارد تومان جایزه می دهند. آیا در شرط بندی شرکت می کنید؟',
          answers: [
            {
              text: 'حتی زمانیکه احتمال بردم کمتر از 10% باشد نیز در شرط بندی شرکت می کنم.',
              point: 6
            },
            {
              text: 'فقط وقتی شرکت می کنم که احتمال بردم حداقل بین 10% تا 30% باشد.',
              point: 5
            },
            {
              text: 'فقط وقتی شرکت می کنم که احتمال بردم حداقل بین 30% تا 50% باشد.',
              point: 4
            },
            {
              text: 'فقط وقتی شرکت می کنم که احتمال بردم حداقل بین 50% تا 70% باشد.',
              point: 3
            },
            {
              text: 'فقط وقتی شرکت می کنم که احتمال بردم حداقل بین70% تا 90% باشد.',
              point: 2
            },
            {
              text: 'فقط وقتی شرکت می کنم که احتمال بردم بالای 90% باشد.',
              point: 1
            }
          ]
        },
        {
          question:
            'درصورتیکه شرکتهای بیمه خدمات بیمه مناسب ارائه کنند، در کدام یک از موارد زیر اقدام به تهیه بیمه نامه میکنید؟',
          answers: [
            {
              text: 'اصولا اعتقادی به بیمه ندارم و تا زمانی که از نظر قانونی مجبور به تهیه بیمه نامه نشوم، بیمه نامه تهیه نمیکنم.',
              point: 6
            },
            {
              text: 'تنها بیمه نامه های مربوط به خودرو را تهیه میکنم',
              point: 4
            },
            {
              text: ' معمولا برای کل دارائیهای با اهمیت مانند ساختمان و خودرو بیمه نامه های لازم را تهیه میکنم.',
              point: 2
            },
            {
              text: 'علاوه بر دارائیهای با ارزش بالا، برای سایر دارائیها از جمله کامپیوتر شخصی، تلفن همراه، دوربین و...نیز گارانتی و بیمه نامه تهیه میکنم.',
              point: 0
            }
          ]
        },
        {
          question: 'برداشت شما از سرمایه گذاری کوتاه مدت چه مدت زمانی است؟',
          answers: [
            {
              text: 'یک ماه تا شش ماه',
              point: 0
            },
            {
              text: 'شش ماه تا یکسال',
              point: 3
            },
            {
              text: 'یکسال تا دوسال',
              point: 6
            }
          ]
        },
        {
          question: 'برداشت شما از سرمایه گذاری میان مدت چه مدت زمانی است؟',
          answers: [
            {
              text: 'یکسال',
              point: 0
            },
            {
              text: 'بین یکسال تا دوسال',
              point: 3
            },
            {
              text: 'بین یکسال تا سه سال',
              point: 6
            }
          ]
        },
        {
          question: 'برداشت شما از سرمایه گذاری بلند مدت چه مدت زمانی است؟',
          answers: [
            {
              text: 'تا سه سال',
              point: 4
            },
            {
              text: 'تا 5سال',
              point: 5
            },
            {
              text: 'تا 10 سال',
              point: 6
            }
          ]
        },
        {
          question:
            'اگر ارزش سرمایه گذاری شما در یک دوره کوتاه مدت (مثلا سه ماه) 40 درصد کاهش یابد، چه عکس العملی خواهید داشت؟ (اگر در گذشته چنین چیزی را تجربه کرده اید، همان واکنشی را که انجام دادید انتخاب نمایید.)',
          answers: [
            {
              text: 'تمام سرمایه گذاری خود را می فروشید و تمایلی به پذیرش ریسک بیشتر ندارید. ',
              point: 0
            },
            {
              text: 'قسمتی از سرمایه گذاری خود را فروخته و مبلغ آن را در دارایی های کم ریسک تر سرمایه گذاری می کنید. ',
              point: 2
            },
            {
              text: 'به امید بهبود شرایط، سرمایه گذاری خود را نمی فروشید. ',
              point: 4
            },
            {
              text: 'مبلغ دیگری به سرمایه گذاری خود اضافه کرده و سعی میکنید بهای تمام شده خود را کاهش دهید.',
              point: 6
            }
          ]
        },
        {
          question:
            'فرض کنید مدت 6 ماه است سرمایه گذاری انجام داده اید و پس از گذشت این مدت سرمایه گذاری شما با زیان مواجه شده است،واکنش شما چیست؟',
          answers: [
            {
              text: 'درک میکنم که هر سرمایه گذاری ممکن است با زیان مواجه شود.',
              point: 6
            },
            {
              text: 'زیان در این بازه زمانی کوتاه مدت نگران کننده نیست.',
              point: 4
            },
            {
              text: 'اگر ضرری بیش از %10 رخ داده باشد، نگران خواهم شد.',
              point: 2
            },
            {
              text: 'هر ضرری که رخ دهد مرا نگران میکند.',
              point: 0
            }
          ]
        },
        {
          question:
            ' اگر ارزش سرمایه گذاری شما در یک دوره کوتاه مدت (مثلا دو هفته) 6 درصد کاهش یابد، چه عکس العملی خواهید داشت؟ (اگر در گذشته چنین چیزی را تجربه کرده اید، همان واکنشی ر ا که انجام دادید انتخاب نمایید.)',
          answers: [
            {
              text: 'تمام سرمایه گذاری خود را می فروشید. ',
              point: 0
            },
            {
              text: 'قسمتی از سرمایه گذاری خود را می فروشید. ',
              point: 2
            },
            {
              text: 'هیچ قسمتی از سرمایه گذاری خود را نمی فروشید. ',
              point: 4
            },
            {
              text: 'وجوه بیشتری را به سرمایه گذاری اختصاص می دهید و میتوانید زیان های کوتاه مدت را به انتظار رشد افزایش سرمایه گذاری خود در آینده، بپذیرید.',
              point: 6
            }
          ]
        },
        {
          question: 'معمولا وضعیت پس انداز شما به چه صورت است؟',
          answers: [
            {
              text: 'درآمدهای معمول من به میزانی نبوده است که بتوانم پس اندازی داشته باشم.',
              point: 0
            },
            {
              text: 'معمولا بیش از نیمی از پس انداز را به صورت نقد و مابقی دیگر را به صورت سپرده بانکی یا اوراق مشارکت نگهداری میکنم.',
              point: 2
            },
            {
              text: 'معمولا کمتر از نصف پس اندازم را به صورت نقد و مابقی را به صورت سپرده بانکی یا اوارق مشارکت نگهداری میکنم.',
              point: 4
            },
            {
              text: 'اصولا پس انداز خود را به صورت نقد یا در بانک نگهداری نمی کنم و در اولین فرصت آن را در سایر دارایی های مالی یا دارایی های فیزیکی مختلف سرمایه گذاری می کنم.',
              point: 6
            }
          ]
        },
        {
          question:
            'چند درصد از پس انداز خود را برای سرمایه گذاری کنار می گذارید؟ (دقت داشته باشید که پس انداز مازاد پول است و منزل و ماشین شامل آن نمی شود.)',
          answers: [
            {
              text: 'کمتر از 25%',
              point: 1
            },
            {
              text: 'بین 25% تا 50%',
              point: 2
            },
            {
              text: 'بین 50% تا 75%',
              point: 4
            },
            {
              text: 'بیشتر از 75%',
              point: 6
            }
          ]
        },
        {
          question:
            'فکر میکنید تا چه حد برای تأمین هزینه های معمول زندگیتان به درآمد این سرمایه گذاری وابسته باشید؟ ',
          answers: [
            {
              text: 'درآمد اصلی من از فعالیت دیگری است که اصولا کفاف هزینه های عادی زندگی مرا می دهد.',
              point: 6
            },
            {
              text: 'کمی به درآمد این سرمایه گذاری وابسته هستم، به عبارتی درآمد این سرمایه گذاری میتواند کمک خرج من باشد.',
              point: 4
            },
            {
              text: 'تقریبا به درآمد این سرمایه گذاری برای تأمین هزینه های معمول زندگی ام وابسته ام و به عنوان یک درآمد دوم روی آن حساب می کنم. ',
              point: 2
            },
            {
              text: 'به شدت به درآمد این سرمایه گذاری وابسته ام و برای تامین هزینه های معمول زندگی ام به این سرمایه گذاری متکی هستم',
              point: 0
            }
          ]
        },
        {
          question:
            'پس از انجام یک سرمایه گذاری سودآور، در سال آینده، با توجه به سود ناشی از این سرمایه گذاری، چه گزینه ای ممکن است شامل حالتان شود؟',
          answers: [
            {
              text: 'خیلی کم احتمال دارد به این سود نیاز پیدا کنم.',
              point: 6
            },
            {
              text: 'با احتمال متوسطی به این پول نیاز پیدا می کنم.',
              point: 4
            },
            {
              text: 'با احتمال زیادی به این پول نیاز دارم.',
              point: 2
            },
            {
              text: 'مطمئن هستم که به این پول نیاز خواهم داشت.',
              point: 0
            }
          ]
        }
      ],
      userAnswers: [],
      resultsArray: [
        'ریسک گریز',
        'محافظه کار',
        'تا حدودی ریسک پذیر',
        'ریسک پذیر'
      ],
      showResult: false
    }
  },
  computed: {
    numberOfQuestions () {
      return this.questions.length
    },
    humanReadableIndex () {
      return this.currentIndex + 1
    },
    currentQuestion () {
      try {
        return this.questions[this.currentIndex]
      } catch (error) {
        return {}
      }
    },
    prevButton () {
      const button = {
        text: 'پرسش قبل',
        show: this.currentIndex !== 0 && this.currentIndex < this.numberOfQuestions
      }
      return button
    },
    nextButton () {
      const button = {
        text: 'پرسش بعد',
        disabled: this.userAnswers[this.currentIndex] !== undefined
      }
      return button
    },
    userScore () {
      const score = this.userAnswers.reduce((prev, currentValue) => {
        return prev + currentValue.point
      }, 0)
      return score
    },
    hasEnded () {
      return this.userAnswers.length === this.numberOfQuestions && this.currentIndex + 1 === this.numberOfQuestions
    },
    resultType () {
      if (this.hasEnded) {
        let userType = Math.floor((this.userScore / this.pointBase) - 0.0000000000001)
        if (userType < 0) { userType = 0 }
        return this.resultsArray[userType]
      } else {
        return 'نامشخص'
      }
    }
  },
  watch: {
    currentIndex (n, o) {
      if (n) {
        this.$vuetify.goTo('header')
      }
    }
  },
  methods: {
    prevQuestion () {
      this.currentIndex--
    },
    nextQuestion () {
      this.currentIndex++
    },
    setEnd () {
      if (this.hasEnded) {
        this.showResult = true
      }
    },
    setUserAnswer (value) {
      if (value !== null && value !== undefined) {
        this.userAnswers.splice(this.currentIndex, 1, value)
      }
    },
    restart () {
      const resp = confirm('آیا از شروع مجدد آزمون اطمینان دارید؟')
      if (resp) {
        window.location.reload()
      }
    }
  }
}
</script>
<style>

</style>
