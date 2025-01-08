<script setup>
import { ChevronRight } from 'lucide-vue-next'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Состояния формы
const email = ref('')
const emailError = ref('')
const isCorrectEmail = ref(false)

// Проверка email
const validateEmail = () => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.]+$/

  emailError.value = !email.value.trim()
    ? 'Email обязателен.'
    : !emailRegex.test(email.value)
      ? 'Введите корректный email.'
      : ''
}

// Обработчик формы
const submitForm = () => {
  validateEmail()
  if (emailError.value) return

  isCorrectEmail.value = true

  setTimeout(() => {
    router.push({ name: 'ResetPassword', query: { email: email.value } })
  }, 1000)
}
</script>

<template>
  <div class="d-flex justify-content-center align-items-center" style="height: 80vh">
    <div class="card" style="width: 500px">
      <div class="auth__title mb-4 fs-3 fw-bold text-center no-select">Сброс пароля</div>

      <div class="mb-3 no-select">
        Для получения инструкции по сбросу пароля, пожалуйста, введите адрес электронной почты.
      </div>

      <form @submit.prevent="submitForm" novalidate>
        <div class="form-floating mb-3 no-select" v-auto-animate>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Email"
            v-model="email"
            :class="{ 'is-invalid': emailError }"
            required
          />
          <label for="email no-select">Введите ваш email</label>
          <div v-if="emailError" class="invalid-feedback">
            {{ emailError }}
          </div>
        </div>
        <button type="submit" class="btn btn-primary w-100" :disabled="isCorrectEmail">
          <span
            v-if="isCorrectEmail"
            class="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          {{ isCorrectEmail ? 'Проверяем...' : 'Продолжить' }}
          <span v-if="!isCorrectEmail" class="icon-">
            <ChevronRight :size="18" />
          </span>
        </button>
      </form>

      <div class="mt-3 link-primary text-center no-select">
        <RouterLink :to="{ name: 'Login' }" class="text-decoration-none">
          Вернуться обратно
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
