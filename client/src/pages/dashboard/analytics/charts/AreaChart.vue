<script setup>
defineProps({
  height: { type: Number, default: 86 },
  color: { type: String },
  name: { type: String },
  series: { type: Array },
})

const areaSeries = (name, series) => [
  {
    name: name,
    data: series,
  },
]

const areaOptions = (color) => ({
  chart: { parentHeightOffset: 0, toolbar: { show: false } },
  tooltip: { enabled: false },
  dataLabels: { enabled: false },
  colors: [color],
  stroke: { width: 2, curve: 'smooth', lineCap: 'round' },
  grid: { show: false, padding: { top: -48, bottom: -30, left: 0, right: 0 } },
  xaxis: {
    labels: { show: false },
    axisTicks: { show: false },
    axisBorder: { show: false },
  },
  yaxis: { show: false },
  fill: {
    type: 'gradient',
    gradient: {
      colorStops: [
        { offset: 0, opacity: 0.6, color: color },
        { offset: 80, opacity: 0.1, color: 'var(--color-primary-background)' },
      ],
    },
  },
})
</script>

<template>
  <apexchart
    v-if="series"
    :height="height"
    type="area"
    :options="areaOptions(color)"
    :series="areaSeries(name, series)"
  ></apexchart>
</template>

<style scoped lang="scss"></style>
