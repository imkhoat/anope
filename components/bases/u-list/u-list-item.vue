<template>
  <component
    :is="as"
    class="cursor-pointer text-gray-700 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold hover:text-primary-600 hover:bg-gray-50"
    :class="uListItemClass"
  >
    <div class="ml-auto shrink-0 flex justify-start items-center">
      <slot name="icon">
        <u-icon v-if="icon" :name="icon" class="h-5 w-5" />
      </slot>
    </div>
    <div class="flex flex-column justify-start items-center flex-grow">
      <slot>
        <span>
          {{ title }}
        </span>
        <p class="font-normal">{{ description }}</p>
      </slot>
    </div>
    <div>
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
import { twMerge, twJoin } from 'tailwind-merge'
import { UListItem } from "@/types/components/u-list-item";

const props = withDefaults(defineProps<UListItem>(), {
  as: "div",
  activeClass: 'bg-primary-50 text-primary-600'
});

const stateClass = computed(() => {
  console.log( props.isActive)
  return props.isActive ? props.activeClass : ''
})

const uListItemClass = computed(() => {
  return twJoin(stateClass.value)
})
</script>
