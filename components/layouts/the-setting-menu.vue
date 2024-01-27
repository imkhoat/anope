<script lang="ts" setup>
import { useAuthStore } from '@/store/auth'

const emits = defineEmits<{
  (event: 'click'): () => void;
}>()

const route = useRoute()
const router = useRouter()
const localePath = useLocalePath()
const { logout } = useAuthStore()

const workspaceId = computed(() => {
  return route.params.id
})

const items = [
  [
    {
      label: 'All admin setting',
      class: 'font-normal',
      icon: 'i-heroicons-cog-8-tooth',
      click: () => {
        router.push(
          localePath({
            name: 'workspace-id-settings',
            params: { id: workspaceId.value }
          })
        )
      }
    }
  ],
  [
    {
      label: 'Business information',
      class: 'font-normal',
      icon: 'i-heroicons-briefcase',
      shortcuts: ['2'],
      click: () => {
        router.push(
          localePath({
            ...route,
            name: 'workspace-id-settings-business-information',
            params: { id: workspaceId.value }
          })
        )
      }
    },
    {
      label: 'User management',
      class: 'font-normal',
      icon: 'i-heroicons-users',
      shortcuts: ['2'],
      click: () => {
        router.push(
          localePath({
            ...route,
            name: 'workspace-id-settings-users-management',
            params: { id: workspaceId.value }
          })
        )
      }
    },
    {
      label: 'Reference data and default',
      class: 'font-normal',
      icon: 'i-heroicons-shield-check',
      shortcuts: ['3'],
      click: () => {
        router.push(
          localePath({
            ...route,
            name: 'workspace-id-settings-default-and-reference-data-tab',
            params: { id: workspaceId.value, tab: 'local-settings' }
          })
        )
      }
    }
  ],
  [
    {
      label: 'Logout',
      class: 'font-normal',
      icon: 'i-heroicons-arrow-left-circle',
      click: () => {
        logout()
      }
    }
  ]
]
</script>

<template>
  <u-dropdown :items="items" :popper="{ placement: 'right-end' }">
    <u-button
      variant="outline"
      size="2xs"
      color="gray"
      icon="i-heroicons-cog-8-tooth"
      @click="emits('click')"
    />
  </u-dropdown>
</template>
