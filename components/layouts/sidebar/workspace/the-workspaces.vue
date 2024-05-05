<template>
  <u-vertical-navigation :links="links" :ui="verticalUI">
    <template #avatar="{ link }">
      <u-avatar color="primary" class="my-0.5">
        <u-avatar :src="link.avatar.src" />
      </u-avatar>
    </template>
    <template #default="{ link }">
      <div
        v-if="!collapse"
        class="ease-linear duration-300 flex-grow flex flex-col justify-start items-stretch text-left whitespace-nowrap"
      >
        <h1 class="group-hover:text-gray-900 text-gray-900 relative">
          {{ link.label }}
        </h1>
        <p class="group-hover:text-gray-600 relative p-0 tex-gray-600 text-xs">
          {{ link.description }}
        </p>
      </div>
    </template>
    <template #badge>
      <the-workspace-menu :collapse="collapse" />
    </template>
  </u-vertical-navigation>
</template>

<script lang="ts" setup>
import TheWorkspaceMenu from './the-workspace-menu.vue'
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
      label: 'Ardex',
      description: 'Horses Workspace',
      avatar: {
        src: 'https://lemonsqueezy.imgix.net/avatars/stores/30342/o4uMLSiP4Ew92bjeC78FwkzuTFErtuZ9wnfkGMUI.png?fit=clip&h=100&ixlib=php-3.3.1&w=100&s=3282cda85da1a14f64161751885b58f8',
        srcset: 'https://ipx.nuxt.com/s_32x32/gh_avatar/benjamincanac 2x',
        alt: ''
      },
      value: 'DASHBOARD'
    }
  ]
]

// ui config
const verticalUI = {
  wrapper: 'border-b border-gray-200',
  base: 'group relative flex justify-between items-center gap-4 focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-1 focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-primary-400 before:absolute before:inset-px before:rounded-md disabled:cursor-not-allowed disabled:opacity-75',
  padding: 'px-2.5 py-2.5'
}
</script>
