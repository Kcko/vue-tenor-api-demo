import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTrends = defineStore('trends', () => {
  const results = ref([])
  return { results }
})
