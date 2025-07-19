<template>
  <div class="flex items-center justify-start gap-[4.3px] overflow-hidden">
    <template v-for="(node, index) in nodes" :key="index">
      <div v-if="node.isBefore" class="node node-2"></div>

      <template v-if="node.isAnimated">
        <div
          class="node transition-all duration-500 ease-in-out"
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
import { ref, onMounted, onBeforeUnmount } from 'vue';

// Define props
const props = defineProps({
  delay: {
    type: Number,
    default: 0
  }
});

// Animation control
let animationInterval = null;
const animatedRange = [12, 12];
 const activeNode = ref(animatedRange[0]);
const direction = ref(1); // 1 = forward, -1 = reverse
const speed = ref(200);

const totalLength = 1000;
const nodes = Array.from({ length: totalLength }, (_, i) => {
  const isBefore = i < animatedRange[0];
  const isAfter = i > animatedRange[1];
  const isAnimated = !isBefore && !isAfter;
  return {
    position: i,
    isBefore,
    isAfter,
    isAnimated,
    isLastAnimated: i === animatedRange[1]
  }
});

const startAnimation = () => {
  if (animationInterval) clearInterval(animationInterval);
  animationInterval = setInterval(() => {
    // Move to next node in current direction
    activeNode.value += direction.value;
    
    // Reverse direction at boundaries
    if (activeNode.value === animatedRange[1] && direction.value === 1) {
      direction.value = -1; // Start reversing after last node
    } 
    else if (activeNode.value === animatedRange[0] && direction.value === -1) {
      direction.value = 1; // Start forward after first node
    }
  }, speed.value);
};

onMounted(() => {
  // Start after specified delay
  setTimeout(() => {
    startAnimation();
  }, props.delay);
});

onBeforeUnmount(() => {
  clearInterval(animationInterval);
});
</script>

<style scoped>
.node {
  @apply h-[7.85px] w-[8.04px] shrink-0 rounded-full bg-[#6F80F5] transition-all duration-500;
}
.node-1 {
  @apply scale-50;
}
.node-2 {
  @apply scale-100;
}
</style>