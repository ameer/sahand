<template>
  <div class="member-card rounded-xxl mx-auto py-6">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-avatar size="256" color="white" />
        </v-col>
        <v-col cols="12" md="8" class="text-center text-md-right">
          <h1 class="text-h5 text--primary font-weight-bold mb-2">
            {{ name }}
          </h1>
          <h3 class="text-body-1 font-weight-bold text--disabled mb-6">
            {{ title }}
          </h3>
          <v-divider class="mb-4" />
          <div class="d-flex flex-column text-body-2 text--secondary text-right pr-4 pr-md-0" style="gap: 12px;">
            <div v-for="(h, i) in jobHistory" :key="`jh-${i}`" class="d-flex align-center">
              <v-icon right color="accent darken-2">
                mdi-checkbox-marked-circle-outline
              </v-icon>
              <span class="" v-text="h" />
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
    jobHistory: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style>

</style>
