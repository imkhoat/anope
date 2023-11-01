<template>
  <component :is="as" :class="uListItemClass" @click="onClickListItem">
    <div class="ml-0 shrink-0 flex justify-center items-center">
      <slot name="icon" :icon="icon">
        <u-icon v-if="icon" :name="icon" :class="denseIconClass" />
      </slot>
    </div>
    <div v-if="!collapse" class="flex flex-col justify-center items-start flex-grow truncate">
      <slot>
        <span class="truncate">
          {{ title }}
        </span>
        <p class="font-normal text-xs opacity-70">
          {{ description }}
        </p>
      </slot>
    </div>
    <div v-if="!collapse" class="ml-auto shrink-0 flex justify-end items-center">
      <slot name="action">
        <u-badge v-if="badge" color="primary" variant="solid" size="xs" :label="badge" />
      </slot>
    </div>
  </component>
</template>

<script lang="ts" setup>
import { twJoin } from 'tailwind-merge'
import type { ListItem } from '@/types/components/u-list-item'

// composables
const router = useRouter()

// props & emits
const props = withDefaults(defineProps<ListItem>(), {
  as: 'div',
  activeClass: 'bg-gray-50 text-primary-600',
  hoverClass: 'hover:bg-gray-100 hover:text-gray-900',
  class: '',
  collapse: false,
  dense: true
})


// computed
const stateClass = computed(() => {
  return props.isActive ? props.activeClass : ''
})

const denseClass = computed(() => {
  return props.dense ? 'min-h-[40px] min-w-[40px]' : 'min-h-[56px] min-w-[56px]'
})

const denseIconClass = computed(() => {
  return props.dense ? 'w-6 h-6' : 'w-8 h-8'
})

const collapseClass = computed(() => {
  return props.collapse ? 'w-fit' : 'w-full'
})

const uListItemClass = computed(() => {
  const defaultClass = 'cursor-pointer text-gray-700 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
  return twJoin(defaultClass, props.class, stateClass.value, collapseClass.value, denseClass.value, props.hoverClass)
})

// methods
function onClickListItem() {
  if (props.to) {
    router.push(props.to)
  }
}
</script>
