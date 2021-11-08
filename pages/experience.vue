<template>
  <div class="c-content__center">
    <s-page-title>Experience</s-page-title>
    <div class="lead enter-fade-up enter-delay-1" />
    <div class="enter-fade-up enter-delay-2">
        <p> Coming soon! </p>
    </div>
    <s-social />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import SPageTitle from '~/components/SPageTitle.vue'
import SSocial from '~/components/SSocial.vue'
import {constants} from '~/components/contents'

export default defineComponent({
  name: 'About',

  components: {
    SSocial,
    SPageTitle
  },

  head() {
    return {
      title: 'About'
    }
  },

  async asyncData() {
    return {
      page: constants.about
    }
  }
})
</script>
