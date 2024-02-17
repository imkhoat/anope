export default defineAppConfig({
    ui: {
      primary: 'emerald',
      gray: 'cool',
      colors: ['error', 'warning', 'info', 'success'],
      card: {
        rounded: 'rounded-2xl',
        shadow: ''
      },
      table: {
        default: {
          emptyState: {
            icon: 'i-heroicons-archive-box',
            label: 'No items found.'
          }
        }
      },
      modal: {
        rounded: 'rounded-2xl'
      },
      icons: {
        dynamic: true
      }
    }
  })
