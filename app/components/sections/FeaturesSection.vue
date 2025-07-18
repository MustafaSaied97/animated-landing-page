<template>
  <section class="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
    <Container>
      <div class="text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
          <span class="text-primary">Modern</span> Landing Page
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          Scalable solution with Nuxt 3 and Tailwind CSS
        </p>
        <Button>FeaturesSection</Button>
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from "~/components/layout/Container.vue";
</script>