<template>
  <div class="c-content__center">
    <div class="c-date enter-fade-in">{{ formatDate(article.date) }}</div>
    <s-page-title> {{ article.title }} </s-page-title>
    <s-tags class="enter-fade-up enter-delay-1" :tags="article.tags" />
    <div
      class="lead enter-fade-up enter-delay-1"
      v-html="article.introduction"
    />
    <div class="enter-fade-up enter-delay-2" v-html="article.content" />
    <s-social />
  </div>
</template>

<script lang="ts">
import { format } from 'date-fns'
import { highlightAll } from 'prismjs'
import '~/assets/highlighting.css'
import { defineComponent, onMounted } from '@vue/composition-api'
import SPageTitle from '~/components/SPageTitle.vue'
import SSocial from '~/components/SSocial.vue'
import STags from '~/components/STags.vue'

export default defineComponent({
  name: 'Article',

  components: {
    SSocial,
    SPageTitle,
    STags
  },

  head(this: any) {
    return {
      title: this.article.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.introduction
        },
        {
          hid: 'ogdescription',
          property: 'og:description',
          content: this.article.introduction
        },
        {
          hid: 'ogtitle',
          property: 'og:title',
          content: this.article.title
        },
        {
          hid: 'twittertitle',
          property: 'twitter:title',
          content: this.article.title
        },
        {
          hid: 'ogimage',
          property: 'og:image',
          content: this.article.social_image
            ? this.article.social_image.data.url
            : 'https://www.simonwuyts.com/images/share.png'
        },
        {
          hid: 'twitterimage',
          property: 'twitter:image',
          content: this.article.social_image
            ? this.article.social_image.data.url
            : 'https://www.simonwuyts.com/images/share.png'
        }
      ]
    }
  },

  async asyncData({ params }) {
    const articles = await (
      await fetch(
        'https://portfolio.simonwuyts.eu/portfolio/items/articles?fields=*.*'
      )
    ).json()

    return {
      article: articles.data.filter(
        (article: any) => article.slug === params.slug
      )[0]
    }
  },

  setup() {
    const formatDate = date => {
      return format(new Date(date), 'MMMM d, yyyy')
    }

    onMounted(() => {
      highlightAll()
    })

    return {
      formatDate
    }
  }
})
</script>
