<script setup>
import { ref } from 'vue'

import { Github, Gitlab, Instagram, Twitch, Twitter, Youtube } from 'lucide-vue-next'

const userTeams = ref([
  { icon: Twitch, color: 'indigo', title: 'Twitch', amount: 72, tag: 'UI/UX' },
  { icon: Github, color: 'gray', title: 'GitHub', amount: 45, tag: 'Разработчик' },
  { icon: Gitlab, color: 'orange', title: 'GitLab', amount: 28, tag: 'Разработчик' },
  { icon: Youtube, color: 'danger', title: 'YouTube', amount: 91, tag: 'Back-end' },
  { icon: Twitter, color: 'blue', title: 'Twitter', amount: 19, tag: 'Front-end' },
  { icon: Instagram, color: 'pink', title: 'Instagram', amount: 56, tag: 'Front-end' },
])

const tagColors = ref({
  'UI/UX': 'orange',
  Разработчик: 'danger',
  'Back-end': 'blue',
  'Front-end': 'pink',
})
</script>

<template>
  <div class="card h-100">
    <h5 class="card-title mb-3">Команды</h5>
    <div class="d-flex gap-2 flex-column">
      <div
        v-for="(team, index) in userTeams"
        :key="index"
        class="d-flex justify-content-between align-items-center"
      >
        <div class="d-flex align-items-center gap-2 w-75">
          <div class="d-flex rounded-circle">
            <span class="rounded icon-flex p-2 text-white" :class="`bg-${team.color}`">
              <component :is="team.icon" v-if="team.icon"></component>
            </span>
          </div>
          <div class="d-flex flex-column text-truncate" style="line-height: 120%">
            <span class="text-truncate" style="font-weight: 500" :title="team.title">
              {{ team.title }}
            </span>
            <small class="text-truncate" :title="team.amount + ' проектов'">
              {{ team.amount }} проектов
            </small>
          </div>
        </div>
        <div class="badge" :class="`bg-${tagColors[team.tag]}-subtle text-${tagColors[team.tag]}`">
          <p class="fw-bold m-0">{{ team.tag }}</p>
        </div>
      </div>
    </div>
    <div class="mt-3 text-center">
      <RouterLink :to="{ name: 'Teams' }" class="text-decoration-none">
        Просмотреть все команды
      </RouterLink>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
