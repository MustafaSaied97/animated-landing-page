<template>
  <div v-html="svg.default" :class="props.class" />
</template>
<script setup>
const props = defineProps({
  name: { type: String, required: true },
  class: { type: String, default: 'w-6 h-6' }
})
const svg = await import(`~/assets/icons/${props.name}.svg?raw`)
</script>
