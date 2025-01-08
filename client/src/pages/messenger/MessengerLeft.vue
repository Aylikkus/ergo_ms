<script setup>
import { ref } from 'vue'

defineEmits(['toggleMessengerMyInfo'])

const user = ref({
  image: '/src/assets/avatars/avatar-1.png',
  name: 'Иван Иванов',
  status: 'в сети',
  about: 'Администратор. Главный управляющий.',
})
</script>

<template>
  <div class="mb-3 text-end w-100">
    <button type="button" class="btn btn-close" @click="$emit('toggleMessengerMyInfo')"></button>
  </div>

  <div class="d-flex flex-column align-items-center">
    <img :src="user.image" :alt="user.name" class="rounded-circle" width="100" height="100" />
    <h5 class="mt-2 mb-1">{{ user.name }}</h5>
    <div :class="user.status === 'в сети' ? 'text-success' : 'text-muted'">
      {{ user.status }}
    </div>
  </div>

  <div class="py-3">
    <h6 class="mb-1">Описание</h6>
    <p class="text-muted mb-0 lh-sm" style="font-size: 0.9375rem">{{ user.about }}</p>
  </div>
</template>

<style scoped lang="scss"></style>
