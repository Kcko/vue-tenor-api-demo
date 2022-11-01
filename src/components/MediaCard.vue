<template>
  <div class="MediaCard flex flex-col shadow-md bg-white rounded p-5">
    <div class="mb-4">
      <a :href="card.url" target="_blank"
        ><img
          alt=""
          :src="card.media_formats.tinygif.url"
          class="block mx-auto"
      /></a>
    </div>

    <div>
      <h2 class="mb-2">
        <a
          :href="card.url"
          target="_blank"
          class="font-bold hover:text-red-600 hover:underline block"
          >{{ card.content_description }}</a
        >
      </h2>
      <div class="flex flex-wrap gap-x-2">
        <div v-for="tag in card.tags" :key="tag" class="text-xs">
          #{{ tag }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  card: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.MediaCard {
  transition: 125ms ease-in-out;
}
.MediaCard:hover {
  scale: 1.07;
}
</style>
