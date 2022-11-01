<template>
  <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    <MediaCard v-for="card in cards" :key="card.id" :card="card" />
  </div>
</template>

<script setup>
import config from '../config.js'
import { useTrends } from '@/stores/trends'
import axios from 'axios'
import { onMounted, ref } from 'vue'
import MediaCard from './MediaCard.vue'

let cards = ref([])

onMounted(async () => {
  const searchStore = useTrends()

  // already in store, we dont need to re-fetch it
  if (searchStore.results.length) {
    cards.value = searchStore.results
    return
  }

  // we try to fetch it
  try {
    const res = await axios.get(config.trendingUrl)
    searchStore.results = cards.value = res.data.results
  } catch (error) {
    alert(error) // simply dummy shitty
  }
})
</script>
