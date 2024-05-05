<script lang="ts" setup>
defineProps<{
  collapse: boolean
}>()
const emits = defineEmits<{
  (event: 'click'): () => void;
}>()

const items = [
  [
    {
      label: 'Signup new workspace',
      icon: 'i-heroicons-plus',
      shortcuts: ['N'],
      click: () => {
        console.log('Edit')
      }
    }
  ],
  [
    {
      label: 'Ardex Workspace',
      icon: 'i-heroicons-briefcase',
      click: () => {
        console.log('Edit')
      }
    },
    {
      label: 'Sam Workspace',
      icon: 'i-heroicons-briefcase',
      click: () => {
        console.log('Edit')
      }
    },
    {
      label: 'Miguel Workspace',
      icon: 'i-heroicons-briefcase',
      click: () => {
        console.log('Edit')
      }
    },
    {
      label: 'Ardex Workspace 02',
      icon: 'i-heroicons-briefcase',
      click: () => {
        console.log('Edit')
      }
    }
  ]
]
</script>

<template>
  <u-dropdown v-if="!collapse" :items="items" :popper="{ placement: 'right-end' }">
    <u-button
      variant="ghost"
      size="2xs"
      color="gray"
      icon="i-heroicons-chevron-down-20-solid"
      @click="emits('click')"
    />
  </u-dropdown>
</template>
