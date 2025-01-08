<script setup>
import { RotateCcw, Upload } from 'lucide-vue-next'
import { ref } from 'vue'

const avatarInput = ref(null)
const avatarPreview = ref(null)
const defaultAvatar = ref('/src/assets/avatars/avatar-1.png')

// Обработчик загрузки аватара
const changeAvatar = (event) => {
  const file = event.target.files[0]
  if (file && file.type.startsWith('image/')) {
    const imageUrl = URL.createObjectURL(file)
    avatarPreview.value.src = imageUrl
    avatarPreview.value.onload = () => URL.revokeObjectURL(imageUrl)
  } else {
    alert('Пожалуйста, выберите изображение!')
  }
}

// Сброс аватара
const cancelAvatarUpload = () => {
  avatarInput.value.value = null
  avatarPreview.value.src = defaultAvatar.value
}
</script>

<template>
  <img
    src="/src/assets/avatars/avatar-1.png"
    alt="Avatar"
    class="rounded-circle"
    ref="avatarPreview"
    style="width: 100px; height: 100px"
  />
  <div class="button-wrapper">
    <label for="avatarFileInput" class="btn btn-sm btn-primary me-2 mb-2" tabindex="0">
      <span class="d-none d-sm-block">Загрузить фотографию</span>
      <span class="d-block d-sm-none"><Upload /></span>
      <input
        type="file"
        accept="image/png, image/jpeg"
        ref="avatarInput"
        @change="changeAvatar"
        id="avatarFileInput"
        style="display: none"
      />
    </label>
    <button type="button" class="btn btn-sm btn-secondary account-image-reset mb-2">
      <span class="d-none d-sm-block" @click="cancelAvatarUpload">Сбросить</span>
      <span class="d-block d-sm-none" @click="cancelAvatarUpload"><RotateCcw /></span>
    </button>

    <div class="text-muted" style="font-size: 15px">
      Рекомендуемый размер: 200 x 200. Разрешённые форматы: JPG, JPEG, PNG
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
