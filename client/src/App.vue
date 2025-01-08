<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import LayoutMenu from '@/LayoutMenu.vue'
import LayoutStart from '@/LayoutStart.vue'

const route = useRoute()
const router = useRouter()

const isReady = ref(false)
router.isReady().then(() => {
  isReady.value = true
})

const currentLayout = computed(() => {
  return route.meta.startRoute === true ? LayoutStart : LayoutMenu
})
</script>

<template>
  <div v-if="isReady">
    <component :is="currentLayout"/>
  </div>
</template>