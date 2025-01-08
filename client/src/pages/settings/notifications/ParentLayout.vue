<script setup></script>

<template>
  <div class="card">
    <h5 class="card-title mb-3">Настройка уведомлений</h5>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr class="table-striped-columns">
            <th class="text-nowrap fw-bold">Тип уведомления</th>
            <th class="text-nowrap text-center fw-bold">Эл. почта</th>
            <th class="text-nowrap text-center fw-bold">Браузер</th>
            <th class="text-nowrap text-center fw-bold">Телефон</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th class="text-nowrap">Активность аккаунта</th>
            <td>
              <div class="form-check mb-0 d-flex justify-content-center align-items-center">
                <input class="form-check-input" type="checkbox" id="defaultCheck1" checked="" />
              </div>
            </td>
            <td>
              <div class="form-check mb-0 d-flex justify-content-center align-items-center">
                <input class="form-check-input" type="checkbox" id="defaultCheck2" checked="" />
              </div>
            </td>
            <td>
              <div class="form-check mb-0 d-flex justify-content-center align-items-center">
                <input class="form-check-input" type="checkbox" id="defaultCheck3" checked="" />
              </div>
            </td>
          </tr>
          <tr>
            <th class="text-nowrap">Новые сообщения</th>
            <td>
              <div class="form-check mb-0 d-flex justify-content-center align-items-center">
                <input class="form-check-input" type="checkbox" id="defaultCheck4" checked />
              </div>
            </td>
            <td>
              <div class="form-check mb-0 d-flex justify-content-center align-items-center">
                <input class="form-check-input" type="checkbox" id="defaultCheck5" checked />
              </div>
            </td>
            <td>
              <div class="form-check mb-0 d-flex justify-content-center align-items-center">
                <input class="form-check-input" type="checkbox" id="defaultCheck6" />
              </div>
            </td>
          </tr>
          <tr>
            <th class="text-nowrap">Специальные предложения</th>
            <td>
              <div class="form-check mb-0 d-flex justify-content-center align-items-center">
                <input class="form-check-input" type="checkbox" id="defaultCheck7" />
              </div>
            </td>
            <td>
              <div class="form-check mb-0 d-flex justify-content-center align-items-center">
                <input class="form-check-input" type="checkbox" id="defaultCheck8" />
              </div>
            </td>
            <td>
              <div class="form-check mb-0 d-flex justify-content-center align-items-center">
                <input class="form-check-input" type="checkbox" id="defaultCheck9" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <h6 class="text-body mt-2 mb-3">Когда отправлять вам уведомления?</h6>
    <form>
      <div class="row">
        <div class="col-sm-3">
          <select id="sendNotification" class="form-select" name="sendNotification">
            <option selected>Когда я в сети</option>
            <option>Всегда</option>
          </select>
        </div>
        <div class="mt-3">
          <button type="submit" class="btn btn-primary me-2">Сохранить</button>
          <button type="reset" class="btn btn-secondary">Отменить</button>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss"></style>
