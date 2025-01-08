<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  data: { type: Array, default: () => [] },
  avatarSize: { type: String, default: '32px' },
  limit: { type: Number, default: 3 },
})

const localData = ref(
  props.data.length
    ? [...props.data]
    : [
        { avatarName: 'avatar-1', userFullName: 'Иван Иванов' },
        { avatarName: 'avatar-2', userFullName: 'Дмитрий Сергеевич' },
        { avatarName: 'avatar-3', userFullName: 'Михаил Алексеевич' },
        { avatarName: 'avatar-4', userFullName: 'Елена Васильевна' },
        { avatarName: 'avatar-5', userFullName: 'Ольга Николаевна' },
        { avatarName: 'avatar-6', userFullName: 'Владимир Михайлович' },
        { avatarName: 'avatar-7', userFullName: 'Ксения Петровна' },
        { avatarName: 'avatar-8', userFullName: 'Илья Романов' },
        { avatarName: 'avatar-9', userFullName: 'Анна Дмитриевна' },
      ],
)

// Перемешивание массива
const shuffle = (array) => {
  const result = [...array]
  for (let i = result.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[randomIndex]] = [result[randomIndex], result[i]]
  }
  return result
}

const limitedShuffledData = computed(() => shuffle(localData.value).slice(0, props.limit))
</script>

<template>
  <ul class="list-unstyled d-flex align-items-center avatar-group mb-0">
    <li
      v-for="(item, index) in limitedShuffledData"
      :key="index"
      v-tooltip
      :title="item.userFullName"
      class="avatar avatar-sm pull-up"
      :style="{ width: avatarSize, height: avatarSize }"
    >
      <img
        class="rounded-circle"
        :src="'/src/assets/avatars/' + item.avatarName + '.png'"
        :alt="item.userFullName"
      />
    </li>
    <li
      v-if="localData.length > limit"
      class="avatar"
      :style="{ width: avatarSize, height: avatarSize }"
    >
      <span
        class="avatar-initial rounded-circle pull-up"
        v-tooltip
        :title="'Ещё ' + (localData.length - limit)"
      >
        +{{ localData.length - limit }}
      </span>
    </li>
  </ul>
</template>

<style scoped lang="scss"></style>
