<script setup>
import CardWorker from '@/pages/user/connections/CardWorker.vue'

import { ref } from 'vue'

const userWorkers = ref([
  {
    avatar: 'avatar-2',
    fullName: 'Дмитрий Сергеевич',
    role: 'UX Дизайнер',
    tags: ['Figma', 'Sketch'],
    projects: 18,
    tasks: 834,
    connections: 129,
    connected: true,
  },
  {
    avatar: 'avatar-3',
    fullName: 'Михаил Алексеевич',
    role: 'UX Дизайнер',
    tags: ['Angular', 'React'],
    projects: 18,
    tasks: 834,
    connections: 129,
    connected: false,
  },
  {
    avatar: 'avatar-4',
    fullName: 'Елена Васильевна',
    role: 'Разработчик',
    tags: ['Vue', 'HTML'],
    projects: 18,
    tasks: 834,
    connections: 129,
    connected: false,
  },
  {
    avatar: 'avatar-5',
    fullName: 'Ольга Николаевна',
    role: 'UI/UX Дизайнер',
    tags: ['Figma', 'Sketch'],
    projects: 18,
    tasks: 834,
    connections: 129,
    connected: true,
  },
  {
    avatar: 'avatar-6',
    fullName: 'Владимир Михайлович',
    role: 'UI/UX Дизайнер',
    tags: ['Figma', 'Sketch', 'Photoshop'],
    projects: 18,
    tasks: 834,
    connections: 129,
    connected: true,
  },
  {
    avatar: 'avatar-7',
    fullName: 'Ксения Петровна',
    role: 'Full Stack Разработчик',
    tags: ['React', 'Angular', 'Node.js'],
    projects: 18,
    tasks: 834,
    connections: 129,
    connected: false,
  },
])
</script>

<template>
  <div class="row">
    <div v-for="(worker, index) in userWorkers" :key="index" class="col-12 col-sm-6 col-lg-4 mb-4">
      <CardWorker
        :avatar="worker.avatar"
        :fullName="worker.fullName"
        :role="worker.role"
        :tags="worker.tags"
        :projects="worker.projects"
        :tasks="worker.tasks"
        :connections="worker.connections"
        :connected="worker.connected"
      />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
