<script setup>
defineProps({
  series: { type: Array },
})

const areaOptions = {
  chart: { parentHeightOffset: 0, toolbar: { show: false } },
  dataLabels: { enabled: false },
  stroke: { width: 3, curve: 'smooth', colors: ['var(--color-accent)'] },
  tooltip: { theme: false },
  grid: {
    strokeDashArray: 4.5,
    borderColor: 'var(--color-secondary-background)',
    padding: { left: 0, top: -20, right: 0, bottom: 7 },
  },
  fill: {
    type: 'gradient',
    gradient: {
      opacityTo: 0.25,
      opacityFrom: 0.5,
      stops: [0, 95, 100],
      shadeIntensity: 0.6,
      colorStops: [
        [
          { offset: 0, opacity: 0.4, color: 'var(--color-accent)' },
          { offset: 100, opacity: 0.2, color: 'var(--color-primary-background)' },
        ],
      ],
    },
  },
  xaxis: {
    axisTicks: { show: false },
    axisBorder: { show: false },
    categories: ['', 'Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль'],
    offsetY: 20,
    offsetX: -24,
    labels: { style: { fontSize: '14px', colors: 'var(--color-secondary-text)' } },
  },
  yaxis: { min: 10, max: 50, show: false, tickAmount: 4 },
}
</script>

<template>
  <apexchart type="area" :height="230" :series="series" :options="areaOptions"></apexchart>
</template>

<style scoped lang="scss"></style>
