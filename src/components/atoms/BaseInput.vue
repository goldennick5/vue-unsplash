<script setup>
import { defineProps, defineEmits, computed, onMounted } from 'vue'

const emit = defineEmits(['update: input'])

const props = defineProps({
  id: {
    type: String,
    default: '',
    required: true
  },
  value: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  }
})

const model = computed({
  get() {
    return props.value
  },
  set(value) {
    emit('update: input', value)
  }
})

onMounted(() => {
  const inputElement = document.getElementById(props.id)
  if (inputElement) {
    inputElement.addEventListener('keydown', function (event) {
      if (event.keyCode === 32) {
        event.stopPropagation()
      }
    })
  }
})
</script>

<template>
  <input :id="id" v-model="model" type="text" :placeholder="placeholder" />
</template>

<style scoped>
input {
  color: var(--black-color);
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  background: var(--light-color);
  transition: 0.25s;
  outline: none;
  border: none;
  font-variant-numeric: lining-nums;
}

input::placeholder {
  color: var(--black-color);
}
</style>
