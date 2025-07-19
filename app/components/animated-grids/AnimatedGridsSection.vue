<template>
  <div id="AnimatedGridsSection" class="">
    <div class="static-grid">
      <StaticGride v-for="i in 14" :delay="0" :animatedRange="animatedRange" />
    </div>
    <div class="animated-grid">
      <EqualizerAnimation />
    </div>
  </div>
</template>

<script setup>
const breakpoint = useBreakpoints()
const animatedRange = computed(() => (breakpoint.value == '2xl' ? [12, 12] : [0, 0]))
</script>

<style scoped>
#AnimatedGridsSection {
  --grid-width: 8px;
  --grid-height: 8px;
  --grid-h-gap: 8px;
  --grid-v-gap: 6px;
  --grid-color: #6f80f5;
  @media (min-width: 1280px) {
    --grid-width: 8px;
    --grid-height: 8px;
    --grid-h-gap: 4.3px;
    --grid-v-gap: 6px;
  }

  margin-top: 22.01px;
  @media (min-width: 1280px) {
    margin-top: 25.04px;
  }
  /* padding: 4px; */
  position: relative;
  .static-grid {
    display: flex;
    flex-direction: column;
    gap: var(--grid-v-gap);
  }
  .animated-grid {
    top: 0px;
    position: absolute;
    margin: 0 auto;
    inset-inline-start: 0;

    @media (min-width: 1280px) {
      inset-inline-start: calc(12 * (var(--grid-width) + var(--grid-h-gap)));
    }
  }
}
</style>
