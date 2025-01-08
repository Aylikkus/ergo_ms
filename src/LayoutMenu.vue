<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

import MenuList from '@/components/menu/MenuList.vue'
import TheHeader from '@/components/header/TheHeader.vue'

const leftPadding = ref('280px')

// Видимость меню
const isMenuVisible = ref(true) // По умолчанию, меню видимо
const isMenuToggledManually = ref(false) // Флаг, указывающий, что меню было переключено вручную
const isOverlayVisible = ref(false) // Видимость заднего меню

const leftToggle = (newPadding) => {
  leftPadding.value = newPadding
}

// Переключение видимости меню в зависимости от ширины экрана
const updateMenuVisibility = () => {
  if (window.innerWidth >= 1200) {
    isMenuVisible.value = true
    isOverlayVisible.value = false
    isMenuToggledManually.value = false
  } else if (!isMenuToggledManually.value) {
    isMenuVisible.value = false
    isOverlayVisible.value = false
  }
}

// Обработчик события изменения размера окна
const handleResize = () => updateMenuVisibility()

// Переключение видимости меню
const toggleMenu = (isVisible) => {
  isMenuToggledManually.value = true
  isMenuVisible.value = isVisible
  isOverlayVisible.value = isVisible && window.innerWidth < 1200
}

// Закрытие меню при клике на overlay
const closeMenu = () => {
  isMenuVisible.value = false
  isOverlayVisible.value = false
  isMenuToggledManually.value = false
}

// Инициализация
onMounted(() => {
  updateMenuVisibility()
  window.addEventListener('resize', handleResize)
})

// Очистка
onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})

</script>

<template>
  <div class="layout-container">
    <MenuList @left-padding="leftToggle" :is-visible="isMenuVisible" />
    <div class="layout-page">
      <div class="pt-4 container-xxl">
        <TheHeader @toggleMenu="toggleMenu" />
      </div>
      <div class="py-4 container-xxl">
        <RouterView :key="$route.path"></RouterView>
      </div>
    </div>
  </div>

  <div @click="closeMenu" class="layout-overlay" :class="{ active: isOverlayVisible }"></div>
</template>

<style lang="scss" scoped>
.layout-page {
  padding-inline-start: v-bind(leftPadding);
  transition: padding-inline-start $transition;
}

@media (width < 1200px) {
  .layout-page {
    padding-inline-start: 0;
  }
}
</style>