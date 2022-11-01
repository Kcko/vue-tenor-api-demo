<template>
  <h1 class="text-3xl mb-8">Search ✌️</h1>
  <MediaSearchForm @new-q="newQ" class="mb-8" />
  <MediaListSearch v-model="queryFromInput" />
</template>

<script>
import MediaSearchForm from '../components/MediaFormSearch.vue'
import MediaListSearch from '../components/MediaListSearch.vue'
export default {
  components: { MediaSearchForm, MediaListSearch },
  data() {
    return {
      queryFromInput: ''
    }
  },
  methods: {
    newQ(q) {
      if (q && q.length >= 3) {
        this.queryFromInput = q
      }
    }
  }
}
</script>
