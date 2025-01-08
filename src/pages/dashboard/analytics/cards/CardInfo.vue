<script setup></script>

<template>
  <div class="card">
    <div class="d-flex align-items-start row">
      <div class="col-sm-7">
        <div class="card-body">
          <h5 class="card-title text-primary mb-3">Поздравляем!</h5>
          <p class="mb-6">
            Сегодня вы продали на 72% больше товаров.<br />Проверьте свой новый значок в профиле.
          </p>
          <a href="#" class="btn btn-sm btn-primary">Просмотр значков</a>
        </div>
      </div>
      <div class="col-sm-5 text-center text-sm-left">
        <div class="card-body pb-0 px-0 px-md-6">
          <img src="/src/assets/userpc.png" :height="150" alt="View Badge User" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
