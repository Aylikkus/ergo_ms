<script setup>
import { reactive } from 'vue'
import { MaskInput } from 'vue-3-mask'

const form = reactive({
  companyName: '',
  billingEmail: '',
  taxId: '',
  vatNumber: '',
  mobile: '',
  country: '',
  billingAddress: '',
  state: '',
  zipCode: '',
})
</script>

<template>
  <div class="card">
    <h5 class="card-title mb-2">Платёжные данные</h5>
    <form>
      <div class="row mb-3">
        <div class="col-12 col-md-6">
          <label for="companyName" class="form-label mb-1">Название компании</label>
          <input
            v-model="form.companyName"
            type="text"
            class="form-control"
            id="companyName"
            placeholder="Название компании"
            required
          />
        </div>
        <div class="col-12 col-md-6">
          <label for="billingEmail" class="form-label mb-1">Платёжная почта</label>
          <input
            v-model="form.billingEmail"
            type="email"
            class="form-control"
            id="billingEmail"
            placeholder="Enter billing email"
            required
          />
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-12 col-md-6">
          <label for="taxId" class="form-label mb-1">ИНН</label>
          <MaskInput
            mask="############"
            v-model="form.taxId"
            type="text"
            class="form-control"
            id="taxId"
            placeholder="012345678912"
          />
        </div>
        <div class="col-12 col-md-6">
          <label for="vatNumber" class="form-label mb-1">НДС</label>
          <input
            v-model="form.vatNumber"
            type="text"
            class="form-control"
            id="vatNumber"
            placeholder="НДС"
          />
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-12 col-md-6">
          <label for="mobile" class="form-label mb-1">Телефон</label>
          <div class="input-group">
            <span class="input-group-text" id="mobile">+7</span>
            <MaskInput
              mask="(###) ###-##-##"
              v-model="form.mobile"
              type="tel"
              class="form-control"
              id="mobile"
              placeholder="(123) 456-78-90"
            />
          </div>
        </div>
        <div class="col-12 col-md-6">
          <label for="country" class="form-label mb-1">Страна</label>
          <select v-model="form.country" class="form-select" id="country" required>
            <option value="">Выбрать страну</option>
            <option value="ru">Россия</option>
            <option value="us">Соединённые Штаты</option>
            <option value="de">Германия</option>
            <option value="fr">Франция</option>
          </select>
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-12">
          <label for="billingAddress" class="form-label mb-1">Адрес для выставления счёта</label>
          <input
            v-model="form.billingAddress"
            type="text"
            class="form-control"
            id="billingAddress"
            placeholder="Адрес"
            required
          />
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-md-6">
          <label for="state" class="form-label mb-1">Город</label>
          <input
            v-model="form.state"
            type="text"
            class="form-control"
            id="state"
            placeholder="Москва"
          />
        </div>
        <div class="col-md-6">
          <label for="zipCode" class="form-label mb-1">Zip-код</label>
          <input
            v-model="form.zipCode"
            type="text"
            class="form-control"
            id="zipCode"
            placeholder="231456"
            maxlength="6"
            required
          />
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-12">
          <button type="submit" class="btn btn-primary me-2">Сохранить</button>
          <button type="reset" class="btn btn-secondary">Сбросить</button>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss"></style>
