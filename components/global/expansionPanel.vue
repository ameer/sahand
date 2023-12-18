<template>
  <div>
    <v-form @submit.prevent="search">
      <v-text-field
        v-model="query"
        dense
        clearable
        filled
        label="جستجو"
        placeholder="عنوان پرسش خود را وارد کنید"
      />
    </v-form>
    <v-expansion-panels>
      <v-expansion-panel v-for="(item, i) in filteredItems" :key="`faq-${i}`">
        <v-expansion-panel-header>
          <div>
            <span class="number-box" v-text="i + 1" />
            <span
              class="text-body-2 font-weight-bold text--primary"
              style="font-size: 18px !important;line-height: 28px;"
            >{{ item.q }}</span>
          </div>
        </v-expansion-panel-header>
        <v-expansion-panel-content class="text--secondary text-body-2" style="line-height: 1.75rem !important;">
          {{ item.a }}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      query: ''
    }
  },
  computed: {
    filteredItems () {
      if (this.query && this.query !== '') {
        return this.items.filter(item => item.q.includes(this.query))
      }
      return this.items
    }
  }
}
</script>
<style>

</style>
