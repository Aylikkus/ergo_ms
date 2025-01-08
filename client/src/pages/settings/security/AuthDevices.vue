<script setup>
import { LaptopMinimal, Monitor, Smartphone } from 'lucide-vue-next'
import { ref } from 'vue'

const sessions = ref([
  {
    icon: Monitor,
    name: 'Windows',
    geo: {
      city: 'Москва',
      active: true,
      date: new Date('2024-11-11 12:47:35'),
    },
  },
  {
    icon: Smartphone,
    name: 'iPhone',
    geo: {
      city: 'Москва',
      active: false,
      date: new Date('2024-11-10 18:56:17'),
    },
  },
  {
    icon: LaptopMinimal,
    name: 'Mac OS',
    geo: {
      city: 'Москва',
      active: false,
      date: new Date('2024-11-09 21:44:37'),
    },
  },
])

// Удаление сессии по индексу
function removeSession(index) {
  this.sessions.splice(index, 1)
}
</script>

<template>
  <div class="card h-100">
    <h5 class="card-title">Мои устройства</h5>
    <div class="d-flex flex-column gap-2" v-auto-animate>
      <div v-for="(session, index) in sessions" :key="index" class="d-flex justify-content-between">
        <div class="d-flex align-items-center gap-2">
          <component
            :is="session.icon"
            :color="session.geo.active ? 'var(--color-accent)' : 'var(--color-secondary-text)'"
            :size="24"
          />
          <div class="d-flex flex-column lh-sm">
            <div class="fw-bold">{{ session.name }}</div>
            <div class="d-flex gap-1">
              <div class="settings__session-city">{{ session.geo.city }}</div>
              <div :class="session.geo.active ? 'text-success' : ''">
                {{ session.geo.active ? 'Активно' : session.geo.date.toLocaleString('ru-RU') }}
              </div>
            </div>
          </div>
        </div>
        <div v-if="!session.geo.active">
          <button
            class="btn-close"
            title="Завершить сессию"
            aria-label="Завершить сессию"
            @click="removeSession(index)"
          ></button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
