<script setup>
import { ref, watch } from 'vue'
import { ChevronLeft, Cog, Minus } from 'lucide-vue-next'
import {
  ChatMenuSection,
  EmailMenuSection,
  SettingsMenuSection,
  UserMenuSection,
} from '@/js/menu-sections.js'

import MenuGroup from '@/components/menu/MenuGroup.vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  isVisible: Boolean,
})

watch(
  () => props.isVisible,
  (newValue) => {
    if (!newValue) {
      isHovering.value = true
    }
  },
)

const emit = defineEmits(['left-padding'])

// Состояние меню
const isCollapsed = ref(false)
const isHovering = ref(true)

// Переключение состояния
const toggleMenu = () => {
  isCollapsed.value = !isCollapsed.value
  emit('left-padding', isCollapsed.value ? '120px' : '280px')
}

// Наведение на меню
const handleMouseEnter = () => {
  if (isCollapsed.value) isHovering.value = true
}
const handleMouseLeave = () => {
  if (isCollapsed.value) isHovering.value = false
}

// Текущая группа
const route = useRoute()
const openGroupId = ref(null)

watch(
  () => route.matched,
  (newMatched) => {
    for (let i of menuSections) {
      if (i.routeName === newMatched[0].name) {
        openGroupId.value = i.id
      }
    }
  },
  { immediate: false },
)

const toggleGroup = (id) => {
  openGroupId.value = openGroupId.value === id ? null : id
}

// Список секций меню
const menuSections = [
  UserMenuSection,
  SettingsMenuSection,
  EmailMenuSection,
  ChatMenuSection,
]

</script>

<template>
  <aside
    class="side-menu card"
    :class="{ collapsed: isCollapsed, hovering: isHovering, 'is-hidden': !isVisible }"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div class="side-menu__header side-header">
      <RouterLink to="/" class="side-menu__logo">
        <div class="side-header__icon">
          <Cog :size="32" />
        </div>
        <div class="side-header__title text-smooth-animation" :class="{ hidden: !isHovering }">
          ERGO MS
        </div>
      </RouterLink>
      <div class="side-menu__toggle">
        <button @click="toggleMenu" class="btn btn-primary">
          <ChevronLeft :class="{ rotated: isCollapsed }" class="menu-group__chevron" />
        </button>
      </div>
    </div>
    <ul class="side-menu__list" :class="{ short: !isHovering }">
      <li v-for="(section, index) in menuSections" :key="index">
        <MenuGroup
          :is-hovering="isHovering"
          :is-collapsed="!isCollapsed"
          :is-open="openGroupId === section.id"
          :data="section"
          @toggle="toggleGroup(section.id)"
        />
      </li>
    </ul>
  </aside>
</template>

<style lang="scss" scoped>
// Меню
.side-menu {
  @include flex-column-gap($padding-external);

  position: fixed;
  inline-size: 260px;
  padding: $padding-external;
  height: 100vh;

  transform: translateX(0);
  z-index: 1005;

  transition: all $transition;

  &.is-hidden {
    transform: translateX(-110%);
  }

  &.collapsed {
    width: 84px;
  }

  &.hovering {
    width: 260px;
  }
}

// Шапка меню
.side-header {
  position: relative;
  padding: $padding-internal 10px;

  a {
    @include flex-row-gap($padding-internal, center);
    text-decoration: none;
  }
}

// Иконка логотипа
.side-header__icon {
  width: 32px;
  height: 32px;
  color: var(--color-primary-text);
}

// Заголовок
.side-header__title {
  flex-grow: 1;

  color: var(--color-primary-text);
  font-size: $font-size-h1;
  font-weight: bold;
  white-space: nowrap;
  text-overflow: ellipsis;
  user-select: none;

  overflow: hidden;
}

// Кнопка переключения
.side-menu__toggle {
  position: absolute;
  top: 50%;
  right: 0;

  transform: translate(86%, -50%);
  cursor: pointer;

  border: 6px solid var(--bs-body-bg);
  border-radius: 50%;
  transition: border 0.5s ease;

  button {
    @include flex-row-gap(0, center, center);

    border-radius: 50%;
    height: 30px;
    width: 30px;
    padding: 0;
  }
}

// Анимация иконки
.menu-group__chevron {
  transition: transform 0.3s ease;

  &.rotated {
    transform: rotate(180deg);
  }
}

// Список меню
.side-menu__list {
  list-style: none;
  padding: 0;
  margin: 0;

  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: thin;
  scroll-behavior: smooth;
  scrollbar-color: var(--color-secondary-background) transparent;

  &.short {
    overflow: hidden;
  }
}

// Разделитель
.side-divider {
  @include flex-row-gap($padding-internal, center);
  padding: $padding-internal $padding-external;
  overflow: hidden;

  &__name,
  &__icon {
    user-select: none;
    color: var(--color-secondary-text);
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
