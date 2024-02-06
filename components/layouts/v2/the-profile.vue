<template>
  <u-vertical-navigation :links="links" :ui="verticalUI">
    <template #avatar="{ link }">
      <u-avatar v-if="link?.avatar" color="primary">
        <u-avatar :src="link?.avatar?.src" />
      </u-avatar>
    </template>
    <template #default="{ link }">
      <div
        v-if="!collapse"
        class="flex-grow flex flex-col justify-start items-stretch text-left ease-linear duration-300 whitespace-nowrap"
      >
        <strong class="group-hover:text-gray-900 text-gray-900 relative font-medium">
          {{ link.label }}
        </strong>
        <p class="group-hover:text-gray-600 relative p-0 tex-gray-600 text-xs">
          {{ link.description }}
        </p>
      </div>
    </template>
    <template #badge>
      <the-setting-menu :collapse="collapse" />
    </template>
  </u-vertical-navigation>
</template>

<script lang="ts" setup>
import TheSettingMenu from '@/components/layouts/the-setting-menu.vue'
withDefaults(
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
      label: 'Miguel Bui',
      description: 'miguelbui@gmail.com',
      avatar: {
        src: 'https://ipx.nuxt.com/s_32x32/gh_avatar/benjamincanac',
        srcset: 'https://ipx.nuxt.com/s_32x32/gh_avatar/benjamincanac 2x',
        alt: ''
      },
      value: 'DASHBOARD'
    }
  ]
]

// ui config
const verticalUI = {
  base: 'group relative flex justify-between items-center gap-4 focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-1 focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-primary-400 before:absolute before:inset-px before:rounded-md disabled:cursor-not-allowed disabled:opacity-75',
  padding: 'px-2.5 py-2.5'
}
</script>
