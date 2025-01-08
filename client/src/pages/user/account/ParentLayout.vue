<script setup>
import CardAbout from '@/pages/user/account/CardAbout.vue'
import CardConnections from '@/pages/user/account/CardConnections.vue'
import CardTeams from '@/pages/user/account/CardTeams.vue'
</script>

<template>
  <div class="row">
    <div class="col-12 col-md-6 col-xl-4 mb-4">
      <CardAbout />
    </div>
    <div class="col-12 col-md-6 col-xl-4 mb-4">
      <CardConnections />
    </div>
    <div class="col-12 col-md-12 col-xl-4 mb-4">
      <CardTeams />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
