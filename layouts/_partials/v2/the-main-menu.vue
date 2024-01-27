<template>
  <div class="the-menu">
    <u-vertical-navigation :links="linksMode" :ui="mainVerticalUI" />
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    collapse: boolean;
  }>(),
  {
    collapse: false
  }
)

const links = [
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
      icon: 'i-heroicons-cog-6-tooth',
      value: 'REPORTS'
    },
    {
      label: 'Support',
      to: '/Support',
      icon: 'i-heroicons-lifebuoy',
      value: 'REPORTS'
    }
  ]
]

const linksMode = computed(() => {
  return props.collapse
    ? links.map((group) => {
      return group.map((link) => {
        return { icon: link.icon }
      })
    })
    : links
})

// Vertical navigation config
const mainVerticalUI = {
  padding: 'px-2.5 py-2.5',
  font: 'font-normal',
  active:
    'text-gray-900 dark:text-white before:bg-gray-100 dark:before:bg-gray-800',
  inactive:
    'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:before:bg-gray-50 dark:hover:before:bg-gray-800/50',
  icon: {
    base: 'flex-shrink-0 w-5 h-5 font-bold ml-2',
    active: 'text-gray-700 dark:text-gray-200',
    inactive:
      'text-gray-600 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200'
  }
}
</script>
