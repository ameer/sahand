<template>
  <v-expansion-panels accordion>
    <v-expansion-panel>
      <v-expansion-panel-header>{{ title }}</v-expansion-panel-header>
      <v-expansion-panel-content>
        {{ text }}
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
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
