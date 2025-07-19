<template>
  <div class="container">
    <template v-for="(node, index) in nodes" :key="index">
      <div v-if="node.isBefore" class="node node-2"></div>

      <template v-if="node.isAnimated">
        <div
          class="node node--animated"
          :class="{
            'node-2': activeNode === node.position,
            'node-1': activeNode !== node.position
          }"
        ></div>
      </template>

      <div v-if="node.isAfter" class="node node-1"></div>
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// Define props
const props = defineProps({
  delay: {
    type: Number,
    default: 0
  }
})

// Animation control
let animationInterval = null
const animatedRange = [12, 12]
const activeNode = ref(animatedRange[0])
const direction = ref(1) // 1 = forward, -1 = reverse
const speed = ref(200)

const totalLength = 1000
const nodes = Array.from({ length: totalLength }, (_, i) => {
  const isBefore = i < animatedRange[0]
  const isAfter = i > animatedRange[1]
  const isAnimated = !isBefore && !isAfter
  return {
    position: i,
    isBefore,
    isAfter,
    isAnimated,
    isLastAnimated: i === animatedRange[1]
  }
})

const startAnimation = () => {
  if (animationInterval) clearInterval(animationInterval)
  animationInterval = setInterval(() => {
    // Move to next node in current direction
    activeNode.value += direction.value

    // Reverse direction at boundaries
    if (activeNode.value === animatedRange[1] && direction.value === 1) {
      direction.value = -1 // Start reversing after last node
    } else if (activeNode.value === animatedRange[0] && direction.value === -1) {
      direction.value = 1 // Start forward after first node
    }
  }, speed.value)
}

onMounted(() => {
  // Start after specified delay
  setTimeout(() => {
    startAnimation()
  }, props.delay)
})

onBeforeUnmount(() => {
  clearInterval(animationInterval)
})
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  overflow: hidden;
  @media (min-width: 1280px) {
    gap: 4.3px;
  }
}
.node {
  height: 8px;
  width: 8px;
  flex-shrink: 0;
  border-radius: 9999px;
  background-color: #6f80f5;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
  @media (min-width: 1280px) {
    height: 7.85px;
    width: 8.04px;
  }
}
.node--animated {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
}
.node-1 {
  transform: scale(0.5);
}
.node-2 {
  transform: scale(1);
}
</style>
