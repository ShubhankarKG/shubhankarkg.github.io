<template>
  <div>
    <div class="c-content__center">
      <s-page-title>{{ page.title }}</s-page-title>
      <div
        class="lead enter-fade-up enter-delay-1"
        v-html="page.introduction"
      />
    </div>

    <s-cases :cases="cases" />

    <div class="c-content__center">
      <div v-html="page.content" />
    </div>

    <s-clients :clients="clients" />

    <div class="c-content__center">
      <s-social />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import SCases from '~/components/SCases.vue'
import SClients from '~/components/SClients.vue'
import SLinkList from '~/components/SLinkList.vue'
import SLinkListItem from '~/components/SLinkListItem.vue'
import SPageTitle from '~/components/SPageTitle.vue'
import SSocial from '~/components/SSocial.vue'

export default defineComponent({
  name: 'Work',

  components: {
    SCases,
    SClients,
    SLinkList,
    SLinkListItem,
    SSocial,
    SPageTitle
  },

  head() {
    return {
      title: 'Work'
    }
  },

  async asyncData() {
    const pages = await (
      await fetch(
        'https://portfolio.simonwuyts.eu/portfolio/items/pages?fields=*.*'
      )
    ).json()
    const cases = await (
      await fetch(
        'https://portfolio.simonwuyts.eu/portfolio/items/cases?fields=*.*'
      )
    ).json()
    const clients = await (
      await fetch(
        'https://portfolio.simonwuyts.eu/portfolio/items/clients?fields=*.*'
      )
    ).json()

    return {
      page: pages.data.filter((page: any) => page.slug === 'work')[0],
      cases: cases.data
        .filter((caseItem: any) => caseItem.status === 'published')
        .map((caseItem: any) => {
          return {
            title: caseItem.title,
            subtitle: caseItem.subtitle,
            slug: caseItem.slug,
            color: caseItem.color,
            cover: caseItem.cover,
            id: caseItem.id
          }
        }),
      clients: clients.data
    }
  }
})
</script>
