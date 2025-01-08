<script setup>
import { Search } from 'lucide-vue-next'
import { ref } from 'vue'

defineProps({
  activeDialog: { type: Number, required: true },
})

defineEmits(['toggleMessengerMyInfo', 'openDialog'])

const chatsList = ref([
  {
    id: 1,
    image: '/src/assets/avatars/avatar-12.png',
    name: 'Алиса Михайловна',
    message: {
      last: 'Я обязательно куплю его)',
      time: '12:34',
    },
  },
  {
    id: 2,
    image: '/src/assets/avatars/avatar-21.png',
    name: 'Игорь Петров',
    message: {
      last: 'Пока',
      time: '10:13',
    },
  },
  {
    id: 3,
    image: '/src/assets/avatars/avatar-26.png',
    name: 'Ваня Ломоносов',
    message: {
      last: 'Обязательно!',
      time: '09:26',
    },
  },
])

const contactsList = ref([
  { id: 1, image: '/src/assets/avatars/avatar-42.png', name: 'Ульяна Мирова', online: false },
  { id: 2, image: '/src/assets/avatars/avatar-28.png', name: 'Владимир Быков', online: false },
  { id: 3, image: '/src/assets/avatars/avatar-18.png', name: 'Аким Смирнов', online: true },
  { id: 4, image: '/src/assets/avatars/avatar-31.png', name: 'Михаил Самойлов', online: false },
  { id: 5, image: '/src/assets/avatars/avatar-29.png', name: 'Инна Некрасова', online: true },
  { id: 6, image: '/src/assets/avatars/avatar-17.png', name: 'Василиса Иванова', online: true },
  { id: 7, image: '/src/assets/avatars/avatar-20.png', name: 'Вадим Ушаков', online: false },
  { id: 9, image: '/src/assets/avatars/avatar-9.png', name: 'Эля Орлова', online: true },
  { id: 10, image: '/src/assets/avatars/avatar-43.png', name: 'Ирина Смирнова', online: true },
])
</script>

<template>
  <div class="d-flex align-items-center gap-2 pb-2 border-bottom">
    <img
      src="/src/assets/avatars/avatar-1.png"
      alt="Иван Иванов"
      class="rounded-circle"
      width="40"
      height="40"
      @click="$emit('toggleMessengerMyInfo')"
      style="cursor: pointer"
    />
    <div class="d-flex form-control align-items-center gap-2 w-100">
      <Search :size="20" color="var(--bs-secondary-text-emphasis)" />
      <input
        type="text"
        placeholder="Поиск..."
        class="border-0 bg-transparent w-100"
        style="outline: none"
      />
    </div>
  </div>

  <div class="mt-2">
    <h5 class="fw-bold my-2">Чаты</h5>
    <ul class="list-unstyled mb-0">
      <li
        v-for="chat in chatsList"
        :key="chat.id"
        class="hover-section rounded p-2"
        :class="activeDialog === chat.id ? 'bg-gray-subtle' : ''"
        @click="$emit('openDialog', chat.id)"
      >
        <div class="d-flex align-items-center gap-2">
          <img :src="chat.image" :alt="chat.name" class="rounded-circle" width="40" />
          <div class="d-flex flex-column w-100">
            <div class="d-flex justify-content-between lh-sm">
              <span class="fw-bold">{{ chat.name }}</span>
              <span class="text-muted small">{{ chat.message.time }}</span>
            </div>
            <span class="text-muted small">{{ chat.message.last }}</span>
          </div>
        </div>
      </li>
    </ul>

    <h5 class="fw-bold my-2">Контакты</h5>
    <ul class="list-unstyled mb-0">
      <li v-for="contact in contactsList" :key="contact.id" class="rounded px-2 py-1 mb-1">
        <div class="d-flex align-items-center gap-2">
          <img :src="contact.image" :alt="contact.name" class="rounded-circle" width="40" />
          <div class="d-flex flex-column w-100 lh-sm">
            <span class="fw-bold">{{ contact.name }}</span>
            <span class="text-muted small">{{ contact.online ? 'в сети' : 'был(а) недавно' }}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss"></style>
