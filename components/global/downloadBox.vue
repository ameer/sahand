<template>
  <v-card outlined class="rounded-lg d-flex flex-column justify-center pa-4" min-height="128px">
    <div class="d-flex align-center">
      <v-icon size="64" color="#ff4343">
        {{ fileIcon }}
      </v-icon>
      <div class="d-flex flex-column">
        <div class="text-body-1 font-weight-bold">
          {{ file.title }}
        </div>
        <div class="text--secondary text-caption">
          حجم فایل: <span v-text="file.size" />
        </div>
      </div>
      <v-spacer />
      <v-btn class="elevation-0" color="#3057a8" :href="file.src" dark>
        <v-icon left>
          mdi-cloud-download
        </v-icon>
        دانلود فایل پیوست
      </v-btn>
    </div>
  </v-card>
</template>
<script>
export default {
  props: {
    file: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    fileFormat () {
      try {
        return this.getFileExtension(this.file.src)
      } catch (error) {
        return 'N/A'
      }
    },
    fileIcon () {
      return this.fileFormat === 'pdf' ? 'mdi-file-pdf-box' : 'mdi-attachment'
    }
  },
  methods: {
    getFileExtension (filePath) {
    // Use the `split` method to separate the file path into an array of strings
      const parts = filePath.split('.')

      // The file extension is the last element in the array
      const extension = parts[parts.length - 1]

      return extension
    }
  }
}
</script>
<style>

</style>
