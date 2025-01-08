<script setup>
import { House, Shirt, Smartphone, Volleyball } from 'lucide-vue-next'

import DonutChart from '@/pages/dashboard/analytics/charts/DonutChart.vue'

const orderStatisticSeries = [45, 80, 20, 40]
const orderStatisticLabels = ['Мода', 'Техника', 'Спорт', 'Декор']
const orderStatisticColors = [
  'var(--bs-warning)',
  'var(--bs-info)',
  'var(--bs-dark)',
  'var(--bs-success)',
]

const orders = [
  {
    icon: Smartphone,
    iconColor: 'text-info',
    iconBackground: 'bg-info-subtle',
    title: 'Техника',
    subtitle: 'Телефон, наушники',
    amount: '82.5 тыс.',
  },
  {
    icon: Shirt,
    iconColor: 'text-warning',
    iconBackground: 'bg-warning-subtle',
    title: 'Мода',
    subtitle: 'Рубашка, джинсы, обувь',
    amount: '23.8 тыс.',
  },
  {
    icon: House,
    iconColor: 'text-success',
    iconBackground: 'bg-success-subtle',
    title: 'Декор',
    subtitle: 'Искусство, Столовая',
    amount: '12.5 тыс.',
  },
  {
    icon: Volleyball,
    iconColor: 'text-dark',
    iconBackground: 'bg-dark-subtle',
    title: 'Спорт',
    subtitle: 'Футбол, Спортивная форма',
    amount: '1.1 тыс.',
  },
]
</script>

<template>
  <div class="card h-100">
    <div class="d-flex justify-content-between mb-3">
      <div class="card-title mb-0">
        <h5 class="mb-1 me-2">Статистика заказов</h5>
        <p class="card-subtitle">Общий объём продаж: 42,82 тыс.</p>
      </div>
    </div>
    <div class="row align-items-center mb-3">
      <div class="col-7 d-flex flex-column align-items-center gap-1">
        <h3 class="m-0">8,258</h3>
        <small>Заказов</small>
      </div>
      <div class="col-5">
        <DonutChart
          :series="orderStatisticSeries"
          :colors="orderStatisticColors"
          :labels="orderStatisticLabels"
        />
      </div>
    </div>
    <ul class="p-0 m-0">
      <li v-for="(order, index) in orders" :key="index" class="d-flex align-items-center mb-2">
        <div class="d-flex align-items-center justify-content-center flex-shrink-0 me-2">
          <span class="rounded p-2" :class="`${order.iconBackground} ${order.iconColor}`">
            <component :is="order.icon" v-if="order.icon" />
          </span>
        </div>
        <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
          <div class="me-2">
            <h6 class="mb-0">{{ order.title }}</h6>
            <small>{{ order.subtitle }}</small>
          </div>
          <div class="user-progress">
            <h6 class="mb-0">{{ order.amount }}</h6>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss"></style>
