export default defineAppConfig({
  ui: {
    primary: 'emerald',
    gray: 'cool',
    colors: ['error', 'warning', 'info', 'success'],
    card: {
      rounded: 'rounded-2xl',
      shadow: ''
    },
    button: {
      rounded: 'rounded-lg',
      variant: {
        solid: 'bg-gradient-to-b from-{color}-500 to-{color}-600 shadow-sm text-white dark:text-gray-900 hover:from-{color}-600 hover:to-{color}-800 disabled:bg-{color}-500 dark:from-{color}-400 dark:to-{color}-600 dark:hover:from-{color}-500 dark:hover:to-{color}-700 dark:disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400',
        outline: 'ring-1 ring-inset ring-{color}-300 text-{color}-800 dark:text-{color}-500 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400'
      }
    },
    input: {
      rounded: 'rounded-lg'
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
