<script setup>
import { MaskInput } from 'vue-3-mask'
import ModalCenter from '@/components/ModalCenter.vue'
</script>

<template>
  <div class="card h-100">
    <h5 class="card-title">Двухэтапная проверка</h5>
    <h6 class="mt-2 text-body">Двухфакторная аутентификация ещё не включена.</h6>
    <p class="m-0">
      Это ваш дополнительный уровень безопасности учётной записи.
      <a href="#" class="text-decoration-none">Узнать больше</a>
    </p>

    <div class="mt-2">
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#twoStep"
      >
        Подключить
      </button>

      <ModalCenter title="Подключение двухфакторки" modal-id="twoStep">
        <div class="d-flex flex-column align-items-center gap-3">
          <p class="text-center text-body w-75 m-0">
            Подтвердите свой номер мобильного телефона для отправки SMS-сообщения
          </p>

          <form class="row g-6">
            <div class="col-12 mb-4">
              <label class="form-label" for="modalEnableOTPPhone">Номер телефона</label>
              <div class="input-group" v-auto-animate>
                <span class="input-group-text">+7</span>
                <MaskInput
                  mask="(###) ###-##-##"
                  type="text"
                  id="modalEnableOTPPhone"
                  name="modalEnableOTPPhone"
                  class="form-control"
                  placeholder="(123) 456-78-90"
                  required
                />
                <div v-if="phoneError" class="invalid-feedback">{{ phoneError }}</div>
              </div>
            </div>

            <div class="col-12">
              <button type="submit" class="btn btn-primary me-2">Подтвердить</button>
              <button type="reset" class="btn btn-secondary" data-bs-dismiss="modal">Отмена</button>
            </div>
          </form>
        </div>
      </ModalCenter>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
