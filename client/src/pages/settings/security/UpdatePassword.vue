<script setup>
import { computed, ref } from 'vue'
import { Eye, EyeOff } from 'lucide-vue-next'

// Состояния видимости для полей пароля
const isCurrentPasswordVisible = ref(false)
const isNewPasswordVisible = ref(false)
const isConfirmPasswordVisible = ref(false)

// Поля формы и ошибки
const form = ref({
  currentPassword: '',
  newPassword: '',
  confirmPassword: '',
})

const errors = ref({
  currentPassword: '',
  newPassword: '',
  confirmPassword: '',
})

// Переключение видимости пароля
const togglePasswordVisibility = (type) => {
  switch (type) {
    case 'currentPassword':
      isCurrentPasswordVisible.value = !isCurrentPasswordVisible.value
      break
    case 'newPassword':
      isNewPasswordVisible.value = !isNewPasswordVisible.value
      break
    case 'confirmPassword':
      isConfirmPasswordVisible.value = !isConfirmPasswordVisible.value
      break
  }
}

// Тип ввода для полей
const currentPasswordFieldType = computed(() =>
  isCurrentPasswordVisible.value ? 'text' : 'password',
)
const newPasswordFieldType = computed(() => (isNewPasswordVisible.value ? 'text' : 'password'))
const confirmPasswordFieldType = computed(() =>
  isConfirmPasswordVisible.value ? 'text' : 'password',
)

// Иконки для кнопок
const currentPasswordIcon = computed(() => (isCurrentPasswordVisible.value ? Eye : EyeOff))
const newPasswordIcon = computed(() => (isNewPasswordVisible.value ? Eye : EyeOff))
const confirmPasswordIcon = computed(() => (isConfirmPasswordVisible.value ? Eye : EyeOff))

// Проверка пароля
const validateForm = () => {
  let isValid = true
  cleanErrors()

  if (!form.value.currentPassword) {
    errors.value.currentPassword = 'Введите текущий пароль'
    isValid = false
  }

  if (form.value.newPassword.length < 8) {
    errors.value.newPassword = 'Пароль должен содержать минимум 8 символов'
    isValid = false
  } else if (!/[a-z]/.test(form.value.newPassword)) {
    errors.value.newPassword = 'Пароль должен содержать хотя бы одну букву в нижнем регистре'
    isValid = false
  } else if (!/[0-9]/.test(form.value.newPassword)) {
    errors.value.newPassword = 'Пароль должен содержать хотя бы одну цифру'
    isValid = false
  }

  if (form.value.newPassword !== form.value.confirmPassword) {
    errors.value.confirmPassword = 'Пароли не совпадают'
    isValid = false
  }

  return isValid
}

// Сброс ошибок
const cleanErrors = () => {
  errors.value = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  }
}

// Обработка формы
const submitForm = (event) => {
  event.preventDefault()
  if (validateForm()) {
    alert('Пароль успешно изменён')
  }
}
</script>

<template>
  <div class="card">
    <h5 class="card-title">Изменить пароль</h5>
    <form @submit="submitForm">
      <div class="row">
        <div class="mb-3 col-md-6">
          <label class="form-label" for="currentPassword">Текущий пароль</label>
          <div class="input-group" v-auto-animate>
            <input
              class="form-control"
              :class="{ 'is-invalid': errors.currentPassword }"
              :type="currentPasswordFieldType"
              id="currentPassword"
              placeholder="············"
              v-model="form.currentPassword"
            />
            <span
              @click="togglePasswordVisibility('currentPassword')"
              class="input-group-text"
              style="cursor: pointer"
            >
              <component :is="currentPasswordIcon" :size="20" />
            </span>
            <div v-if="errors.currentPassword" class="invalid-feedback">
              {{ errors.currentPassword }}
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="mb-3 col-md-6">
          <label class="form-label" for="newPassword">Новый пароль</label>
          <div class="input-group" v-auto-animate>
            <input
              class="form-control"
              :class="{ 'is-invalid': errors.newPassword }"
              :type="newPasswordFieldType"
              id="newPassword"
              placeholder="············"
              v-model="form.newPassword"
            />
            <span
              @click="togglePasswordVisibility('newPassword')"
              class="input-group-text"
              style="cursor: pointer"
            >
              <component :is="newPasswordIcon" :size="20" />
            </span>
            <div v-if="errors.newPassword" class="invalid-feedback">{{ errors.newPassword }}</div>
          </div>
        </div>

        <div class="mb-3 col-md-6">
          <label class="form-label" for="confirmPassword">Подтвердите новый пароль</label>
          <div class="input-group" v-auto-animate>
            <input
              class="form-control"
              :class="{ 'is-invalid': errors.confirmPassword }"
              :type="confirmPasswordFieldType"
              id="confirmPassword"
              placeholder="············"
              v-model="form.confirmPassword"
            />
            <span
              @click="togglePasswordVisibility('confirmPassword')"
              class="input-group-text"
              style="cursor: pointer"
            >
              <component :is="confirmPasswordIcon" :size="20" />
            </span>
            <div v-if="errors.confirmPassword" class="invalid-feedback">
              {{ errors.confirmPassword }}
            </div>
          </div>
        </div>
      </div>

      <div class="rounded p-3 bg-info-subtle">
        <h6 class="text-info-emphasis">Требования к паролю:</h6>
        <ul class="ps-4 mb-0">
          <li class="mb-1 text-info-emphasis">Минимум 8 символов — чем больше, тем лучше.</li>
          <li class="mb-1 text-info-emphasis">Хотя бы один символ нижнего регистра</li>
          <li class="text-info-emphasis">Хотя бы одна цифра, символ или пробельный символ.</li>
        </ul>
      </div>

      <div class="mt-3">
        <button type="submit" class="btn btn-primary me-2">Сохранить</button>
        <button type="reset" class="btn btn-secondary" @click="cleanErrors">Сбросить</button>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
