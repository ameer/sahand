<template>
  <section id="articles-section" class="relative py-32 mWhite">
    <h3 class="text-h4 primary--text text-center font-weight-bold mb-4">
      مقـــالات
    </h3>
    <v-container class="in-viewport py-16" :class="{animated: isIntersecting}">
      <v-row v-intersect="onIntersect" class="px-lg-16">
        <v-col
          v-for="(item, i) in articles"
          :key="i"
          cols="12"
          sm="4"
          class="z-2 px-6 item"
          :class="'delay-'+i*100"
        >
          <nuxt-link
            :to="`/blog/${item.slug}`"
          >
            <v-img
              height="320px"
              width="320px"
              :src="`/img/articles/${item.img}`"
              class="rounded-l elevation-2 pointer img-with-sliding-caption"
            >
              <template #placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  />
                </v-row>
              </template>
              <div v-if="item.description !== ''" class="slide-up-caption text-center">
                <p class="text-h6 mb-1">
                  {{ item.title }}
                </p>
              </div>
            </v-img>
          </nuxt-link>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
export default {
  data () {
    return {
      isIntersecting: false,
      articles: []
    }
  },
  async fetch () {
    const articles = await this.$content('articles')
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'asc')
      .fetch()

    this.articles = articles
  },
  methods: {
    onIntersect (entries, observer) {
      // More information about these options
      // is located here: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
      this.isIntersecting = entries[0].isIntersecting
    }
  }
}
</script>
<style scoped>
#why-section {
  position: relative;
}
#why-section::after {
    background: url("~/static/img/why-bg.png");
  background-size: auto;
  background-repeat: no-repeat;
  background-position: center;
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  opacity: .2;
  z-index: 0;
}
</style>
