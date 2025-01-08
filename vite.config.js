import { fileURLToPath, URL } from 'node:url'; // Импорт функций для работы с URL и путями

import vue from '@vitejs/plugin-vue'; // Импорт плагина Vue для Vite
import { defineConfig } from 'vite'; // Импорт функции для определения конфигурации Vite
import vueDevTools from 'vite-plugin-vue-devtools'; // Импорт плагина Vue DevTools для Vite

// Определение конфигурации Vite
export default defineConfig({
  // Подключение плагинов
  plugins: [
    vue(), // Подключение плагина Vue для Vite
    //vueDevTools() // Подключение плагина Vue DevTools для Vite
  ],

  // Настройка разрешения путей
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)) // Создание псевдонима '@' для пути './src'
    },
  },

  // Настройка обработки CSS
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/scss/_mixins.scss"; // Импорт миксинов SCSS
          @import "@/scss/_variables.scss"; // Импорт переменных SCSS
        `,
      },
    },
  },

  // Настройка сервера разработки
  server: {
    port: 8001, // Установка порта для сервера разработки
    host: 'localhost', // Установка хоста для сервера разработки
    https: false, // Отключение HTTPS для сервера разработки
  },
});