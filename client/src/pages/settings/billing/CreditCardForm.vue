<script setup>
import { reactive, ref, watch } from 'vue'
import { MaskInput } from 'vue-3-mask'

const props = defineProps({
  number: { type: String, default: '' },
  holder: { type: String, default: '' },
  expiry: { type: String, default: '' },
  cvv: { type: String, default: '' },
  inModal: { type: Boolean, default: false },
})

// Форма
const form = reactive({
  cardNumber: '',
  cardHolder: '',
  expiryDate: '',
  cvv: '',
})

// Инициализация локальных значений
watch(
  () => [props.number, props.holder, props.expiry, props.cvv],
  ([newNumber, newHolder, newExpiry, newCVV]) => {
    form.cardNumber = newNumber || ''
    form.cardHolder = newHolder || ''
    form.expiryDate = newExpiry || ''
    form.cvv = newCVV || ''
  },
  { immediate: true },
)

const formSubmitted = ref(false)

// Обработка формы
const handleSubmit = () => {
  formSubmitted.value = true

  // Валидация всех полей
  if (form.cardNumber && form.cardHolder && form.expiryDate && form.cvv) {
    form.cardNumber = ''
    form.cardHolder = ''
    form.expiryDate = ''
    form.cvv = ''
    formSubmitted.value = false
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div class="row">
      <div class="col-md-6 mb-3">
        <label for="cardNumber" class="form-label">Номер карты</label>
        <MaskInput
          v-if="!inModal"
          mask="#### #### #### ####"
          v-model="form.cardNumber"
          class="form-control"
          :class="{ 'is-invalid': formSubmitted && !form.cardNumber }"
          type="text"
          id="cardNumber"
          maxlength="19"
          placeholder="1234 5678 9012 3456"
          required
        />
        <input
          v-else
          v-model="form.cardNumber"
          class="form-control"
          :class="{ 'is-invalid': formSubmitted && !form.cardNumber }"
          type="text"
          id="cardNumber"
          maxlength="19"
          placeholder="1234 5678 9012 3456"
          required
        />
      </div>
      <div class="col-md-6 mb-3">
        <label for="cardHolder" class="form-label">Имя и фамилия</label>
        <input
          v-model="form.cardHolder"
          class="form-control"
          :class="{ 'is-invalid': formSubmitted && !form.cardHolder }"
          type="text"
          id="cardHolder"
          placeholder="Ivan Ivanov"
          required
        />
      </div>
    </div>

    <div class="row">
      <div class="col-md-6 mb-3">
        <label for="expiryDate" class="form-label">Срок годности</label>
        <MaskInput
          v-if="!inModal"
          mask="##/##"
          v-model="form.expiryDate"
          class="form-control"
          :class="{ 'is-invalid': formSubmitted && !form.expiryDate }"
          type="text"
          id="expiryDate"
          maxlength="5"
          placeholder="MM/YY"
          required
        />
        <input
          v-else
          v-model="form.expiryDate"
          class="form-control"
          :class="{ 'is-invalid': formSubmitted && !form.expiryDate }"
          type="text"
          id="expiryDate"
          maxlength="5"
          placeholder="MM/YY"
          required
        />
      </div>
      <div class="col-md-6 mb-3">
        <label for="cvv" class="form-label">CVV</label>
        <input
          v-model="form.cvv"
          class="form-control"
          :class="{ 'is-invalid': formSubmitted && !form.cvv }"
          type="text"
          id="cvv"
          maxlength="3"
          placeholder="123"
          required
        />
      </div>
    </div>

    <div class="mt-3">
      <button type="submit" class="btn btn-primary me-2">Сохранить</button>
      <button
        :type="inModal ? 'button' : 'reset'"
        class="btn btn-secondary"
        data-bs-dismiss="modal"
      >
        Отменить
      </button>
    </div>
  </form>
</template>

<style scoped lang="scss"></style>
