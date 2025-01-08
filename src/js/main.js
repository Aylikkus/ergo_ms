import router from '@/js/routers.js'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Tooltip } from 'bootstrap/dist/js/bootstrap.bundle.min.js'

import '@/assets/main.css'
import '@/scss/styles.scss'

import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import VueApexCharts from 'vue3-apexcharts'

import { createApp } from 'vue'

import App from '@/App.vue'

const app = createApp(App)

app.directive('tooltip', {
  mounted(el) {
    new Tooltip(el, { trigger: 'hover' })
  },
})

app.use(router)
app.use(autoAnimatePlugin)
app.use(VueApexCharts)
app.mount('#app')
