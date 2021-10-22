<template>
  <div class="c-content__center">
    <s-page-title>{{ page.title }}</s-page-title>
    <div class="lead enter-fade-up enter-delay-1" v-html="page.introduction" />
    <div class="enter-fade-up enter-delay-2" v-html="page.content" />
    <s-social />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import SPageTitle from '~/components/SPageTitle.vue'
import SSocial from '~/components/SSocial.vue'

export default defineComponent({
  name: 'Contact',

  components: {
    SSocial,
    SPageTitle
  },

  head() {
    return {
      title: 'Contact'
    }
  },

  async asyncData() {
    const pages = await (
      await fetch(
        'https://portfolio.simonwuyts.eu/portfolio/items/pages?fields=*.*'
      )
    ).json()

    return {
      page: pages.data.filter((page: any) => page.slug === 'contact')[0]
    }
  }
})
</script>
