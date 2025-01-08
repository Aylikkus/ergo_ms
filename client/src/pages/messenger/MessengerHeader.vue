<script setup>
import { EllipsisVertical, Menu, Phone, Search, Video } from 'lucide-vue-next'
import { ref } from 'vue'
import DropDown from '@/components/DropDown.vue'

defineProps({
  activeDialog: { type: Number, required: true, default: 1 },
})

const headerActions = ref([Phone, Video, Search])

const user = ref([
  { image: '/src/assets/avatars/avatar-32.png', name: 'Алиса Михайлова', status: 'в сети' },
  { image: '/src/assets/avatars/avatar-21.png', name: 'Игорь Петров', status: 'был(а) недавно' },
  { image: '/src/assets/avatars/avatar-26.png', name: 'Ваня Ломоносов', status: 'был(а) недавно' },
])
</script>

<template>
  <div class="card p-0 shadow-none rounded-0 pb-2 border-bottom">
    <div class="d-flex align-items-center gap-2">
      <div
        class="messenger-burger rounded p-1 hover-section"
        @click="$emit('toggleMessengerMenu', true)"
      >
        <Menu />
      </div>

      <div class="d-flex justify-content-between w-100">
        <div
          class="d-flex align-items-center gap-2 w-75"
          @click="$emit('toggleMessengerBuddyInfo')"
          style="cursor: pointer"
        >
          <img
            :src="user[activeDialog - 1].image"
            :alt="user[activeDialog - 1].name"
            class="rounded-circle"
            width="40"
            height="40"
          />
          <div class="d-flex flex-column">
            <h6 class="fw-bold mb-0">{{ user[activeDialog - 1].name }}</h6>
            <div class="text-muted small">{{ user[activeDialog - 1].status }}</div>
          </div>
        </div>

        <ul class="d-flex align-items-center list-unstyled mb-0">
          <li
            v-for="(action, index) in headerActions"
            :key="index"
            class="connection-action hover-section rounded p-2"
          >
            <component :is="action" :size="20" />
          </li>
          <DropDown dropdownMenuClass="dropdown-menu-end">
            <template #main>
              <li class="hover-section"><EllipsisVertical :size="20" /></li>
            </template>
            <template #list>
              <li class="dropdown-item">Поиск</li>
              <li class="dropdown-item">Аудиозвонок</li>
              <li class="dropdown-item">Видеозвонок</li>
              <li class="dropdown-item">Очистить чат</li>
            </template>
          </DropDown>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@media (width >= 992px) {
  .messenger-burger {
    display: none;
  }
}

@media (width <= 767px) {
  .connection-action {
    display: none;
  }
}
</style>
