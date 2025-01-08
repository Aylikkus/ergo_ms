<script setup>
import { EllipsisVertical, Trash } from 'lucide-vue-next'

import AvatarGroup from '@/components/AvatarGroup.vue'
import DropDown from '@/components/DropDown.vue'

defineProps({
  icon: { type: Function },
  iconBackground: { type: String },
  title: { type: String },
  caption: { type: String },
})
</script>

<template>
  <div class="card">
    <div class="d-flex align-items-center justify-content-between mb-2">
      <div class="d-flex align-items-center gap-2">
        <div class="rounded p-2 text-white icon-flex" :class="iconBackground">
          <component :is="icon" v-if="icon" :size="22" />
        </div>
        <h5 class="card-title mb-0">{{ title }}</h5>
      </div>
      <div class="d-block">
        <DropDown dropdownMenuClass="dropdown-menu-end">
          <template #main>
            <EllipsisVertical :size="20" />
          </template>
          <template #list>
            <li class="dropdown-item text-danger" @click="$emit('leaveTeam')">
              <Trash :size="20" /> Покинуть
            </li>
          </template>
        </DropDown>
      </div>
    </div>
    <div class="team-caption mb-3">{{ caption }}</div>
    <div class="d-flex">
      <div class="d-inline-flex">
        <AvatarGroup />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.team-caption {
  @include truncate-text(2);
}
</style>
