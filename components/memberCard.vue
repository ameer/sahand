<template>
  <div class="member-card rounded-xxl mx-auto py-6">
    <v-container>
      <v-row align="center">
        <v-col cols="12" md="4">
          <v-avatar size="128" color="white" />
        </v-col>
        <v-col cols="12" md="8" class="text-center text-md-right pr-md-6">
          <h1 class="text-h6 text--primary font-weight-bold">
            {{ name }}
          </h1>
          <h3 class="text-body-2 font-weight-bold text--disabled my-4">
            {{ title }}
          </h3>
          <h3 class="text-body-2 text--disabled">
            {{ degree }}
          </h3>
        </v-col>
        <v-col cols="12">
          <v-divider class="mb-4" />
          <h4 class="text-right text-body-2 font-weight-bold text--secondary mb-4">
            سوابق شغلی:
          </h4>
          <div class="d-flex flex-column text-body-2 text--secondary text-right pr-4 pr-md-0" style="gap: 12px;">
            <div v-for="(h, i) in jobHistory" :key="`jh-${i}`" class="d-flex align-center">
              <v-icon right color="accent darken-2">
                mdi-checkbox-marked-circle-outline
              </v-icon>
              <span class="" v-text="h" />
            </div>
          </div>
        </v-col>
        <v-col v-if="certs !== false" cols="12">
          <h4 class="text-right text-body-2 font-weight-bold text--secondary mb-4">
            گواهینامه‌های حرفه‌ای:
          </h4>
          <div class="d-flex flex-column text-body-2 text--secondary text-right pr-4 pr-md-0" style="gap: 12px;">
            <div v-for="(c, i) in certs" :key="`certs-${i}`" class="d-flex align-center">
              <v-icon right color="accent darken-2">
                mdi-checkbox-marked-circle-outline
              </v-icon>
              <span class="" v-text="c" />
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  props: {
    imgSrc: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    degree: {
      type: String,
      default: ''
    },
    jobHistory: {
      type: Array,
      default: () => []
    },
    certs: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style>

</style>
