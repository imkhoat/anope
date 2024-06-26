<template>
  <div class="u-list" :class="listItemClass">
    <div v-if="subTitle" class="text-xs font-semibold leading-6 text-gray-400 mb-2">
      {{ subTitle }}
    </div>
    <div class="space-y-1 flex flex-col justify-start items-stretch">
      <div v-for="(item, index) in items" :key="index + '__u-list-item'" @click="onSelectListItem(item?.value)">
        <slot name="item" :item="item">
          <u-list-item v-bind="item" :collapse="collapse" :is-active="item?.value === activeItem" />
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { twJoin } from 'tailwind-merge'
import type { List } from '@/types/components/u-list'
import type { ListItem } from '@/types/components/u-list-item'
import UListItem from '@/components/bases/u-list/u-list-item.vue'

// props & emits
const props = withDefaults(defineProps<List>(), {
  as: 'div'
})

// computed
const activeItem = defineModel<ListItem>()

const collapseClass = computed(() => {
  return props.collapse ? 'w-fit' : 'w-full'
})

const listItemClass = computed(() => {
  return twJoin(collapseClass.value)
})

// methods
function onSelectListItem(item: string | object | undefined) {
  if (item) {
    activeItem.value = item
  }
}
</script>
