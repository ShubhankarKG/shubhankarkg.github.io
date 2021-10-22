<template>
  <div class="c-services">
    <div
      class="c-service"
      :class="`enter-fade-up enter-delay-${index + 2}`"
      v-for="(service, index) in services"
      :key="index"
    >
      <div class="c-service__icon">
        <img
          class="c-service__image"
          :src="service.image"
          :alt="service.title"
        />
      </div>
      <div class="c-service__description">
        <h2>{{ service.title }}</h2>
        <div>
          <p>
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import {constants} from "~/components/contents.js";

export default defineComponent({
  name: 'SServices',
  created() {
    this.services = constants.services
  }
})
</script>
