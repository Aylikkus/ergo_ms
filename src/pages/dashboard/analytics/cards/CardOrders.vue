<script setup>
import AreaChart from '@/pages/dashboard/analytics/charts/AreaChart.vue'

const ordersSeries = [30, 70, 45, 90, 120]
</script>

<template>
  <div class="card h-100">
    <div class="pb-4">
      <span class="d-block fw-medium mb-1">Заказы</span>
      <h4 class="card-title mb-0">276 тыс.</h4>
    </div>
    <div class="w-100">
      <AreaChart color="var(--bs-warning)" name="Заказы" :series="ordersSeries" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
