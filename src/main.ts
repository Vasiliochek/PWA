import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Workbox } from 'workbox-window';

createApp(App).mount('#app')

if ('serviceWorker' in navigator) {
  const wb = new Workbox('/service-worker.js');
  wb.register();
}
