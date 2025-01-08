<script setup>
import { CircleAlert, CircleCheck, TriangleAlert } from 'lucide-vue-next'
import { ref } from 'vue'

import ModalCenter from '@/components/ModalCenter.vue'

// Информация о подписке
const subscriptionInfo = ref({
  plan: 'Базовый',
  date: new Date('2025-01-01 17:27:31'),
})

// Получение дней
const getDaysDifference = (date) => {
  const remainingTime = date - new Date()
  return remainingTime <= 0 ? 0 : Math.ceil(remainingTime / (1000 * 60 * 60 * 24))
}

// Получение процентов
const getRemainingPercentage = (date) => {
  const remainingTime = date - new Date()
  if (remainingTime <= 0) return 0
  return Math.round((Math.ceil(remainingTime / (1000 * 60 * 60 * 24)) / 30) * 100)
}
</script>

<template>
  <div class="card">
    <h5 class="card-title">Текущий план</h5>
    <div class="row row-gap-3">
      <div class="col-12 col-md-6">
        <div class="lh-sm">
          <h6 class="mb-0">
            Ваш текущий план
            <RouterLink
              :to="{ name: 'Billing' }"
              class="badge bg-gray text-decoration-none text-white"
            >
              {{ subscriptionInfo.plan }}
            </RouterLink>
          </h6>
          <p>Простой. Для всех.</p>
        </div>
        <div class="lh-sm">
          <h6 class="mb-0">Активно до {{ subscriptionInfo.date.toLocaleDateString() }}</h6>
          <p>За 3 дня до окончания подписки, мы уведомим вас.</p>
        </div>
        <div class="rounded p-3 bg-info-subtle text-info-emphasis lh-sm">
          <div class="d-flex gap-1">
            <h6 class="mb-0">
              Предложение для вас:
              <b>Стандартный план</b>
            </h6>
          </div>
          <p class="mb-1">1 990 ₽ в месяц. Для малого и среднего бизнеса.</p>
        </div>
      </div>

      <div class="col-12 col-md-6">
        <div class="rounded p-3 bg-warning-subtle text-warning-emphasis lh-sm mb-3">
          <div class="d-flex align-items-center gap-2">
            <div class="d-inline-flex">
              <TriangleAlert :size="24" />
            </div>
            <div class="d-flex flex-column">
              <h6 class="mb-0">Обратите внимание!</h6>
              <p class="mb-0">Подписка скоро закончится. Пожалуйста, продлите её.</p>
            </div>
          </div>
        </div>
        <div class="d-flex flex-column">
          <div class="d-flex justify-content-between">
            <h6 class="mb-1">Дни</h6>
            <h6 class="mb-1">{{ getDaysDifference(subscriptionInfo.date) }} / 30 дней</h6>
          </div>
          <div class="progress rounded mb-1">
            <div
              class="progress-bar rounded"
              :style="{ width: getRemainingPercentage(subscriptionInfo.date) + '%' }"
            ></div>
          </div>
          <small>
            Осталось {{ 30 - getDaysDifference(subscriptionInfo.date) }} дней до окончания подписки
          </small>
        </div>
      </div>
    </div>

    <div class="col-12 d-flex gap-2 flex-wrap mt-3">
      <RouterLink :to="{ name: 'Billing' }" class="btn btn-primary">Изменить план</RouterLink>
      <button class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#cancelSubscription">
        Отменить подписку
      </button>

      <ModalCenter title="Подписка" modal-id="cancelSubscription">
        <div class="d-flex flex-column align-items-center gap-2">
          <CircleAlert :size="96" color="var(--bs-danger)" :stroke-width="1.5" />
          <h5 class="text-center w-75">Вы уверены, что хотите отменить свою подписку?</h5>
          <div class="mt-3">
            <button
              class="btn btn-primary me-2"
              data-bs-toggle="modal"
              data-bs-target="#subscriptionCanceled"
            >
              Подтвердить
            </button>
            <button class="btn btn-secondary" data-bs-dismiss="modal">Отменить</button>
          </div>
        </div>
      </ModalCenter>

      <ModalCenter title="Подписка" modal-id="subscriptionCanceled">
        <div class="d-flex flex-column align-items-center gap-2">
          <CircleCheck :size="96" color="var(--bs-success)" :stroke-width="1.5" />
          <h5>Подписка отменена</h5>
        </div>
      </ModalCenter>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
