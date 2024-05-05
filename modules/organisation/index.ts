import { resolve, join } from 'path'
import type { Nuxt } from '@nuxt/schema'
import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    // Usually the npm package name of your module - in this case a local modal
    name: 'organisations-module',
    // The key in `nuxt.config` that holds the
    configKey: 'organisations-module',
    // Compatibility constraints
    compatibility: {
      // Semver version of supported nuxt versions
      nuxt: '^3.9.0'
    }
  },
  setup(options: any, nuxt: Nuxt) {
    // Auto register components
    nuxt.hook('components:dirs', (dirs) => {
      dirs.push({
        path: join(__dirname, 'components')
      })
    })

    // Auto register composables
    nuxt.hook('imports:dirs', (dirs) => {
      dirs.push(resolve(__dirname, './composables'))
    })

    // Auto register pages
    nuxt.hook('pages:extend', (pages) => {
      pages.push({
        name: 'workspace-id-organisations',
        path: '/workspace/:id/organisations',
        file: resolve(__dirname, './pages/index.vue')
      })
    })
  }
})
