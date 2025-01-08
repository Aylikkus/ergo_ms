<script setup>
import ModalCenter from '@/components/ModalCenter.vue'
import SubmitForm from '@/pages/roles/SubmitForm.vue'
</script>

<template>
  <div class="row align-items-center gap-3 gap-sm-0">
    <div class="col-12 col-sm-2">
      <select class="form-select" @change="$emit('changeRowsPerPage', +$event.target.value)">
        <option value="5" selected>5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
    </div>
    <div class="col-12 col-sm-10 d-inline-flex justify-content-center justify-content-sm-end gap-3">
      <label
        ><input
          type="search"
          class="form-control"
          placeholder="Поиск..."
          @input="$emit('searchRowData', $event.target.value)"
      /></label>
      <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#roleAdd">
        Добавить
      </button>
      <ModalCenter title="Добавить настройку доступа" modalId="roleAdd">
        <SubmitForm @addPermission="$emit('addPermission', $event)" />
      </ModalCenter>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
