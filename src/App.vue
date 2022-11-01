<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="Container max-w-6xl mx-auto px-5 pt-8 pb-16">
    <header class="flex items-center gap-8">
      <RouterLink to="/">
        <img alt="" class="logo" src="@/assets/header-logo.png" width="180" />
      </RouterLink>

      <nav class="flex items-center gap-4">
        <RouterLink to="/" class="p-4">Trending</RouterLink>
        <RouterLink to="/search" class="p-4">Search</RouterLink>
      </nav>
    </header>

    <hr class="my-8" />

    <RouterView />
  </div>
</template>

<style>
body {
  background: url('@/assets/bg.jpg') no-repeat top center fixed;
}
nav a {
  @apply font-medium text-lg;
}

nav a:hover {
  @apply underline;
}
nav .router-link-exact-active {
  @apply text-red-600;
}
</style>
