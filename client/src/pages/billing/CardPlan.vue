<script setup>
import { Check } from 'lucide-vue-next'

defineProps({
  icon: { type: Function },
  title: { type: String, default: 'Тариф' },
  description: { type: String, default: 'Описание не заполнено' },
  price: { type: Number, default: 0 },
  points: { type: Array, default: () => [] },
  currentPlan: { type: Boolean, default: false },
  isAnnual: { type: Boolean, default: false },
})
</script>

<template>
  <div class="card h-100 border shadow-none">
    <div class="p-3">
      <div class="mt-3 mb-4 text-center">
        <div class="p-3 d-inline-block bg-primary-subtle text-primary rounded-circle">
          <component :is="icon" v-if="icon" :size="60" />
        </div>
      </div>
      <h4 class="card-title text-center text-capitalize mb-1">{{ title }}</h4>
      <p class="text-center mb-3">{{ description }}</p>
      <div class="text-center h-px-50">
        <div class="d-flex justify-content-center">
          <sup class="h6 text-body pricing-currency mt-2 mb-0 me-1">₽</sup>
          <h1 class="mb-0 text-primary">{{ price.toLocaleString() }}</h1>
          <sub class="h6 text-body pricing-duration mt-auto mb-1">/ месяц</sub>
        </div>
      </div>
      <ul class="list-group my-4 pt-9">
        <li
          v-for="(point, index) in points"
          :key="index"
          class="mb-2 d-flex align-items-center gap-2"
        >
          <span class="icon-flex p-1 bg-primary-subtle text-primary rounded-circle">
            <Check :size="12" />
          </span>
          <span class="fs-6 lh-sm text-secondary-emphasis">{{ point }}</span>
        </li>
      </ul>
      <button
        class="btn d-flex justify-content-center w-100"
        :class="currentPlan ? 'bg-primary-subtle text-primary' : 'btn-primary'"
      >
        {{ currentPlan ? 'Текущий' : 'Обновиться' }}
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
