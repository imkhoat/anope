import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('application', () => {
  const _menus = ref(
    [
      [
        {
          label: 'Dashboard',
          to: '/Dashboard',
          icon: 'i-heroicons-academic-cap',
          badge: '10',
          value: 'DASHBOARD'
        },
        {
          label: 'Calendar',
          to: '/Team',
          icon: 'i-heroicons-calendar-days',
          value: 'TEAM'
        },
        {
          label: 'Horses',
          to: '/Projects',
          icon: 'i-heroicons-arrow-path-rounded-square',
          value: 'PROJECTS'
        },
        {
          label: 'Contacts',
          to: '/Calendar',
          icon: 'i-heroicons-inbox-stack',
          value: 'CALENDAR'
        },
        {
          label: 'Locations and Maps',
          to: '/Documents',
          icon: 'i-heroicons-map-pin',
          value: 'DOCUMENTS'
        },
        {
          label: 'Financials',
          to: '/Reports',
          icon: 'i-heroicons-credit-card',
          value: 'REPORTS'
        },
        {
          label: 'Communications',
          to: '/Projects',
          icon: 'i-heroicons-chat-bubble-left-right',
          childs: [
            {
              label: 'Website redesign',
              to: '/WebsiteRedesign',
              icon: 'i-heroicons-home-modern',
              value: 'WEBSITE_REDESIGN'
            },
            {
              label: 'GraphQL API',
              to: '/GraphQLAPI',
              icon: 'i-heroicons-gift',
              value: 'GRAPHQL_API'
            },
            {
              label: 'Customer migration guides',
              to: '/CustomerMigrationGuides',
              icon: 'i-heroicons-film',
              value: 'CUSTOMERMIGRATION'
            },
            {
              label: 'Profit sharing program',
              to: '/Profitsharingprogram',
              icon: 'i-heroicons-envelope-open',
              value: 'PROFITSHARING'
            }
          ]
        }
      ],
      [
        {
          label: 'Completition',
          to: '/Reports',
          icon: 'i-heroicons-cpu-chip',
          value: 'REPORTS'
        },
        {
          label: 'Training',
          to: '/Reports',
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
          to: '/Support',
          icon: 'i-heroicons-lifeboy',
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
