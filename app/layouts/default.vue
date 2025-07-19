<template>
  <div class="default-layout">
    <AppHeader />
    <main class="main">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '~/components/layout/AppHeader.vue'
import AppFooter from '~/components/layout/AppFooter.vue'
</script>
<style scoped>
.default-layout {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  .main {
    flex-grow: 1;
  }
}
</style>
