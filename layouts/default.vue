<template>
  <v-app>
    <m-header />
    <v-main>
      <nuxt />
    </v-main>
    <mfooter />
  </v-app>
</template>

<script>
import mfooter from '../components/mfooter.vue'
import MHeader from '../components/mHeader.vue'
export default {
  components: { mfooter, MHeader },
  data () {
    return {
    }
  },
  created () {
    this.$vuetify.theme.dark = false
  }
}
</script>
