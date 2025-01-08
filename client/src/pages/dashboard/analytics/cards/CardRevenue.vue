<script setup>
import AreaChart from '@/pages/dashboard/analytics/charts/AreaChart.vue'

const revenueSeries = [10, 25, 20, 30, 45]
</script>

<template>
  <div class="card h-100">
    <div class="pb-4">
      <span class="d-block fw-medium mb-1">Доход</span>
      <h4 class="card-title mb-0">45 млн ₽</h4>
    </div>
    <div class="w-100">
      <AreaChart color="var(--bs-info)" name="Доход" :series="revenueSeries" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
