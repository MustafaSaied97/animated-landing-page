<template>
  <component :is="icon" :class="props.class" :width="size" :height="size" aria-hidden="true" />
</template>
<script setup>
const props = defineProps({
  name: { type: String, required: true },
  class: { type: String, default: '' },
  size: { type: [String, Number], default: 24 }
})

// Dynamically import the SVG component
const icon = defineAsyncComponent(() => import(`~/assets/icons/${props.name}.svg`))
</script>
<style>
.nuxt-icon {
  width: auto !important;
  height: auto !important;
  margin-bottom: 0 !important;
  vertical-align: baseline !important;
}
</style>
