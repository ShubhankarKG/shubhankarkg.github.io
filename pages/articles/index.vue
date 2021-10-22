<template>
  <div class="c-content__center">
    <s-page-title>{{ page.title }}</s-page-title>
    <div
      class="lead enter-fade-up enter-delay-1"
      v-html="page.introduction"
      v-if="page.introduction"
    />
    <div
      class="enter-fade-up enter-delay-1"
      v-html="page.content"
      v-if="page.content"
    />
    <s-link-list>
      <s-link-list-item
        :class="`enter-fade-up enter-delay-${index + 1}`"
        :to="`/articles/${article.slug}`"
        :subtitle="formatDate(article.date)"
        v-for="(article, index) in articles"
        :key="article.id"
      >
        {{ article.title }}
      </s-link-list-item>
    </s-link-list>
    <s-social />
  </div>
</template>

<script lang="ts">
import { format } from 'date-fns'
import { defineComponent, ref } from '@vue/composition-api'
import SLinkList from '~/components/SLinkList.vue'
import SLinkListItem from '~/components/SLinkListItem.vue'
import SPageTitle from '~/components/SPageTitle.vue'
import SSocial from '~/components/SSocial.vue'

export default defineComponent({
  name: 'Articles',

  components: {
    SLinkList,
    SLinkListItem,
    SSocial,
    SPageTitle
  },

  head() {
    return {
      title: 'Articles'
    }
  },

  async asyncData() {
    const pages = await (
      await fetch(
        'https://portfolio.simonwuyts.eu/portfolio/items/pages?fields=*.*'
      )
    ).json()
    const articles = await (
      await fetch(
        'https://portfolio.simonwuyts.eu/portfolio/items/articles?fields=*.*'
      )
    ).json()

    return {
      page: pages.data.filter((page: any) => page.slug === 'articles')[0],
      articles: articles.data
        .filter((article: any) => article.status === 'published')
        .map((article: any) => {
          return {
            title: article.title,
            date: article.date,
            slug: article.slug,
            id: article.id
          }
        })
        .sort((a, b) => {
          a = new Date(a.date)
          b = new Date(b.date)
          return a > b ? -1 : a < b ? 1 : 0
        })
    }
  },

  methods: {
    formatDate(date) {
      return format(new Date(date), 'MMMM d, yyyy')
    }
  }
})
</script>
