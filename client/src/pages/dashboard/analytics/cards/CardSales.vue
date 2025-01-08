<script setup>
import AreaChart from '@/pages/dashboard/analytics/charts/AreaChart.vue'

const salesSeries = [20, 140, 40, 88, 140]
</script>

<template>
  <div class="card h-100">
    <div class="pb-4">
      <span class="d-block fw-medium mb-1">Продажи</span>
      <h4 class="card-title mb-0">1,24 млн. ₽</h4>
    </div>
    <div class="w-100">
      <AreaChart color="var(--bs-success)" name="Продажи" :series="salesSeries" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
