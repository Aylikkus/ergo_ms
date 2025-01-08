<script setup>
import { Github, Gitlab, Instagram, Pocket, Twitch, Twitter, Youtube } from 'lucide-vue-next'
import { ref } from 'vue'

import CardTeam from '@/pages/user/teams/CardTeam.vue'

const userTeams = ref([
  {
    id: 1,
    icon: Twitch,
    iconBackground: 'bg-indigo',
    title: 'Twitch',
    amount: 72,
    caption:
      'Разработка платформы для стриминга игр и видео. ' +
      'Создание инструменты для стримеров и зрителей, ' +
      'чтобы сделать опыт просмотра более интерактивным и увлекательным.',
  },
  {
    id: 2,
    icon: Github,
    iconBackground: 'bg-gray',
    title: 'GitHub',
    amount: 45,
    caption:
      'Хранение и совместной разработки кода, создание инструментов для разработчиков, ' +
      'чтобы упростить процесс написания и обмена кодом.',
  },
  {
    id: 3,
    icon: Gitlab,
    iconBackground: 'bg-orange',
    title: 'GitLab',
    amount: 28,
    caption:
      'Разработка платформы для управления проектами и совместной разработки кода. ' +
      'Создание инструментов для команд разработчиков, ' +
      'чтобы упростить процесс разработки и тестирования.',
  },
  {
    id: 4,
    icon: Youtube,
    iconBackground: 'bg-red',
    title: 'YouTube',
    amount: 91,
    caption:
      'Разработка платформы для видеохостинга и рекомендации видео. ' +
      'Создание алгоритмов, чтобы рекомендовать пользователям видео, ' +
      'которые им могут понравиться.',
  },
  {
    id: 5,
    icon: Twitter,
    iconBackground: 'bg-blue',
    title: 'Twitter',
    amount: 19,
    caption:
      'Разработка платформы для обмена сообщениями в реальном времени. ' +
      'Создание инструменты для пользователей, ' +
      'чтобы упростить процесс общения и обмена информацией.',
  },
  {
    id: 6,
    icon: Instagram,
    iconBackground: 'bg-pink',
    title: 'Instagram',
    amount: 56,
    caption:
      'Разработка платформы для обмена фотографиями и видео. ' +
      'Создание инструменты для пользователей, ' +
      'чтобы упростить процесс создания и обмена контентом.',
  },
  {
    id: 7,
    icon: Pocket,
    iconBackground: 'bg-red',
    title: 'Pocket',
    amount: 34,
    caption:
      'Разработка платформы для хранение фотографий и видео. ' +
      'Создание инструменты для пользователей, ' +
      'чтобы упростить процесс создания и обмена контентом.',
  },
])

const leaveTeam = (teamId) => {
  userTeams.value = userTeams.value.filter((team) => team.id !== teamId)
}
</script>

<template>
  <div class="row" v-auto-animate>
    <div v-for="(team, index) in userTeams" :key="index" class="col-12 col-sm-6 col-lg-4 mb-4">
      <CardTeam
        :icon="team.icon"
        :icon-background="team.iconBackground"
        :title="team.title"
        :caption="team.caption"
        @leaveTeam="leaveTeam(team.id)"
      />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
