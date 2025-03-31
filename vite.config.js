import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
    plugins: [vue()],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.js'),
            name: 'BaseZeroUI',
            fileName: (format) => `basezero-ui.${format}.js`
        },
        rollupOptions: {
            // Declarar todas las dependencias externas
            external: ['vue', '@nuxt/ui'],
            output: {
                globals: {
                    vue: 'Vue',
                    '@nuxt/ui': 'NuxtUI'
                }
            }
        }
    },
    resolve: {
        // Ayuda a resolver los módulos correctamente
        alias: {
            '@': resolve(__dirname, './src')
        }
    },
    // Excluir módulos problemáticos de la optimización
    optimizeDeps: {
        exclude: [
            '@nuxt/ui',
            '@tailwindcss/oxide',
            'lightningcss',
            '@tailwindcss/oxide-darwin-arm64'
        ]
    },
    // Configuración para módulos nativos
    ssr: {
        // No intentar importar estos módulos durante el SSR
        noExternal: ['@nuxt/ui']
    },
    // Simplificar configuración CSS para evitar dependencia de PostCSS
    css: {
        devSourcemap: true
    }
})
