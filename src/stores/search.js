import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSearch = defineStore('search', () => {
  const q = ref('')
  const results = ref([])

  const lastQ = computed(() => q.value)

  function saveQ(newQ) {
    q.value = newQ
  }

  return { q, lastQ, saveQ, results }
})
