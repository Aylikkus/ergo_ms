<script setup>
import { ChevronRight } from 'lucide-vue-next'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const step = ref(1)
const isSubmitting = ref(false)

// Проверка телефона
const phone = ref('')
const phoneError = ref('')

const validatePhone = () => {
  const phoneRegex = /^\+?\d{10,15}$/

  phoneError.value = !phone.value.trim()
    ? 'Номер телефона обязателен.'
    : !phoneRegex.test(phone.value)
      ? 'Введите корректный номер телефона.'
      : ''
}

// Отправка кода
const isSendingCode = ref(false)
const codeInputs = ref(['', '', '', '', '', ''])

const sendCode = () => {
  validatePhone()
  if (phoneError.value) return

  isSendingCode.value = true

  setTimeout(() => {
    isSendingCode.value = false
    step.value = 2
  }, 2000)
}

// Переключение фокуса на следующее поле
const focusNext = (index) => {
  if (codeInputs.value[index].length === 1 && index < 5) {
    const nextInput = document.querySelectorAll("input[type='text']")[index + 1]
    if (nextInput) nextInput.focus()
    if (index === 6) submitForm()
  }
}

// Обработка формы
const submitForm = () => {
  if (codeInputs.value.some((input) => !input.trim())) return

  isSubmitting.value = true

  setTimeout(() => {
    router.push({ name: 'Home' })
  }, 2000)
}

// Повторная отправка кода
const countdownTime = ref(10)
const isCooldown = ref(false)
const countdownMessage = ref('Повторить')

// Запуск обратного отсчета
const startCountdown = () => {
  if (isCooldown.value) return

  isCooldown.value = true
  countdownMessage.value = `Повторить через ${countdownTime.value} сек.`

  let remainingTime = countdownTime.value
  const timer = setInterval(() => {
    remainingTime -= 1
    if (remainingTime > 0) {
      countdownMessage.value = `Повторить через ${remainingTime} сек.`
    } else {
      clearInterval(timer)
      isCooldown.value = false
      countdownMessage.value = 'Повторить'
    }
  }, 1000)
}
</script>

<template>
  <div class="d-flex align-items-center justify-content-center" style="height: 80vh">
    <div class="card" style="width: 500px">
      <div class="auth__title mb-3 fs-3 fw-bold text-center">Верификация аккаунта</div>

      <form @submit.prevent="submitForm" novalidate>
        <div v-if="step === 1">
          <div class="form-floating mb-3" v-auto-animate>
            <input
              type="tel"
              id="phone"
              class="form-control"
              :class="{ 'is-invalid': phoneError }"
              v-model="phone"
              placeholder="Номер телефона"
            />
            <label for="phone">Номер телефона</label>
            <div v-if="phoneError" class="invalid-feedback">
              {{ phoneError }}
            </div>
          </div>
          <button
            type="button"
            class="btn btn-primary w-100"
            @click="sendCode"
            :disabled="isSendingCode"
          >
            <span
              v-if="isSendingCode"
              class="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            {{ isSendingCode ? 'Отправляем код...' : 'Продолжить' }}
            <span v-if="!isSendingCode" class="icon-">
              <ChevronRight :size="18" />
            </span>
          </button>
        </div>

        <!-- Ввод кода -->
        <div v-if="step === 2">
          <p class="text-center mb-3">
            Введите код, отправленный на номер
            <a
              :href="`tel:` + phone"
              class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              {{ phone }}
            </a>
          </p>
          <div class="d-flex justify-content-between gap-2 mb-3">
            <input
              v-for="(code, index) in codeInputs"
              :key="index"
              type="text"
              class="form-control text-center"
              maxlength="1"
              v-model="codeInputs[index]"
              @input="focusNext(index)"
              autofocus
            />
          </div>
          <button type="submit" class="btn btn-primary w-100" :disabled="isSubmitting">
            <span
              v-if="isSubmitting"
              class="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            {{ isSubmitting ? 'Подтверждение...' : 'Подтвердить' }}
          </button>

          <div class="mt-3 text-center">
            Не получили код?
            <span
              @click="startCountdown"
              :class="isCooldown ? 'text-muted' : 'link-primary'"
              :style="{ cursor: isCooldown ? 'not-allowed' : 'pointer' }"
            >
              {{ countdownMessage }}
            </span>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
