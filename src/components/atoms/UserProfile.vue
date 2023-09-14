<script setup>
const props = defineProps({
  photo: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="photo__content-author">
    <img :src="photo.user.profile_image.medium" :alt="photo.user.name" width="55" height="55" />
    <div class="photo__author-credentials">
      <span class="photo__author-name">{{ photo.user.name }}</span>
      <span class="photo__author-username">@{{ photo.user.username }}</span>
    </div>
  </div>
</template>

<style scoped>
.photo__content-author {
  display: flex;
}

.photo__content-author img {
  border-radius: 8px;
  border: 1px solid var(--light-color);
}

.photo__author-credentials {
  display: flex;
  flex-direction: column;
  margin-left: 0.625rem;
}
.photo__author-name {
  color: var(--light-gray-color);
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.photo__author-username {
  color: var(--light-gray-color);
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

@media (max-width: 575.98px) {
  .photo__content-author {
    align-items: center;
  }
  .photo__author-name {
    color: var(--light-gray-color);
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .photo__author-username {
    color: var(--light-gray-color);
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}
</style>
