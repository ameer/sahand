<template>
  <v-card class="py-8 px-16" color="#fff" elevation="0">
    <div class="mb-4">
      <h2 class="primary--text mb-2">
        {{ article.title }}
      </h2>
      <span
        v-if="article.readTime"
        class="text-sm secondary--text"
      >زمان مطالعه: {{ article.readTime }}</span>
    </div>
    <v-divider class="mb-6" />
    <nuxt-content :document="article" />
  </v-card>
</template>
<script>
import 'remixicon/fonts/remixicon.css'
export default {
  layout: 'withSidebar',
  async asyncData ({ $content, params }) {
    const article = await $content('kb', params.slug).fetch()
    return { article }
  },
  data () {
    return {
      isIntersecting: false
    }
  },
  head () {
    return {
      title: this.article.title
        ? this.article.title
        : 'پایگاه دانش بازارگردانی',
      meta: [
        {
          description: this.article.description ? this.article.description : ''
        }
      ]
    }
  },
  methods: {
    onIntersect (entries, observer) {
      // More information about these options
      // is located here: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
      this.isIntersecting = true
    }
  }
}
</script>
<style>
.nuxt-content h2,
.nuxt-content h3 {
  margin-bottom: 20px;
  color: #3057a8;
}
.nuxt-content p {
  margin-bottom: 20px;
  line-height: 2rem;
  text-align: justify;
}
.nuxt-content ul,
.nuxt-content ol {
  padding-left: 0;
  padding-right: 3rem;
  margin-bottom: 20px;
}
.nuxt-content img {
  width: 85%;
  margin: 1.5rem auto;
}
</style>
