<template>
  <div class="u-list" :class="listItemClass">
    <div v-if="subTitle" class="text-xs font-semibold leading-6 text-gray-400 mb-2">{{ subTitle }}</div>
    <div class="space-y-1 flex flex-col justify-start items-stretch">
      <div v-for="(item, index) in items" :key="index + '__u-list-item'" @click="onSelectListItem(item?.value)">
        <slot name="item" :item="item">
          <u-list-item v-bind="item" :collapse="collapse" :is-active="item?.value === activeItem"></u-list-item>
        </slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { twJoin } from 'tailwind-merge'
import { IUList } from "@/types/components/u-list";
import UListItem from "@/components/bases/u-list/u-list-item.vue";

// props & emits
const props = withDefaults(defineProps<IUList>(), {
  as: "div",
});
const emits = defineEmits<{
  (event: "update:modelValue", item: string | object | undefined): () => void;
}>();

// computed
const activeItem = defineModel()

const collapseClass = computed(() => {
  return props.collapse ? 'w-fit': 'w-full'
})

const listItemClass = computed(() => {
  return twJoin(collapseClass.value)
})

// methods
function onSelectListItem(item: string | object | undefined) {
  if (!!item) {
    activeItem.value = item
  }
}
</script>
