<script setup>
const props = defineProps({
  toggleLike: {
    type: Function,
    required: false
  },
  isLiked: {
    type: Boolean,
    required: false
  }
})

const likeIcons = {
  defaultLike: '/icons/icon-like-btn.svg',
  activeLike: '/icons/icon-liked-btn.svg'
}
</script>

<template>
  <img :src="props.isLiked ? likeIcons.activeLike : likeIcons.defaultLike" @click="props.toggleLike" alt="Кнопка понравится" />
</template>

<style scoped>
img {
  width: 3.75rem;
  margin-right: 1.25rem;
  cursor: pointer;
}
</style>
