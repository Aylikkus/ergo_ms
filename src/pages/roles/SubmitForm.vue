<script setup>
import { ref } from 'vue'

const name = ref('')
const showError = ref(false)

const submitForm = () => {
  if (!name.value.trim()) {
    showError.value = true
  } else {
    showError.value = false
    name.value = ''
  }
}
</script>

<template>
  <form @submit.prevent="submitForm" novalidate>
    <div class="form-floating mb-3" v-auto-animate>
      <input
        type="text"
        id="nameInput"
        class="form-control"
        v-model="name"
        :class="{ 'is-invalid': showError }"
        placeholder="Введите название"
      />
      <label for="nameInput">Введите название</label>
      <div v-if="showError" class="invalid-feedback">Название обязательно для заполнения.</div>
    </div>

    <div class="mt-3 text-end">
      <button type="submit" class="btn btn-primary" :data-bs-dismiss="name !== '' ? 'modal' : ''">
        Добавить
      </button>
    </div>
  </form>
</template>

<style scoped lang="scss"></style>
