<script setup>
import AreaChart from '@/pages/dashboard/analytics/charts/AreaChart.vue'

const paymentsSeries = [70, 120, 80, 90, 40]
</script>

<template>
  <div class="card h-100">
    <div class="pb-4">
      <span class="d-block fw-medium mb-1">Платежи</span>
      <h4 class="card-title mb-0">884 тыс. ₽</h4>
    </div>
    <div class="w-100">
      <AreaChart color="var(--bs-danger)" name="Платежи" :series="paymentsSeries" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
