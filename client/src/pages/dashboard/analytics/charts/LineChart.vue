<script setup>
defineProps({
  height: { type: Number, default: 86 },
  color: { type: String },
  name: { type: String },
  series: { type: Array },
})

const lineSeries = (name, series) => [
  {
    name: name,
    data: series,
  },
]

const lineOptions = (color) => ({
  chart: {
    parentHeightOffset: 0,
    toolbar: { show: false },
    dropShadow: {
      top: 12,
      blur: 4,
      left: 0,
      enabled: true,
      opacity: 0.6,
      color: color,
    },
  },
  tooltip: { theme: false },
  colors: [color],
  stroke: { width: 4, curve: 'smooth', lineCap: 'round' },
  grid: { show: false, padding: { top: -21, left: -5, bottom: -8 } },
  xaxis: {
    labels: { show: false },
    axisTicks: { show: false },
    axisBorder: { show: false },
  },
  yaxis: { labels: { show: false } },
})
</script>

<template>
  <apexchart
    type="line"
    :options="lineOptions(color)"
    :series="lineSeries(name, series)"
    width="70%"
    height="148"
  ></apexchart>
</template>

<style scoped lang="scss"></style>
