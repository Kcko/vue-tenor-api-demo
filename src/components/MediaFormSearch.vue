<template>
  <form>
    <input
      v-model="q"
      @input="searchByQ"
      type="text"
      placeholder="Search therm (3 chars is minimum)"
      class="min-h-[60px] border border-gray-400 px-6 rounded w-full"
    />
  </form>
</template>

<script>
import config from '../config.js'
import { useSearch } from '@/stores/search'
import { ref } from 'vue'
import { debounce } from 'lodash-es'

export default {
  setup(props, { emit }) {
    const searchStore = useSearch()
    const q = ref('')

    if (searchStore.lastQ) {
      q.value = searchStore.lastQ
    }

    const searchByQ = debounce(function () {
      searchStore.saveQ(q.value)
      emit('new-q', q.value)
    }, config.searchTtl)

    return {
      q,
      searchStore,
      searchByQ
    }
  }
}
</script>

<style lang="scss" scoped></style>
