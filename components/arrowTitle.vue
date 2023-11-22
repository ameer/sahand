<template>
  <div class="text-center">
    <h3 class="text-h4 py-4 secondary--text z-2" :style="`background:${bgColor}`">
      {{ heading }}
    </h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="78" height="48" viewBox="0 0 78 48" class="flip-svg">
      <path data-name="Polygon 2" d="M36.788,4.5a3,3,0,0,1,5.2,0L76.178,63.772a3,3,0,0,1-2.6,4.5H5.194a3,3,0,0,1-2.6-4.5Z" :fill="bgColor" />
    </svg>
  </div>
</template>
<script>
export default {
  props: {
    bgColor: {
      default: '',
      type: String
    },
    heading: {
      default: '',
      type: String
    }
  }
}
</script>
<style scoped>
.flip-svg {
    transform:rotate(180deg);
    margin-top: -1rem;
    z-index: -1;
}
</style>
