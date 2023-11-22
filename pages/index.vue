<template>
  <div>
    <hero />
    <benefits />
    <why />
    <!-- <infographic />
    <articles /> -->
    <counter />
    <consult />
  </div>
</template>

<script>
import Articles from '../components/home/articles.vue'
import benefits from '../components/home/benefits.vue'
import Consult from '../components/home/consult.vue'
import Counter from '../components/home/counter.vue'
import Hero from '../components/home/hero.vue'
import Infographic from '../components/home/infographic.vue'
import Why from '../components/home/why.vue'
export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { Hero, benefits, Why, Infographic, Consult, Articles, Counter },
  head () {
    return {
      title: 'سبد گردان',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'index',
          name: 'index',
          content: 'index page'
        }
      ]
    }
  }
}
</script>
