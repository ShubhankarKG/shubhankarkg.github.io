<template>
  <div class="c-content__center">
    <s-page-title>Azure Notes</s-page-title>
    <div class="lead enter-fade-up enter-delay-1">
        <div v-html="content" />
    </div>
    <s-social />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import SPageTitle from '~/components/SPageTitle.vue'
import SSocial from '~/components/SSocial.vue'
import AzureNotes from "~/static/blogs/AzureNotes/AzureNotes.md";

export default defineComponent({
  name: 'AzureNotes',

  components: {
    SSocial,
    SPageTitle,
  },

  head() {
    return {
      title: 'Blogs - Azure Notes'
    }
  },

  computed: {
    content() {
      return AzureNotes;
    }
  }
})
</script>
