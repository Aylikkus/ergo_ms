<script setup>
import BarChart from '@/pages/dashboard/analytics/charts/BarChart.vue'
import RadialBar from '@/pages/dashboard/analytics/charts/RadialBar.vue'

const totalRevenueSeries = [
  { name: '2023', data: [44, 55, 41, 67, 22, 43] },
  { name: '2024', data: [13, 23, 20, 8, 13, 27] },
]
</script>

<template>
  <div class="card">
    <div class="row">
      <div class="col-lg-8">
        <div class="card-title mb-0">
          <h5 class="m-0 me-2">Общий доход за полгода</h5>
        </div>
        <div class="w-100">
          <BarChart :data="totalRevenueSeries" :colors="[`#FF5555`, `#FFAB55`]" />
        </div>
      </div>
      <div class="col-lg-4 d-flex flex-column justify-content-center align-items-center">
        <div class="mb-2 text-center">
          <div class="dropdown">
            <button
              class="btn btn-primary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              2023
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">2022</a></li>
              <li><a class="dropdown-item" href="#">2023</a></li>
              <li><a class="dropdown-item" href="#">2024</a></li>
            </ul>
          </div>
        </div>
        <div class="mb-2"><RadialBar title="Развитие" :value="72" /></div>
        <div class="mb-2">62% рост компании</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
