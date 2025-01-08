<script setup>
import ModalCenter from '@/components/ModalCenter.vue'
import { ref } from 'vue'

import CreditCardForm from '@/pages/settings/billing/CreditCardForm.vue'

// Список карточек
const myCards = ref([
  {
    id: 1,
    type: 'MasterCard',
    number: '3454 3594 3516 4546',
    holder: 'Иван Иванов',
    expiry: '06/26',
    cvv: '651',
  },
  {
    id: 2,
    type: 'Visa',
    number: '6845 9818 8461 5646',
    holder: 'Иван Иванов',
    expiry: '12/25',
    cvv: '984',
  },
])

const deleteCard = (cardId) => {
  myCards.value = myCards.value.filter((card) => card.id !== cardId)
}
</script>

<template>
  <div class="card">
    <div class="row row-gap-3">
      <div class="col-12 col-md-6 border-end">
        <h5 class="card-title">Добавить карту</h5>
        <div class="d-flex gap-3 mb-3">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault2">Российские (МИР)</label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Международные (Visa / MasterCard)
            </label>
          </div>
        </div>
        <CreditCardForm />
      </div>

      <div class="col-12 col-md-6">
        <h5 class="card-title">Мои карты</h5>
        <div class="row" v-auto-animate>
          <div v-for="(card, index) in myCards" :key="index" class="col-12">
            <div class="card bg-secondary-subtle mb-1">
              <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex flex-column">
                  <div class="">{{ card.type }}</div>
                  <div class="">∗∗∗∗ ∗∗∗∗ ∗∗∗∗ {{ card.number.slice(14, 19) }}</div>
                  <div class="">
                    <small class="text-muted">Действительна до {{ card.expiry }}</small>
                  </div>
                </div>
                <div class="d-flex flex-column gap-2">
                  <button
                    class="btn btn-sm btn-outline-primary"
                    data-bs-toggle="modal"
                    :data-bs-target="`#editCreditCard-` + card.id"
                  >
                    Изменить
                  </button>
                  <button class="btn btn-sm btn-outline-secondary" @click="deleteCard(card.id)">
                    Удалить
                  </button>

                  <ModalCenter title="Изменить карту" :modal-id="`editCreditCard-` + card.id">
                    <CreditCardForm v-bind="card" :inModal="true" />
                  </ModalCenter>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@media (width <= 991px) {
  .border-end {
    border: none !important;
  }
}
</style>
