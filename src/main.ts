import { createApp } from 'vue'
import App from './App.vue'
import ZButton from './components/ZButton.vue'

// Importar estilos base
import './style.css'

// Crear aplicación Vue
const app = createApp(App)

// Registrar componentes
app.component('ZButton', ZButton)

// Montar la aplicación
app.mount('#app')
