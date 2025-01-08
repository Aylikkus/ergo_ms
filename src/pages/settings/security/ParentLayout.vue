<script setup>
import UpdatePassword from '@/pages/settings/security/UpdatePassword.vue'
import TwoStep from '@/pages/settings/security/TwoStep.vue'
import ApiKeys from '@/pages/settings/security/ApiKeys.vue'
import AuthDevices from '@/pages/settings/security/AuthDevices.vue'
</script>

<template>
  <div class="row row-gap-4">
    <div class="col-12"><UpdatePassword /></div>
    <div class="col-12"><ApiKeys /></div>
    <div class="col-12 col-md-6"><TwoStep /></div>
    <div class="col-12 col-md-6"><AuthDevices /></div>
  </div>
</template>

<style scoped lang="scss"></style>
