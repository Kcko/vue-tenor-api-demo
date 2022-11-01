<template>
  <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    <MediaCard v-for="card in cards" :key="card.id" :card="card" />
  </div>
</template>

<script>
import config from '../config.js'
import { useSearch } from '@/stores/search'
import axios from 'axios'
import MediaCard from './MediaCard.vue'

export default {
  components: {
    MediaCard
  },
  props: ['modelValue'],
  data() {
    return {
      cards: [],
      searchStore: null
    }
  },

  watch: {
    modelValue: {
      immediate: true,
      async handler(newValue) {
        if (newValue) {
          // we try to fetch it
          try {
            const res = await axios.get(config.searchUrl + newValue)
            this.searchStore.results = this.cards = res.data.results
          } catch (error) {
            alert(error) // simply dummy shitty
          }
        }
      }
    }
  },
  created() {
    this.searchStore = useSearch()
  },
  mounted() {
    if (this.searchStore.results.length) {
      this.cards = this.searchStore.results
      return
    }
  }
}
</script>
