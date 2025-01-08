<script setup>
import { MessageCircle, UserCheck, UserPlus } from 'lucide-vue-next'
import { computed, ref } from 'vue'

const props = defineProps({
  avatar: { type: Function, required: true },
  fullName: { type: String, required: true },
  role: { type: String, default: 'Нет информации' },
  tags: { type: Array, default: () => [] },
  projects: { type: Number, default: 0 },
  tasks: { type: Number, default: 0 },
  connections: { type: Number, default: 0 },
  connected: { type: Boolean, default: false },
})

const isConnected = ref(props.connected)

const toggleConnection = () => {
  isConnected.value = !isConnected.value
}

const connectedIcon = computed(() => (isConnected.value ? UserCheck : UserPlus))
</script>

<template>
  <div class="card h-100">
    <div class="d-flex flex-column align-items-center justify-content-center gap-3">
      <div class="avatar" style="width: 100px; height: 100px">
        <img
          :src="'/src/assets/avatars/' + avatar + '.png'"
          :alt="fullName"
          class="rounded-circle"
        />
      </div>
      <div class="d-flex flex-column gap-1">
        <h5 class="card-title mb-0 text-center">{{ fullName }}</h5>
        <small class="text-center">{{ role }}</small>
      </div>
      <div v-if="tags" class="d-flex justify-content-center w-75">
        <ul class="list-unstyled d-flex gap-2 mb-0">
          <li v-for="(tag, index) in tags" :key="index">
            <span class="badge bg-primary" style="cursor: pointer">{{ tag }}</span>
          </li>
        </ul>
      </div>
      <div class="row">
        <div class="col-4 d-flex flex-column align-items-center justify-content-center">
          <div class="fs-5 fw-bold">{{ projects }}</div>
          <div class="fs-6">Проекты</div>
        </div>
        <div class="col-4 d-flex flex-column align-items-center justify-content-center">
          <div class="fs-5 fw-bold">{{ tasks }}</div>
          <div class="fs-6">Задачи</div>
        </div>
        <div class="col-4 d-flex flex-column align-items-center justify-content-center">
          <div class="fs-5 fw-bold">{{ connections }}</div>
          <div class="fs-6">Связи</div>
        </div>
      </div>
      <div class="d-flex justify-content-center gap-2">
        <button
          @click="toggleConnection()"
          class="btn"
          :class="isConnected ? 'btn-primary' : 'btn-outline-primary'"
        >
          <span class="d-flex align-items-center gap-2">
            <span class="icon-flex"><component :is="connectedIcon" :size="20" /></span>

            {{ isConnected ? 'В контакте' : 'Связаться' }}
          </span>
        </button>
        <button class="btn btn-outline-dark">
          <span class="d-flex icon-flex"><MessageCircle :size="22" /></span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
