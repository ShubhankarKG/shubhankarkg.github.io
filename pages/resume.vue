<template>
  <div class="c-content__center">
    <s-page-title>My Resume</s-page-title>
    <div class="responsive-container">
        <iframe src="/pdf/resume.pdf" width="1440px" height="900px" />
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
      title: 'Resume'
    }
  },

  async asyncData() {
    return {
      page: constants.about
    }
  }
})
</script>
