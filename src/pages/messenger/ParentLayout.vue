<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

import MessengerHeader from '@/pages/messenger/MessengerHeader.vue'
import MessengerNavbar from '@/pages/messenger/MessengerNavbar.vue'
import MessengerLeft from '@/pages/messenger/MessengerLeft.vue'
import MessengerRight from '@/pages/messenger/MessengerRight.vue'
import MessengerContent from '@/pages/messenger/MessengerContent.vue'

// Боковое левое и правое окно
const isLeftSideOpen = ref(false)
const toggleSideLeft = () => (isLeftSideOpen.value = !isLeftSideOpen.value)

const isRightSideOpen = ref(false)
const toggleRightSide = () => (isRightSideOpen.value = !isRightSideOpen.value)

// ==================================================

// Активный диалог
const activeDialog = ref(1)

const setActiveDialog = (dialogId) => {
  activeDialog.value = dialogId
  if (window.innerWidth < 992) toggleMessengerMenu()
}

// Свернуть правое окно при смене активного диалога
watch(
  () => activeDialog.value,
  () => (isRightSideOpen.value = false),
)

// ==================================================

// Боковое основное меню
const isMessengerMenuOpen = ref(window.innerWidth >= 992)
const isOverlayVisible = ref(false)

// Переключение видимости меню
const toggleMessengerMenu = () => {
  isMessengerMenuOpen.value = !isMessengerMenuOpen.value
  isOverlayVisible.value = isMessengerMenuOpen.value
}

// Переключение видимости меню в зависимости от ширины экрана
const autoToggleMessengerMenu = () => {
  if (window.innerWidth >= 992) {
    isMessengerMenuOpen.value = true
    isOverlayVisible.value = false
  } else {
    isMessengerMenuOpen.value = false
    isOverlayVisible.value = false
  }
}

// Закрытие меню, нажатием на пустое место
const closeMessengerMenu = () => {
  if (isLeftSideOpen.value) isLeftSideOpen.value = false
  else if (isRightSideOpen.value) isRightSideOpen.value = false
  else {
    isMessengerMenuOpen.value = false
    isOverlayVisible.value = false
  }
}

// Инициализация
onMounted(() => window.addEventListener('resize', autoToggleMessengerMenu))
onBeforeUnmount(() => window.removeEventListener('resize', autoToggleMessengerMenu))
</script>

<template>
  <div class="messenger card p-0 overflow-hidden">
    <Transition name="slide">
      <div
        v-if="isMessengerMenuOpen"
        class="messenger-sidebar beautiful-scrollbar card shadow-none rounded-0 border-end"
        :class="{ collapsed: !isMessengerMenuOpen }"
      >
        <MessengerNavbar
          :activeDialog="activeDialog"
          @toggleMessengerMyInfo="toggleSideLeft"
          @openDialog="setActiveDialog"
        />
      </div>
    </Transition>

    <Transition name="slide">
      <div v-if="isLeftSideOpen" class="messenger-sidebar card shadow-none rounded-0 border-end">
        <MessengerLeft @toggleMessengerMyInfo="toggleSideLeft" />
      </div>
    </Transition>

    <div class="messenger-content card shadow-none position-relative">
      <MessengerHeader
        :activeDialog="activeDialog"
        @toggleMessengerMenu="toggleMessengerMenu"
        @toggleMessengerBuddyInfo="toggleRightSide"
      />
      <MessengerContent />
      <Transition name="slide-right">
        <div
          v-if="isRightSideOpen"
          class="messenger-user-info beautiful-scrollbar card rounded-0 shadow-none border-start"
        >
          <MessengerRight
            :activeDialog="activeDialog"
            @toggleMessengerBuddyInfo="toggleRightSide"
          />
        </div>
      </Transition>
    </div>

    <div
      @click="closeMessengerMenu"
      class="layout-overlay"
      :class="{ active: isOverlayVisible || isLeftSideOpen || isRightSideOpen }"
    ></div>
  </div>
</template>

<style scoped lang="scss">
.messenger {
  height: 85dvh;
}

.messenger-content {
  padding-left: calc(20rem + 1rem);
  height: 85dvh;

  @media (width <= 991px) {
    padding-left: 1rem;
  }
}

@media (width <= 991px) {
  .messenger-content {
    padding-left: 1rem;
  }
}

// Левое боковое меню
.messenger-sidebar {
  position: absolute;
  top: 0;
  left: 0;
  width: 20rem;
  height: 100%;
  z-index: 1050;

  @media (width <= 767px) {
    width: 100%;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.6s ease-in-out;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
}

// Правое боковое меню
.messenger-user-info {
  position: absolute;
  top: 0;
  right: 0;
  width: 20rem;
  height: 100%;
  z-index: 1010;

  @media (width <= 767px) {
    width: 100%;
  }
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.6s ease-in-out;
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
}

.slide-right-enter-to,
.slide-right-leave-from {
  transform: translateX(0);
}
</style>
