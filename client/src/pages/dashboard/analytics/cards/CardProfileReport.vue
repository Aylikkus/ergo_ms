<script setup>
import LineChart from '@/pages/dashboard/analytics/charts/LineChart.vue'
</script>

<template>
  <div class="card h-100">
    <div class="d-flex justify-content-between align-items-center flex-sm-row flex-column gap-10">
      <div class="d-flex flex-sm-column flex-row align-items-start justify-content-between">
        <div class="card-title mb-6">
          <h5 class="text-nowrap mb-1">Профильный отчёт</h5>
          <span class="badge bg-warning">ГОД 2023</span>
        </div>
        <div class="mt-sm-auto">
          <span class="text-success text-nowrap fw-medium">↑ 68.2%</span>
          <h4 class="mb-0">9,2 млн ₽</h4>
        </div>
      </div>
      <div class="">
        <LineChart name="Отчёт" :series="[30, 58, 35, 53, 50, 68]" color="var(--bs-warning)" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
