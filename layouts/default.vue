<template>
  <div class="c-main">
    <s-filters />
    <s-navigation />
    <s-content>
      <nuxt />
    </s-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import SContent from '~/components/SContent.vue'
import SFilters from '~/assets/svg/filters.svg'
import SNavigation from '~/components/SNavigation.vue'

export default defineComponent({
  name: 'Default',
  components: {
    SContent,
    SFilters,
    SNavigation
  }
})
</script>
