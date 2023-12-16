<template>
  <v-timeline
    align-top
    :dense="$vuetify.breakpoint.smAndDown"
    reverse
  >
    <v-timeline-item
      v-for="(item, i) in items"
      :key="i"
      :color="item.color ?? '#4586c6'"
      :icon="`mdi-numeric-${i + 1}`"
    >
      <v-card
        :color="item.color ?? '#4586c6'"
        dark
      >
        <v-card-title class="text-h6 font-weight-bold">
          {{ item.title }}
        </v-card-title>
        <v-card-text class="white text--primary pt-4 text-body-1">
          <ul class="pr-3">
            <li v-for="(sub, j) in item.subItems" :key="`sub-${j}`">
              <p :class="j === item.subItems.length ? 'mb-0' : 'mb-3'">
                {{ sub }}
              </p>
            </li>
          </ul>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style>

</style>
