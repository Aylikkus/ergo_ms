<script setup>
import CurrentPlan from '@/pages/settings/billing/CurrentPlan.vue'
import PaymentMethods from '@/pages/settings/billing/PaymentMethods.vue'
import BillingAddress from '@/pages/settings/billing/BillingAddress.vue'
</script>

<template>
  <div class="row row-gap-4">
    <div class="col-12"><CurrentPlan /></div>
    <div class="col-12"><PaymentMethods /></div>
    <div class="col-12"><BillingAddress /></div>
  </div>
</template>

<style scoped lang="scss"></style>
