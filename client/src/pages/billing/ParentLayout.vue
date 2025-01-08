<script setup>
import { ref } from 'vue'
import { Building, CreditCard, Sparkles } from 'lucide-vue-next'

import SwitchPlan from '@/pages/billing/SwitchPlan.vue'
import CardPlan from '@/pages/billing/CardPlan.vue'

const isAnnualPlan = ref(false)

const plans = ref([
  {
    id: 1,
    icon: Sparkles,
    title: 'Базовый',
    description: 'Простой. Для всех.',
    price: isAnnualPlan.value ? 0 : 0,
    points: [
      'Доступ к основным функциям',
      'До 500 запросов в день',
      'Ограниченный объём данных',
      'Стандартная поддержка',
      'Один профиль',
    ],
    currentPlan: true,
  },
  {
    id: 2,
    icon: CreditCard,
    title: 'Стандартный',
    description: 'Для малого и среднего бизнеса',
    price: isAnnualPlan.value ? 1790 : 1990,
    points: [
      'Все функции Базового плана',
      'До 1000 запросов в день',
      'Расширенный доступ к данным',
      'Поддержка через чат',
      'Сколько угодно профилей',
    ],
    currentPlan: false,
  },
  {
    id: 3,
    icon: Building,
    title: 'Расширенный',
    description: 'Решение для крупных организаций',
    price: isAnnualPlan.value ? 4490 : 4990,
    points: [
      'Все функции Стандартного плана',
      'Неограниченные запросы',
      'Приоритетная поддержка',
      'Доступ к аналитике',
      'Индивидуальная настройка',
    ],
    currentPlan: false,
  },
])

const switchPlan = () => {
  isAnnualPlan.value = !isAnnualPlan.value

  plans.value.forEach((plan) => {
    if (isAnnualPlan.value) {
      plan.price = plan.id === 1 ? 0 : plan.id === 2 ? 1790 : 4490
    } else {
      plan.price = plan.id === 1 ? 0 : plan.id === 2 ? 1990 : 4990
    }
  })
}
</script>

<template>
  <div class="card">
    <div class="container py-12 px-0 px-sm-2 px-xl-10">
      <h3 class="text-center mb-2 mt-4">Тарифные планы</h3>
      <p class="text-center mb-0">
        Все планы включают 40+ продвинутых инструментов и функций для улучшения вашего продукта.<br />
        Выберите подходящий вам план.
      </p>
      <div
        class="d-flex align-items-center justify-content-center flex-wrap gap-2 py-3 ms-0 ms-sm-5"
      >
        <SwitchPlan @switchPlan="switchPlan" />
      </div>
      <div class="row mx-0 px-lg-5 gy-5">
        <div v-for="(plan, index) in plans" :key="index" class="col-xl mb-md-0">
          <CardPlan v-bind="plan" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
