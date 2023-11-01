export default defineAppConfig({
    ui: {
      strategy: 'override',
      primary: 'green',
      gray: 'cool',
      rose: 'rose',
      card: {
        rounded: 'rounded-xl'
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