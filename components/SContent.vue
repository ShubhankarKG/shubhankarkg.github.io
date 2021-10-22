<template>
  <div class="c-content">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import SNavigation from '~/components/SNavigation.vue'

export default defineComponent({
  name: 'SContent',

  components: {
    SNavigation
  }
})
</script>
