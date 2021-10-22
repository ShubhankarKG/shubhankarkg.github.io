<template>
  <ul class="c-tags" v-if="tags">
    <li v-for="(item, index) in tags" :key="`tag${index}`" class="c-tags__item">
      <template v-if="typeof item.link === 'string' && item.link !== ''">
        <a class="c-tags__label" :href="item.link" target="_blank">
          {{ item.label }}
        </a>
      </template>
      <span v-else class="c-tags__label">
        {{ item.label ? item.label : item }}
      </span>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'STags',

  props: {
    tags: Array
  },

  setup() {
    const setUpper = original => {
      return original.charAt(0).toUpperCase() + original.substring(1)
    }

    return {
      setUpper
    }
  }
})
</script>
