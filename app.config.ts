export default defineAppConfig({
    ui: {
      strategy: 'override',
      primary: 'green',
      gray: 'cool',
      colors: ['rose'],
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
      }
    }
  })
