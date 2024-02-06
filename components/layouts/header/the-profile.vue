<script setup>
import { useAuthStore } from '@/store/auth'

const { logout } = useAuthStore()

async function onLogout() {
  await logout()
}
const items = [
  [
    {
      label: 'Profile',
      avatar: {
        src: 'https://avatars.githubusercontent.com/u/739984?v=4'
      }
    }
  ],
  [
    {
      label: 'Workspace miguel',
      icon: 'i-heroicons-briefcase',
      shortcuts: ['1'],
      click: () => {
        console.log('Edit')
      }
    },
    {
      label: 'Workspace manipute',
      icon: 'i-heroicons-briefcase',
      shortcuts: ['2'],
      disabled: true
    }
  ],
  [
    {
      label: 'Setting',
      icon: 'i-heroicons-cog-8-tooth'
    },
    {
      label: 'Security',
      icon: 'i-heroicons-shield-check'
    }
  ],
  [
    {
      label: 'Logout',
      icon: 'i-heroicons-arrow-left-circle',
      click: () => {
        onLogout()
      }
    }
  ]
]
</script>

<template>
  <u-dropdown :items="items" :popper="{ placement: 'bottom-start' }">
    <u-button color="white" variant="soft">
      <u-avatar
        src="https://avatars.githubusercontent.com/u/739984?v=4"
        alt="Avatar"
      />
    </u-button>
  </u-dropdown>
</template>
