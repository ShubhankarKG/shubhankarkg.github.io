<template>
  <nav class="c-navigation">
    <nuxt-link class="c-navigation__logo" to="/">
      <s-logo />
      <span class="sr-only">Home</span>
    </nuxt-link>
    <div class="c-navigation__left">
      <nuxt-link
        to="/"
        class="c-navigation__item"
        active-class="c-navigation__item--active"
        exact
      >
        Home
      </nuxt-link>
      <nuxt-link
        to="/about"
        class="c-navigation__item"
        active-class="c-navigation__item--active"
        exact
      >
        About
      </nuxt-link>
      <nuxt-link
        to="/experience"
        class="c-navigation__item"
        active-class="c-navigation__item--active"
      >
        Experience
      </nuxt-link>
      <nuxt-link
        to="/contact"
        class="c-navigation__item"
        active-class="c-navigation__item--active"
        exact
      >
        Contact
      </nuxt-link>
      <nuxt-link
        to="/resume"
        class="c-navigation__item"
        active-class="c-navigation__item--active"
        exact
      >
        My Resume
      </nuxt-link>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
import SLogo from '~/components/SLogo.vue'

export default defineComponent({
  name: 'SNavigation',

  components: {
    SLogo
  },

  setup() {
    const nlPath = computed(() => `/nl/`)
    const enPath = computed(() => `/`)

    return {
      nlPath,
      enPath
    }
  }
})
</script>
