<script setup>
import { ref } from 'vue'
import { UserCheck, UserMinus } from 'lucide-vue-next'

const userConnections = ref([
  { avatar: 'avatar-4', fullName: 'Анастасия Ивановна', amount: 123, connected: true },
  { avatar: 'avatar-2', fullName: 'Дмитрий Сергеевич', amount: 421, connected: false },
  { avatar: 'avatar-5', fullName: 'Елена Васильевна', amount: 67, connected: false },
  { avatar: 'avatar-3', fullName: 'Михаил Алексеевич', amount: 219, connected: true },
  { avatar: 'avatar-7', fullName: 'Ольга Николаевна', amount: 482, connected: true },
  { avatar: 'avatar-10', fullName: 'Владимир Михайлович', amount: 91, connected: false },
])

const toggleConnection = (index) => {
  userConnections.value[index].connected = !userConnections.value[index].connected
}

const followButton = (status) => {
  return status ? UserMinus : UserCheck
}
</script>

<template>
  <div class="card h-100">
    <h5 class="card-title mb-3">Связи</h5>
    <div class="d-flex gap-2 flex-column">
      <div
        v-for="(connection, index) in userConnections"
        :key="index"
        class="d-flex justify-content-between align-items-center"
      >
        <div class="d-flex gap-2 w-75">
          <div class="avatar">
            <img
              :src="`/src/assets/avatars/${connection.avatar}.png`"
              :alt="connection.fullName"
              class="rounded-circle"
            />
          </div>
          <div class="d-flex flex-column text-truncate" style="line-height: 120%">
            <span class="text-truncate" style="font-weight: 500" :title="connection.fullName">
              {{ connection.fullName }}
            </span>
            <small class="text-truncate" :title="connection.amount + ' проектов'">
              {{ connection.amount }} проектов
            </small>
          </div>
        </div>
        <div class="d-flex icon-flex ms-2">
          <button
            @click="toggleConnection(index)"
            class="rounded btn btn-sm"
            :class="`${connection.connected ? 'btn-outline-primary' : 'btn-primary'}`"
            style="cursor: pointer"
          >
            <component :is="followButton(connection.connected)" :size="18"></component>
          </button>
        </div>
      </div>
    </div>
    <div class="mt-3 text-center">
      <RouterLink :to="{ name: 'Connections' }" class="text-decoration-none">
        Просмотреть все связи
      </RouterLink>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
