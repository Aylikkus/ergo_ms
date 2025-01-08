<script setup>
import { Bell } from 'lucide-vue-next'
</script>

<template>
  <div class="dropdown-center header-dropdown-center">
    <div data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="0,20">
      <div class="header-btn" v-tooltip title="Уведомления">
        <Bell :size="24" />
      </div>
    </div>
    <ul class="dropdown-menu header-dropdown-menu"></ul>
  </div>
</template>

<style scoped lang="scss"></style>
