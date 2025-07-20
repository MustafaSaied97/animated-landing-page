<template>
  <div>
    <NuxtPage />
  </div>
</template>
<script setup>
useHead({
  title: 'landing page',
  meta: [
    { hid: 'charset', name: 'charset', content: 'utf-8' },
    {
      hid: 'description',
      name: 'description',
      content: 'landing page'
    },
    { hid: 'author', name: 'author', content: 'landing page' },
    { hid: 'keywords', name: 'keywords', content: 'landing page' },
    { hid: 'og:title', property: 'og:title', content: 'landing page' }
  ]
})
</script>
