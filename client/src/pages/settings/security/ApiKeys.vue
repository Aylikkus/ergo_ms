<script setup>
import { ref } from 'vue'
import { Copy, CopyCheck } from 'lucide-vue-next'

// Список ключей
const apiKeyList = ref([
  {
    id: 1,
    name: 'Ключ 1',
    key: '23eaf7f0-f4f7-495e-8b86-fad3261282ac',
    access: 'Полный контроль',
    date: new Date('2024-04-10 16:24:09'),
  },
  {
    id: 2,
    name: 'Ключ 2',
    key: 'bb98e571-a2e2-4de8-90a9-2e231b5e99',
    access: 'Только чтение',
    date: new Date('2024-05-17 04:32:47'),
  },
])
const copiedIndexes = ref([])

// Копирование текста
const copyToClipboard = async (index) => {
  try {
    await navigator.clipboard.writeText(apiKeyList.value[index].key)

    // Добавление индекса копированного элемента
    copiedIndexes.value.push(index)
    setTimeout(() => {
      copiedIndexes.value = copiedIndexes.value.filter((item) => item !== index)
    }, 1000)
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <div class="card">
    <div class="row row-gap-3">
      <div class="col-12 col-lg-4 border-end">
        <h5 class="card-title">Создать API-ключ</h5>
        <div class="row">
          <form>
            <div class="mb-3 col-12">
              <label for="apiAccess" class="form-label">Права доступа</label>
              <div class="position-relative">
                <select class="form-select" id="apiAccess" required>
                  <option value="">Выбрать тип ключа</option>
                  <option value="full">Полный контроль</option>
                  <option value="modify">Права на редактирование</option>
                  <option value="read-execute">Чтение и выполнение</option>
                  <option value="folders">Просмотр содержимого</option>
                  <option value="read">Только чтение</option>
                  <option value="read-write">Чтение и запись</option>
                </select>
              </div>
            </div>
            <div class="col-12">
              <label for="apiKey" class="form-label">Имя API-ключа</label>
              <input
                type="text"
                class="form-control"
                id="apiKey"
                name="apiKey"
                placeholder="Ключ 1"
              />
            </div>
            <div class="mt-3">
              <button type="submit" class="btn btn-primary">Создать ключ</button>
            </div>
          </form>
        </div>
      </div>
      <div class="col-12 col-lg-8">
        <h5 class="card-title">Мои API-ключи</h5>
        <div class="row">
          <div v-for="(key, index) in apiKeyList" :key="index" class="col-12">
            <div class="card bg-secondary-subtle mb-1">
              <div class="d-flex align-items-center gap-2 mb-2">
                <h5 class="card-title mb-0">{{ key.name }}</h5>
                <span class="badge bg-primary-subtle text-primary">{{ key.access }}</span>
              </div>
              <div class="d-flex align-items-center gap-2" v-auto-animate>
                <span class="card-text">{{ key.key }}</span>
                <span @click="copyToClipboard(index)" style="cursor: pointer">
                  <component :is="copiedIndexes.includes(index) ? CopyCheck : Copy" :size="18" />
                </span>
                <small v-if="copiedIndexes.includes(index)" class="d-block text-muted">
                  Скопировано
                </small>
              </div>
              <div class="text-muted">
                <small>Создан {{ key.date.toLocaleString('ru-RU') }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@media (width <= 991px) {
  .border-end {
    border: none !important;
  }
}
</style>
