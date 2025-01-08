<script setup>
import AreaFullChart from '@/pages/dashboard/analytics/charts/AreaFullChart.vue'
import { ref } from 'vue'
import { ChartPie, Coins, Wallet } from 'lucide-vue-next'

const activeIndex = ref(0)
const currentTab = ref('income')

const tabButtons = ref([
  { label: 'Доход', class: 'income' },
  { label: 'Затраты', class: 'expenses' },
  { label: 'Выгода', class: 'profit' },
])

const areaSeries = {
  income: [{ name: 'Доход', data: [24, 21, 30, 22, 42, 26, 35, 29] }],
  expenses: [{ name: 'Расходы', data: [24, 21, 30, 25, 42, 26, 35, 29] }],
  profit: [{ name: 'Прибыль', data: [24, 21, 30, 22, 42, 26, 35, 35] }],
}

const tabInfo = ref({
  income: {
    icon: Wallet,
    title: 'Общий доход',
    amount: '49,45 млн ₽',
    percent: '65%',
    iconBackground: 'bg-info-subtle',
    iconColor: 'text-info',
    info: 'На 4,21 млн ₽ меньше, чем на прошлой неделе',
  },
  expenses: {
    icon: Coins,
    title: 'Общие расходы',
    amount: '34,04 млн ₽',
    percent: '27.8%',
    iconBackground: 'bg-danger-subtle',
    iconColor: 'text-danger',
    info: 'На 1,72 млн ₽ меньше, чем на прошлой неделе',
  },
  profit: {
    icon: ChartPie,
    title: 'Общая прибыль',
    amount: '15,41 млн ₽',
    percent: '35.1%',
    iconBackground: 'bg-success-subtle',
    iconColor: 'text-success',
    info: 'На 3,01 млн ₽ меньше, чем на прошлой неделе',
  },
})

const handleClick = (index, className) => {
  activeIndex.value = index
  currentTab.value = className
}
</script>

<template>
  <div class="card h-100">
    <div class="nav-align-top mb-3">
      <ul class="list-unstyled d-flex gap-1">
        <li v-for="(tab, index) in tabButtons" :key="index" class="rounded">
          <button
            type="button"
            class="btn fw-bold"
            :class="{ 'btn-primary': activeIndex === index }"
            @click="handleClick(index, tab.class)"
          >
            {{ tab.label }}
          </button>
        </li>
      </ul>
    </div>
    <div class="tab-content">
      <div class="d-flex mb-6">
        <div class="d-flex align-items-center flex-shrink-0 me-2">
          <span
            class="rounded p-2"
            :class="`${tabInfo[currentTab].iconBackground} ${tabInfo[currentTab].iconColor}`"
          >
            <component :is="tabInfo[currentTab].icon" />
          </span>
        </div>
        <div>
          <p class="mb-0">{{ tabInfo[currentTab].title }}</p>
          <div class="d-flex align-items-center">
            <h6 class="mb-0 me-1">{{ tabInfo[currentTab].amount }}</h6>
            <small class="text-success fw-medium"> ↑ {{ tabInfo[currentTab].percent }} </small>
          </div>
        </div>
      </div>
      <div class="">
        <AreaFullChart :series="areaSeries[currentTab]"></AreaFullChart>
      </div>
      <div class="d-flex align-items-center justify-content-center mt-3">
        <small class="text-secondary">{{ tabInfo[currentTab].info }}</small>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
li {
  transition: all $transition;

  button:not(.btn-primary):hover {
    background-color: var(--bs-primary-bg-subtle);
    color: var(--bs-primary);
  }
}
</style>
