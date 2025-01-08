<script setup>
import { computed, ref } from 'vue'
import ModalCenter from '@/components/ModalCenter.vue'
import SubmitForm from '@/pages/roles/SubmitForm.vue'

const props = defineProps({
  headers: { type: Array, required: true },
  rows: { type: Array, required: true },
  rowsPerPage: { type: Number, default: 5 },
  searchQuery: { type: String, default: '' },
})

const data = ref(props.rows)

// Параметры пагинации
const filterStatus = ref('')
const currentPage = ref(1)

// Фильтрация и поиск
const filteredRows = computed(() => {
  return data.value.filter((row) => {
    const matchesSearch = row.name.toLowerCase().includes(props.searchQuery.toLowerCase())
    const matchesFilter = filterStatus.value ? row.status === filterStatus.value : true
    return matchesSearch && matchesFilter
  })
})

// Пагинация
const paginatedRows = computed(() => {
  const start = (currentPage.value - 1) * props.rowsPerPage
  const end = start + props.rowsPerPage
  return filteredRows.value.slice(start, end)
})

// Цвета ролей
const roleColors = ref({
  Админ: 'bg-primary-subtle text-primary',
  Менеджер: 'bg-warning-subtle text-warning',
  Поддержка: 'bg-info-subtle text-info',
  Пользователь: 'bg-success-subtle text-success',
  Гость: 'bg-secondary-subtle text-secondary',
})

// Удаление ролей
const deletePermission = (permissionId) => {
  data.value = data.value.filter((permission) => permission.id !== permissionId)
}
</script>

<template>
  <div class="table-responsive">
    <table class="table table-hover">
      <thead>
        <tr>
          <th v-for="(header, index) in headers" :key="index" scope="col" class="fw-bold">
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        <tr v-for="row in paginatedRows" :key="row.id">
          <td>{{ row.name }}</td>
          <td>
            <div class="d-flex flex-wrap gap-2">
              <small
                v-for="(role, index) in row.roles"
                :key="index"
                :class="roleColors[role] + ' rounded px-2 py-1'"
                style="cursor: pointer"
              >
                {{ role }}
              </small>
            </div>
          </td>
          <td>
            {{
              new Date(+row.date * 1000).toLocaleDateString('ru-RU', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
              })
            }}
          </td>
          <td>
            <div class="d-flex align-items-center flex-wrap gap-2">
              <button
                class="btn btn-sm btn-outline-primary"
                data-bs-toggle="modal"
                data-bs-target="#roleEdit"
              >
                Изменить
              </button>
              <button @click="deletePermission(row.id)" class="btn btn-sm btn-outline-primary">
                Удалить
              </button>
              <ModalCenter title="Изменить настройку доступа" modalId="roleEdit">
                <div class="bg-warning-subtle text-warning lh-sm rounded p-3 mb-3">
                  <b>Внимание!</b><br />
                  Изменив имя разрешения, вы можете нарушить функциональность системных разрешений.
                  Пожалуйста, убедитесь, что вы абсолютно уверены, прежде чем продолжить.
                </div>
                <SubmitForm />
              </ModalCenter>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped lang="scss"></style>
