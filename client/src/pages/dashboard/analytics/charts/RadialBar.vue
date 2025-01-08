<script setup>
defineProps({
  height: { type: Number, default: 86 },
  title: { type: String },
  value: { type: Number },
})

const radialbarOptions = (title) => ({
  chart: { sparkline: { enabled: true } },
  labels: [title],
  stroke: { dashArray: 5 },
  colors: ['var(--color-accent)'],
  plotOptions: {
    radialBar: {
      endAngle: 150,
      startAngle: -140,
      hollow: { size: '60%' },
      track: { background: 'transparent' },
      dataLabels: {
        name: {
          offsetY: 25,
          fontWeight: 500,
          fontSize: '15px',
          color: 'var(--color-primary-text)',
        },
        value: {
          offsetY: -15,
          fontWeight: 500,
          fontSize: '24px',
          color: 'var(--color-primary-text)',
        },
      },
    },
  },
})
</script>

<template>
  <apexchart
    :options="radialbarOptions(title)"
    type="radialBar"
    :series="[value]"
    :height="200"
  ></apexchart>
</template>

<style scoped lang="scss"></style>
