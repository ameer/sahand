<template>
  <section id="consult-section" class="py-16">
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" offset-sm="3">
          <h4 class="text-h4 primary--text text-center font-weight-bold mb-4">
            مشاوره تخصصی
          </h4>
          <h4 class="text-body-1 text--primary text-center font-weight-light mb-8">
            برای آشنایی بیشتر با کارکردها، مجوزها، قابلیت‌ها و امتیازات سبدگردانی سهند فرم زیر را پر کنید تا مشاوران ما در اسرع وقت با شما تماس بگیرند
          </h4>
        </v-col>
        <v-col cols="12" md="8" offset-md="2">
          <v-form ref="consultForm" v-model="valid" @submit.prevent="submitForm">
            <v-container>
              <v-row class="small-form">
                <v-col
                  cols="12"
                  sm="6"
                  class=""
                >
                  <v-text-field
                    v-model="fullName"
                    :rules="nameRules"
                    label="نام و نام خانوادگی..."
                    required
                    hide-details="auto"
                    filled
                  />
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  class=""
                >
                  <v-text-field
                    v-model="companyName"
                    :rules="nameRules"
                    label="نام شرکت..."
                    required
                    hide-details="auto"
                    filled
                  />
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  class=""
                >
                  <v-text-field
                    v-model="phone"
                    :rules="phoneRules"
                    label="شماره موبایل..."
                    required
                    hide-details="auto"
                    filled
                    type="tel"
                  />
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  class=""
                >
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="ایمیل..."
                    required
                    hide-details="auto"
                    filled
                    type="email"
                  />
                </v-col>
                <v-col
                  cols="12"
                  class=""
                >
                  <v-textarea
                    v-model="description"
                    label="توضیحات..."
                    required
                    hide-details="auto"
                    filled
                  />
                </v-col>
                <v-col
                  cols="12"
                  sm="3"
                  offset-sm="9"
                >
                  <v-btn
                    :loading="loading"
                    color="#4472b8"
                    block
                    elevation="0"
                    large
                    height="58px"
                    type="submit"
                  >
                    <div class="text-h6 white--text">
                      دریافت مشاوره
                    </div>
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-col>
      </v-row>
      <v-snackbar
        v-model="snackbar"
        timeout="5000"
        top
        left
      >
        {{ text }}

        <template #action="{ attrs }">
          <v-btn
            color="blue"
            text
            v-bind="attrs"
            @click="snackbar = false"
          >
            X
          </v-btn>
        </template>
      </v-snackbar>
    </v-container>
  </section>
</template>
<script>
export default {
  data: () => ({
    snackbar: false,
    text: '',
    valid: false,
    email: '',
    loading: false,
    captchaURL: '',
    captcha_code: '',
    description: '',
    fullName: '',
    companyName: '',
    nameRules: [
      v => !!v || 'این فیلد الزامی است.'
    ],
    phone: '',
    phoneRules: [
      v => !!v || 'این فیلد الزامی است.',
      v => /^[0-9]+$/.test(v) || 'شماره تلفن تنها باید شامل ارقام باشد.',
      v => v.length <= 11 || 'شماره تلفن نباید بیش از 11 رقم باشد.'
    ],
    emailRules: [
      v => !!v || 'این فیلد الزامی است.'
    ],
    captchaRules: [
      v => !!v || 'این فیلد الزامی است.'
    ]
  }),
  mounted () {
    this.getCaptcha()
  },
  methods: {
    getCaptcha () {
      return true
    },
    resetForm () {
      this.email = ''
      this.captcha_code = ''
      this.fullName = ''
      this.companyName = ''
      this.phone = ''
      this.description = ''
    },
    submitForm () {
      if (!this.$refs.consultForm.validate()) {
        return false
      } else {
        this.loading = true
        this.$axios.post('http://spout.arnika.ai/mail.php', {
          email: this.email, captcha_code: this.captcha_code, fullName: this.fullName, companyName: this.companyName, phone: this.phone, description: this.description
        }, { withCredentials: true }).then((resp) => {
          this.loading = false
          this.text = resp.data.message
          this.snackbar = true
          this.resetForm()
          this.getCaptcha()
        }).catch((err) => {
          this.loading = false
          this.text = err.response.message
          this.snackbar = true
          console.log(err.response)
        }).finally(() => { this.loading = false })
      }
    }
  }
}
</script>
<style>
    #consult-section {
        background: #f5f5f5;
    }
</style>
