import ZButton from './components/ZButton.vue'
// Importar UButton directamente
import { UButton } from '@nuxt/ui'

// Exportar componentes individuales
export { ZButton }

// Exportar plugin de Vue
export default {
    install(app) {
        // Registrar nuestro componente
        app.component('ZButton', ZButton)
        // También registrar el componente base si es necesario
        app.component('UButton', UButton)
    }
}
