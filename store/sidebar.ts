import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', () => {
  const route = useRoute()
  const localePath = useLocalePath()
  console.log('useSidebarStore', localePath({ name: 'workspace-id-organisations', params: route.params }))
  const _menus = ref(
    [
      [
        {
          label: 'Dashboard',
          to: '/dashboard',
          icon: 'i-heroicons-academic-cap',
          badge: '10',
          value: 'DASHBOARD'
        },
        {
          label: 'Calendar',
          to: '/calendar',
          icon: 'i-heroicons-calendar-days',
          value: 'TEAM'
        },
        {
          label: 'Horses',
          to: '/horses',
          icon: 'i-heroicons-arrow-path-rounded-square',
          value: 'PROJECTS'
        },
        {
          label: 'Organisations & Contacts',
          to: { name: 'workspace-id-organisations', params: route.params },
          icon: 'i-heroicons-inbox-stack',
          value: 'CALENDAR'
        },
        {
          label: 'Locations and Maps',
          to: '/location-and-maps',
          icon: 'i-heroicons-map-pin',
          value: 'DOCUMENTS'
        },
        {
          label: 'Financials',
          to: '/financials',
          icon: 'i-heroicons-credit-card',
          value: 'REPORTS'
        },
        {
          label: 'Communications',
          to: '/communications',
          icon: 'i-heroicons-chat-bubble-left-right',
          childs: [
            {
              label: 'Website redesign',
              to: '/website-redesign',
              icon: 'i-heroicons-home-modern',
              value: 'WEBSITE_REDESIGN'
            },
            {
              label: 'GraphQL API',
              to: '/graphql-api',
              icon: 'i-heroicons-gift',
              value: 'GRAPHQL_API'
            },
            {
              label: 'Customer migration guides',
              to: '/customer-migration-guides',
              icon: 'i-heroicons-film',
              value: 'CUSTOMERMIGRATION'
            },
            {
              label: 'Profit sharing program',
              to: '/profit-sharing-program',
              icon: 'i-heroicons-envelope-open',
              value: 'PROFITSHARING'
            }
          ]
        }
      ],
      [
        {
          label: 'Completition',
          to: '/completition',
          icon: 'i-heroicons-cpu-chip',
          value: 'REPORTS'
        },
        {
          label: 'Training',
          to: '/training',
          icon: 'i-heroicons-bookmark-square',
          value: 'REPORTS'
        }
      ],
      [
        {
          label: 'Settings',
          to: '/settings',
          icon: 'i-heroicons-cog-8-tooth',
          value: 'REPORTS'
        },
        {
          label: 'Support',
          to: '/support',
          icon: 'i-heroicons-shield-check',
          value: 'REPORTS'
        }
      ]
    ]
  )

  const menus = computed(() => {
    return _menus.value.filter(item => {
      // Add authorization logic
      return true || item
    })
  })

  // Collapse logic
  const _collapse = ref(false)

  const collapse = computed(() => {
    return _collapse.value
  })

  function toogleCollapseState(state?: boolean | undefined) {
    if (typeof state === 'undefined') {
      _collapse.value = !_collapse.value
    }
    else {
      _collapse.value = state
    }
  }

  return { menus, collapse, toogleCollapseState }
})
