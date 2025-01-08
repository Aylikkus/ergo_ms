<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isAllRight = ref(false)

// Форма
const form = reactive({
  newPassword: '',
  confirmPassword: '',
})

// Ошибки валидации
const errors = reactive({
  passwordError: null,
  confirmPasswordError: null,
})

// Проверка пароля
const validatePassword = () => {
  errors.passwordError = !form.newPassword.trim()
    ? 'Пароль обязателен.'
    : form.newPassword.length < 8
      ? 'Пароль должен содержать не менее 8 символов.'
      : ''
}

// Проверка совпадения пароля
const validateConfirmPassword = () => {
  errors.confirmPasswordError =
    form.confirmPassword !== form.newPassword ? 'Пароли не совпадают.' : ''
}

// Проверка всей формы
const validateForm = () => {
  validatePassword()
  validateConfirmPassword()
  return !errors.passwordError && !errors.confirmPasswordError
}

// Обработчик формы
const submitForm = () => {
  if (validateForm()) {
    isAllRight.value = true

    setTimeout(() => {
      router.push({ name: 'Login' })
    }, 2000)
  }
}
</script>

<template>
  <div class="d-flex align-items-center justify-content-center" style="height: 80vh">
    <div class="card" style="width: 500px">
      <div class="auth__title mb-4 fs-3 fw-bold text-center no-select">Сброс пароля</div>

      <div class="mb-3 no-select">Ваш новый пароль должен отличаться от ранее использовавшихся паролей</div>

      <form @submit.prevent="submitForm" novalidate>
        <div class="form-floating mb-3" v-auto-animate>
          <input
            type="password"
            class="form-control"
            id="newPassword"
            placeholder="Новый пароль"
            v-model="form.newPassword"
            :class="{ 'is-invalid': errors.passwordError }"
          />
          <label for="newPassword no-select">Введите новый пароль</label>
          <div v-if="errors.passwordError" class="invalid-feedback no-select">
            {{ errors.passwordError }}
          </div>
        </div>

        <div class="form-floating mb-3" v-auto-animate>
          <input
            type="password"
            class="form-control no-select"
            id="confirmPassword"
            placeholder="Подтвердите новый пароль"
            v-model="form.confirmPassword"
            :class="{ 'is-invalid': errors.confirmPasswordError }"
          />
          <label for="confirmPassword no-select">Подтвердите новый пароль</label>
          <div v-if="errors.confirmPasswordError" class="invalid-feedback no-select">
            {{ errors.confirmPasswordError }}
          </div>
        </div>
        <button type="submit" class="btn btn-primary w-100" :disabled="isAllRight">
          <span
            v-if="isAllRight"
            class="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          {{ isAllRight ? 'Обновляем пароль...' : 'Обновить пароль' }}
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
