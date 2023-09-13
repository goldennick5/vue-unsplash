<script setup></script>

<template>
  <button class="download-btn">
    <img src="/icons/icon-download.svg" alt="Кнопка скачать изображение" width="26" height="22" />
    <span>Download</span>
  </button>
</template>

<style scoped>
.download-btn {
  display: flex;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--yellow-color);
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: var(--yellow-color);
  color: var(--black-color);
  cursor: pointer;
  height: 3.125rem;

  padding: 0.813rem 0.95rem 0.87rem;
}

.download-btn span {
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--black-color);
  margin-left: 1rem;
}
</style>
