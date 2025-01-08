<script setup>
import { ref } from 'vue'
import { Github, Instagram, Linkedin, Twitch, Twitter } from 'lucide-vue-next'

const connectedAccounts = ref([
  {
    id: 1,
    color: 'info',
    icon: Linkedin,
    name: 'LinkedIn',
    description: 'Социальная сеть',
    active: true,
  },
  {
    id: 2,
    color: 'gray',
    icon: Github,
    name: 'Github',
    description: 'Git-репозитории и открытый код',
    active: true,
  },
  {
    id: 3,
    color: 'pink',
    icon: Instagram,
    name: 'Instagram',
    description: 'Социальная сеть',
    active: false,
  },
  {
    id: 4,
    color: 'blue',
    icon: Twitter,
    name: 'Twitter',
    description: 'Социальная сеть',
    active: false,
  },
  {
    id: 5,
    color: 'indigo',
    icon: Twitch,
    name: 'Twitch',
    description: 'Стриминговая платформа',
    active: true,
  },
])
</script>

<template>
  <div class="card">
    <h5 class="card-title mb-3">Связанные аккаунты</h5>
    <div class="row row-gap-2">
      <div v-for="(account, index) in connectedAccounts" :key="index" class="col-12 col-md-6">
        <div class="d-flex justify-content-between">
          <div class="d-flex align-items-center gap-2 w-75">
            <div
              class="d-block rounded p-2"
              :class="`bg-${account.color}-subtle text-${account.color}`"
            >
              <div class="d-flex">
                <component v-if="account.icon" :is="account.icon" :size="22" />
              </div>
            </div>
            <div class="d-block lh-sm w-75 text-truncate">
              <h6 class="mb-0" :title="account.name">{{ account.name }}</h6>
              <small :title="account.description">{{ account.description }}</small>
            </div>
          </div>
          <div class="d-block">
            <div class="form-check form-switch mb-0">
              <input type="checkbox" class="form-check-input" :checked="account.active" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
