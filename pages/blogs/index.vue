<template>
  <div class="c-content__center">
    <s-page-title>Blogs</s-page-title>
    <div class="lead enter-fade-up enter-delay-1" >
        <ul>
            <nuxt-link to="/blogs/AzureNotes">
                <li style="text-decoration: none;">
                    <h2>Learning Azure</h2>
                </li>
            </nuxt-link>
        </ul>
    </div>
    <s-social />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import SPageTitle from '~/components/SPageTitle.vue'
import SSocial from '~/components/SSocial.vue'
import SServices from '~/components/SServices.vue'
import { constants } from "~/components/contents";

export default defineComponent({
  name: 'Blogs',

  components: {
    SSocial,
    SPageTitle,
    SServices
  },

  head() {
    return {
      title: 'Blogs'
    }
  },

  async asyncData() {
    return {
      page: constants.bio
    }
  }
})
</script>
