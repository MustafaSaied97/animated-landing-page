<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import lottie from 'lottie-web'

const props = defineProps({
  animationData: { type: Object, default: null },
  path: { type: String, default: null },
  loop: { type: Boolean, default: true },
  autoplay: { type: Boolean, default: true },
  speed: { type: Number, default: 1 },
  width: { type: String, default: '5' },
  height: { type: String, default: '100%' },
  // Add color prop
  color: { type: String, default: ''},
})

const container = ref(null)
let anim = null

// Function to update colors in SVG
const updateColors = () => {
  if (!container.value || !props.color) return
  
  const svg = container.value.querySelector('svg')
  if (!svg) return

  // Find all path elements
  const paths = svg.querySelectorAll('path')
  
  paths.forEach(path => {
    // Only modify elements that have existing fill/stroke
    if (path.hasAttribute('fill') && path.getAttribute('fill') !== 'none') {
      path.style.fill = props.color
    }
    if (path.hasAttribute('stroke') && path.getAttribute('stroke') !== 'none') {
      path.style.stroke = props.color
    }
  })
}

onMounted(() => {
  anim = lottie.loadAnimation({
    container: container.value,
    renderer: 'svg',
    loop: props.loop,
    autoplay: props.autoplay,
    animationData: props.animationData,
    path: props.path,
  })

  anim.setSpeed(props.speed)
  
  // Update colors when animation loads
  anim.addEventListener('DOMLoaded', updateColors)
})

// Watch for color changes
watch(() => props.color, updateColors)

onBeforeUnmount(() => {
  if (anim) anim.destroy()
})
</script>

<template>
  <div ref="container" :style="{ width, height }" />
</template>