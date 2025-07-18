<template>
  <div clas="error-page"></div>
</template>

<script setup>
import { onMounted } from 'vue'

const props = defineProps({
  error: {
    required: true,
    type: Object
  }
})

onMounted(() => {
  console.error('full Server error:', props?.error || 'Unknown error')

  console.error('Server error:', props.error?.message || 'Unknown error')
  if (props.error?.stack) {
    console.error('Stack trace:', props.error.stack)
  }
})
</script>

<style scoped></style>
