<script setup>
import { ref } from 'vue'
import { CreditCard, Handshake, Wallet } from 'lucide-vue-next'

const transactions = ref([
  {
    icon: CreditCard,
    iconBackground: 'bg-warning-subtle',
    iconColor: 'text-warning',
    title: 'Visa',
    subtitle: 'Получение средств',
    amount: '+82.6',
    color: 'text-success',
  },
  {
    icon: Wallet,
    iconBackground: 'bg-info-subtle',
    iconColor: 'text-info',
    title: 'Кошелёк',
    subtitle: 'Отправка средств',
    amount: '+270.69',
    color: 'text-success',
  },
  {
    icon: Handshake,
    iconBackground: 'bg-danger-subtle',
    iconColor: 'text-danger',
    title: 'Перевод',
    subtitle: 'Возврат',
    amount: '+637.91',
    color: 'text-success',
  },
  {
    icon: Handshake,
    iconBackground: 'bg-danger-subtle',
    iconColor: 'text-danger',
    title: 'Перевод',
    subtitle: 'Оплата',
    amount: '-838.71',
    color: 'text-danger',
  },
  {
    icon: Wallet,
    iconBackground: 'bg-info-subtle',
    iconColor: 'text-info',
    title: 'Кошелёк',
    subtitle: 'Starbucks',
    amount: '+203.33',
    color: 'text-success',
  },
  {
    icon: CreditCard,
    iconBackground: 'bg-warning-subtle',
    iconColor: 'text-warning',
    title: 'Mastercard',
    subtitle: 'Отправка средств',
    amount: '-92.45',
    color: 'text-danger',
  },
])
</script>

<template>
  <div class="card h-100">
    <h5 class="card-title mb-3">Транзакции</h5>
    <ul class="p-0 m-0">
      <li
        v-for="(transaction, index) in transactions"
        :key="index"
        class="d-flex align-items-center mb-3"
      >
        <div class="d-flex flex-shrink-0 me-2">
          <span
            class="rounded p-2"
            :class="`${transaction.iconBackground} ${transaction.iconColor}`"
          >
            <component :is="transaction.icon" v-if="transaction.icon" />
          </span>
        </div>
        <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
          <div class="me-2">
            <small class="d-block">{{ transaction.title }}</small>
            <h6 class="fw-normal mb-0">{{ transaction.subtitle }}</h6>
          </div>
          <div class="user-progress d-flex align-items-center gap-2">
            <h6 class="fw-normal mb-0" :class="transaction.color">{{ transaction.amount }}</h6>
            <span class="text-muted">₽</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss"></style>
