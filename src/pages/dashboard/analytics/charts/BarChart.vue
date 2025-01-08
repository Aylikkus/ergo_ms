<script setup>
defineProps({
  height: { type: Number, default: 332 },
  colors: { type: Array },
  data: { type: Array },
})

const barSeries = (data) => {
  const result = []
  for (const item of data) {
    result.push({
      name: item.name,
      data: item.data,
    })
  }
  return result
}

const barOptions = (colors) => ({
  chart: { stacked: true, toolbar: { show: false }, zoom: { enabled: true } },
  stroke: { lineCap: 'round', colors: 'var(--color-primary-background)' },
  colors: colors,
  legend: { show: false },
  plotOptions: {
    bar: {
      borderRadius: 9,
      columnWidth: '30%',
      borderRadiusApplication: 'end',
      borderRadiusWhenStacked: 'all',
    },
  },
  tooltip: { theme: false },
  grid: { borderColor: 'var(--color-secondary-background)' },
  xaxis: {
    axisTicks: { show: false },
    crosshairs: { opacity: 0 },
    axisBorder: { show: false },
    categories: ['Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг'],
    labels: { style: { colors: 'var(--color-secondary-text)' } },
  },
  yaxis: { labels: { style: { colors: 'var(--color-secondary-text)' } } },
  fill: {
    opacity: 1,
  },
})
</script>

<template>
  <apexchart
    :height="height"
    type="bar"
    :options="barOptions(colors)"
    :series="barSeries(data)"
  ></apexchart>
</template>

<style lang="scss"></style>
