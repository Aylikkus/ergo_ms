<script setup>
import { CornerLeftDown } from 'lucide-vue-next'

defineEmits(['switchPlan'])
</script>

<template>
  <div class="d-flex align-items-center">
    <span class="fs-6 me-2">Ежемесячно</span>
    <div class="form-check form-switch m-0">
      <input
        class="form-check-input"
        type="checkbox"
        role="switch"
        id="billingSwitch"
        @change="$emit('switchPlan')"
        style="cursor: pointer"
      />
      <label class="form-check-label fs-6" for="billingSwitch">Ежегодно </label>
    </div>
  </div>
  <div class="d-none d-sm-flex align-items-end gap-2 mb-5 ms-n5">
    <CornerLeftDown :size="16" />
    <span class="badge bg-success-subtle text-success">Выгода до 10%</span>
  </div>
</template>

<style scoped lang="scss"></style>
