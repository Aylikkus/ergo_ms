<script setup>
import { EllipsisVertical, MessagesSquare, Trash } from 'lucide-vue-next'

import AvatarGroup from '@/components/AvatarGroup.vue'
import DropDown from '@/components/DropDown.vue'

defineProps({
  icon: { type: Function },
  iconBackground: { type: String },
  title: { type: String },
  budget: { type: Object, default: () => ({ current: 0, declared: 0 }) },
  caption: { type: String },
  date: { type: Object, default: () => ({ start: 1800, deadline: 1800 }) },
  hours: { type: Number, default: 0 },
  tasks: { type: Object, default: () => ({ current: 0, all: 0 }) },
})

// Форматирование даты
const formatDate = (timestamp) => {
  const date = new Date(timestamp * 1000)

  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()

  return `${day}.${month}.${year}`
}

// Получение оставшегося времени
const getDaysLeft = (targetTimestamp) => {
  const now = Date.now()
  const targetDate = targetTimestamp * 1000

  const difference = targetDate - now
  const daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24))

  return daysLeft > 0 ? daysLeft : 0
}

// Вычисление процента выполнения
const getPercentProgress = (current, all) => {
  if (!current || !all) return 0
  return Math.round((current / all) * 100)
}
</script>

<template>
  <div class="card">
    <div class="d-flex align-items-center justify-content-between mb-3">
      <div class="d-flex align-items-center gap-2">
        <div class="rounded p-2 text-white icon-flex" :class="iconBackground">
          <component :is="icon" v-if="icon" :size="22" />
        </div>
        <h5 class="card-title mb-0">{{ title }}</h5>
      </div>
      <div class="d-block">
        <DropDown dropdownMenuClass="dropdown-menu-end">
          <template #main>
            <EllipsisVertical :size="20" />
          </template>
          <template #list>
            <li class="dropdown-item text-danger" @click="$emit('leaveProject')">
              <Trash :size="20" /> Покинуть
            </li>
          </template>
        </DropDown>
      </div>
    </div>
    <div class="d-flex align-items-center justify-content-between mb-3">
      <div
        class="d-flex flex-column rounded p-2 bg-success-subtle text-success"
        :class="
          budget['current'] > budget['declared']
            ? 'bg-success-subtle text-success'
            : 'bg-warning-subtle text-warning'
        "
      >
        <div class="fw-bold">Бюджет</div>
        <div class="d-flex gap-1">
          <span class="fw-bold">{{ budget['current'] }} млн</span> /
          <span class="fw-normal">{{ budget['declared'] }} млн</span>
        </div>
      </div>
      <div class="d-flex flex-column py-2">
        <div class="d-flex gap-1 justify-content-end">
          <span class="fw-bold">Начало:</span>
          <span class="fw-normal">{{ formatDate(date['start']) }}</span>
        </div>
        <div class="d-flex gap-1 justify-content-end">
          <span class="fw-bold">Дедлайн:</span>
          <span class="fw-normal">{{ formatDate(date['deadline']) }}</span>
        </div>
      </div>
    </div>
    <div class="project-caption" style="line-height: 120%">{{ caption }}</div>
    <span class="border-top my-3"></span>
    <div class="d-flex align-items-center justify-content-between mb-3">
      <div class="d-flex gap-1">
        <span class="fw-bold">Часов:</span>
        <span class="fw-normal">{{ hours }}</span>
      </div>
      <div
        class="rounded px-2 py-1"
        :class="
          getDaysLeft(date['deadline']) >= 60
            ? 'bg-success-subtle text-success'
            : getDaysLeft(date['deadline']) >= 30
              ? 'bg-warning-subtle text-warning'
              : 'bg-danger-subtle text-danger'
        "
      >
        Осталось {{ getDaysLeft(date['deadline']) }} дней
      </div>
    </div>
    <div class="d-flex align-items-center justify-content-between mb-1" style="font-size: 14px">
      <div class="fw-normal">Задачи: {{ tasks['current'] }} / {{ tasks['all'] }}</div>
      <div class="fw-normal">
        Выполнено: {{ getPercentProgress(tasks['current'], tasks['all']) }}%
      </div>
    </div>
    <div class="progress mb-3" role="progressbar">
      <div
        class="progress-bar rounded"
        :style="{ width: getPercentProgress(tasks['current'], tasks['all']) + '%' }"
      ></div>
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <AvatarGroup />
      <div class="icon-flex hover-outline px-2 py-1 rounded" style="cursor: pointer">
        <MessagesSquare :size="22" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.project-caption {
  @include truncate-text(2);
}

.hover-outline {
  transition: all $transition;

  &:hover {
    background-color: var(--color-secondary-background);
  }
}
</style>
