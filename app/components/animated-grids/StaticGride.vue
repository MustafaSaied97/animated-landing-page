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
  },
  animatedRange: {
    type: Array,
    default: [12, 12]
  }
})

let animationInterval = null

const activeNode = ref(props.animatedRange[0])
const direction = ref(1) // 1 = forward, -1 = reverse
const speed = ref(200)

const totalLength = 1000
const nodes = computed(() =>
  Array.from({ length: totalLength }, (_, i) => {
    const isBefore = i < props.animatedRange[0]
    const isAfter = i > props.animatedRange[1]
    const isAnimated = !isBefore && !isAfter
    return {
      position: i,
      isBefore,
      isAfter,
      isAnimated,
      isLastAnimated: i === props.animatedRange[1]
    }
  })
)

const startAnimation = () => {
  if (animationInterval) clearInterval(animationInterval)
  animationInterval = setInterval(() => {
    // Move to next node in current direction
    activeNode.value += direction.value

    // Reverse direction at boundaries
    if (activeNode.value === props.animatedRange[1] && direction.value === 1) {
      direction.value = -1 // Start reversing after last node
    } else if (activeNode.value === props.animatedRange[0] && direction.value === -1) {
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
  gap: var(--grid-h-gap);
  overflow: hidden;
  flex-shrink: 0 !important;
}
.node {
  height: var(--grid-height);
  width: var(--grid-width);
  flex-shrink: 0;
  border-radius: 9999px;
  background-color: var(--grid-color);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
}
.node--animated {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
}
.node-1 {
  transform: scale(0.5);
  align-self: flex-end;
}
.node-2 {
  transform: scale(1);
}
</style>
