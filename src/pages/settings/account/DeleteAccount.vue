<script setup>
import { CircleAlert, CircleCheck, TriangleAlert } from 'lucide-vue-next'
import { ref } from 'vue'
import ModalCenter from '@/components/ModalCenter.vue'

const isConfirmed = ref(null)
const feedbackInvalid = ref(false)

// Проверка валидации
const checkValidation = () => {
  feedbackInvalid.value = !feedbackInvalid.value
}

// Отправка формы
const submitForm = () => {
  checkValidation()
}
</script>

<template>
  <div class="card">
    <h5 class="mb-3">Удалить аккаунт</h5>
    <div
      class="d-flex align-items-center gap-2 bg-warning-subtle text-warning-emphasis rounded p-3 mb-3"
    >
      <TriangleAlert :size="38" />
      <div class="d-flex flex-column lh-sm">
        <div class="fw-bold">Внимание!</div>
        <div>Восстановление данных аккаунта будет невозможным.</div>
      </div>
    </div>

    <form @submit.prevent="submitForm" novalidate>
      <div class="form-check mb-3" v-auto-animate>
        <input
          class="form-check-input"
          type="checkbox"
          id="confirmDelete"
          v-model="isConfirmed"
          @change="checkValidation"
          required
        />
        <label class="form-check-label" for="confirmDelete">
          Я подтверждаю удаление аккаунта
        </label>
        <div v-if="!feedbackInvalid && isConfirmed === false" class="invalid-feedback d-block">
          Пожалуйста, подтвердите удаление аккаунта.
        </div>
      </div>
      <button
        type="submit"
        class="btn btn-primary"
        :disabled="!isConfirmed"
        data-bs-toggle="modal"
        data-bs-target="#deleteAccount"
      >
        Удалить аккаунт
      </button>
    </form>

    <ModalCenter title="Подтвердите удаление" modal-id="deleteAccount">
      <div class="d-flex flex-column align-items-center gap-3">
        <CircleAlert :size="96" color="var(--bs-danger)" :stroke-width="1.5" />
        <h6 class="text-center w-75">
          Вы уверены в своём решении? Это последняя возможность сохранить аккаунт.
        </h6>
        <div class="d-flex gap-2">
          <button
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#deleteAccountConfirm"
          >
            Подтвердить
          </button>
          <button class="btn btn-secondary" data-bs-dismiss="modal">Отменить</button>
        </div>
      </div>
    </ModalCenter>

    <ModalCenter title="Успешно удалено" modal-id="deleteAccountConfirm">
      <div class="d-flex flex-column align-items-center gap-3">
        <CircleCheck :size="96" color="var(--bs-success)" :stroke-width="1.5" />
        <h5 class="text-center w-75">Аккаунт удалён</h5>
      </div>
    </ModalCenter>
  </div>
</template>

<style scoped lang="scss"></style>
