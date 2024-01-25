import { createApp } from 'vue'
import App from './App.vue'
import VueScrollTo from 'vue-scrollto'

import './assets/main.css'

const app = createApp(App)

// Plugin vue-scrollto
app.use(VueScrollTo, {
  duration: 500, // duração da animação em milissegundos
  easing: 'ease-in-out', // opcional: a função de easing da animação
  offset: -50, // opcional: deslocamento para a posição final
  force: true // opcional: rolar mesmo se o destino já estiver visível
})

app.mount('#app')
