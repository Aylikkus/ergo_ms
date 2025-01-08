<script setup>
defineProps({
  labels: { type: Array },
  colors: { type: Array },
  series: { type: Array },
})

const donutOptions = (colors, labels) => ({
  chart: { sparkline: { enabled: true }, animations: { enabled: false } },
  stroke: { width: 6, colors: ['var(--color-primary-background)'] },
  legend: { show: false },
  tooltip: { enabled: true },
  dataLabels: { enabled: false },
  labels: labels,
  colors: colors,
  grid: { padding: { top: -7, bottom: 5 } },
  plotOptions: {
    pie: {
      expandOnClick: false,
      donut: {
        size: '75%',
        labels: {
          show: true,
          name: {
            offsetY: 17,
            fontSize: '13px',
            color: 'var(--color-primary-text)',
          },
          value: {
            offsetY: -17,
            fontSize: '18px',
            color: 'var(--color-primary-text)',
            fontWeight: 500,
          },
          total: {
            show: true,
            label: 'Всего',
            fontSize: '13px',
            lineHeight: '18px',
            formatter: () => '38%',
            color: 'var(--color-primary-text)',
          },
        },
      },
    },
  },
})
</script>

<template>
  <apexchart
    type="donut"
    :options="donutOptions(colors, labels)"
    :series="series"
    :height="120"
    width="100"
  ></apexchart>
</template>

<style scoped lang="scss"></style>
