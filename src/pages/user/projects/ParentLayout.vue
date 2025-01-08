<script setup>
import { Github, Gitlab, Instagram, Twitch, Twitter, Youtube } from 'lucide-vue-next'
import { ref } from 'vue'

import CardProject from '@/pages/user/projects/CardProject.vue'

const userProjects = ref([
  {
    id: 1,
    icon: Twitch,
    iconBackground: 'bg-indigo',
    title: 'Twitch',
    budget: { current: 12.6, declared: 10.9 },
    caption:
      'Создаём захватывающие трансляции и уникальный контент для живого общения с аудиторией.',
    date: { start: 1704056400, deadline: 1740776400 },
    hours: 240,
    tasks: { current: 290, all: 344 },
  },
  {
    id: 2,
    icon: Github,
    iconBackground: 'bg-gray',
    title: 'Github',
    budget: { current: 2.6, declared: 1.9 },
    caption: 'Разрабатываем, сотрудничаем и делимся инновационными решениями в коде.',
    date: { start: 1706734800, deadline: 1736456400 },
    hours: 320,
    tasks: { current: 98, all: 135 },
  },
  {
    id: 3,
    icon: Gitlab,
    iconBackground: 'bg-orange',
    title: 'Gitlab',
    budget: { current: 2.4, declared: 1.5 },
    caption: 'Создаём инструменты для совместной работы, CI/CD и управления проектами.',
    date: { start: 1706734800, deadline: 1737752400 },
    hours: 300,
    tasks: { current: 421, all: 430 },
  },
  {
    id: 4,
    icon: Youtube,
    iconBackground: 'bg-red',
    title: 'Youtube',
    budget: { current: 32.8, declared: 54.9 },

    caption: 'Разрабатываем видеоплатформу для создания, просмотра и монетизации контента.',
    date: { start: 1718830800, deadline: 1767214800 },
    hours: 512,
    tasks: { current: 393, all: 1120 },
  },
  {
    id: 5,
    icon: Instagram,
    iconBackground: 'bg-pink',
    title: 'Instagram',
    budget: { current: 24.0, declared: 25.5 },
    date: { start: 1727730000, deadline: 1740776400 },
    caption: 'Разрабатываем видеоплатформу для создания, просмотра и монетизации контента.',
    hours: 280,
    tasks: { current: 101, all: 285 },
  },
  {
    id: 6,
    icon: Twitter,
    iconBackground: 'bg-blue',
    title: 'Twitter',
    budget: { current: 12.6, declared: 12.4 },
    date: { start: 1726347600, deadline: 1734642000 },
    caption: 'Работаем над созданием платформы для кратких и динамичных сообщений.',
    hours: 340,
    tasks: { current: 84, all: 649 },
  },
])

const leaveProject = (projectId) => {
  userProjects.value = userProjects.value.filter((project) => project.id !== projectId)
}
</script>

<template>
  <div class="row" v-auto-animate>
    <div
      v-for="(project, index) in userProjects"
      :key="index"
      class="col-12 col-sm-6 col-lg-4 mb-4"
    >
      <CardProject
        :icon="project.icon"
        :icon-background="project.iconBackground"
        :title="project.title"
        :budget="project.budget"
        :caption="project.caption"
        :date="project.date"
        :hours="project.hours"
        :tasks="project.tasks"
        @leaveProject="leaveProject(project.id)"
      />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
