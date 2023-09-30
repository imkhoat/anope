<template>
  <component
    :is="as"
    class="cursor-pointer text-gray-700 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold hover:text-primary-600 hover:bg-gray-50"
    :class="uListItemClass"
    @click="onClickListItem"
  >
    <div class="ml-auto shrink-0 flex justify-start items-center">
      <slot name="icon">
        <u-icon v-if="icon" :name="icon" class="h-5 w-5" />
      </slot>
    </div>
    <div v-if="!collapse" class="flex flex-col justify-center items-start flex-grow">
      <slot>
        <span>
          {{ title }}
        </span>
        <p class="font-normal text-xs opacity-70">{{ description }}</p>
      </slot>
    </div>
    <div v-if="!collapse" class="ml-auto shrink-0 flex justify-end items-center">
      <slot name="action">
        <u-badge
          v-if="badge"
          color="primary"
          variant="solid"
          size="xs"
          :label="badge"
        />
      </slot>
    </div>
  </component>
</template>
<script lang="ts" setup>
import { twJoin } from 'tailwind-merge'
import { UListItem } from "@/types/components/u-list-item";

// composables
const router = useRouter()

// props & emits
const props = withDefaults(defineProps<UListItem>(), {
  as: "div",
  activeClass: 'bg-gray-50 text-primary-600',
  collapse: false
});


// computed
const stateClass = computed(() => {
  return props.isActive ? props.activeClass : ''
})

const collapseClass = computed(() => {
  return props.collapse ? 'w-fit': 'w-full'
})

const uListItemClass = computed(() => {
  return twJoin(stateClass.value, collapseClass.value)
})

// methods
function onClickListItem() {
  if (props.to) {
    router.push(props.to)
  }
}
</script>
