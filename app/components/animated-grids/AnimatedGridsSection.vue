<template>
  <div id="AnimatedGridsSection" class="">
    <div class="static-grid">
      <StaticGride v-for="i in 14" :delay="0" :smallDotPosition="smallDotPosition" />
    </div>
    <div class="animated-grid">
      <EqualizerAnimation />
    </div>
  </div>
</template>

<script setup>
const breakpoint = useBreakpoints()
const smallDotPosition = computed(() => (breakpoint.value == '2xl' ? 15 : 3))
</script>

<style scoped>
#AnimatedGridsSection {
  --grid-width: 8px;
  --grid-height: 8px;
  --grid-h-gap: 4.1875px;
  --grid-v-gap: 4.88px;
  --grid-color: #6f80f5;
  --grid-contianer-padding-end: 5px;
  --grid-contianer-padding-start: 3.88px;
  @media (min-width: 1280px) {
    --grid-width: 7.854px;
    --grid-height: 7.854px;
    --grid-h-gap: 3.39px;
    --grid-v-gap: 5.15px;
    --grid-contianer-padding-end: 3.72px;
    --grid-contianer-padding-start: 2.76px;
  }

  margin-top: 22.01px;
  padding-inline-end: 5px;
  padding-inline-start: 3.88px;
  @media (min-width: 1280px) {
    margin-top: 25.04px;
    padding-inline-end: 3.72px;
    padding-inline-start: 2.76px;
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
    inset-inline-start: calc(
      (3 * (var(--grid-width) + var(--grid-h-gap))) + var(--grid-contianer-padding-start)
    );
    @media (min-width: 1280px) {
      inset-inline-start: calc(
        (15 * (var(--grid-width) + var(--grid-h-gap))) + var(--grid-contianer-padding-start)
      );
    }
  }
}
</style>
