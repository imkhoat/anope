<template>
  <component
    :is="as"
    class="cursor-pointer relative text-gray-700 group rounded-md text-sm leading-6 font-semibold"
    :class="uStepItemClass"
    @click="onClickStepItem"
  >
    <div v-if="!last" class="absolute h-full w-[2px] top-5 left-5 -translate-x-1/2" :class="tickClass" />
    <div class="flex gap-x-3 p-2 py-4">
      <div class="ml-auto shrink-0 flex justify-start items-start">
        <slot name="icon">
          <u-avatar size="xs" :alt="avatarAltText" class="ring ring-2 ring-white mt-1" :class="iconClass">
            <u-icon v-if="showedIcon" :name="showedIcon" class="h-4 w-4" />
          </u-avatar>
        </slot>
      </div>
      <div v-if="!collapse" class="flex flex-col justify-center items-start flex-grow">
        <slot>
          <span>
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
    </div>
  </component>
</template>

<script lang="ts" setup>
import { twJoin } from 'tailwind-merge'
import type { UStepItem } from '@/types/components/u-step-item'

// composables
const router = useRouter()

// props & emits
const props = withDefaults(defineProps<UStepItem>(), {
  as: 'div',
  collapse: false,
  dense: true,
  passedIcon: 'i-heroicons-check-20-solid',
  currentIcon: 'i-heroicons-map-pin-20-solid',
  last: false
})


// computed
const isPassed = computed(() => {
  return props.passed
})
const isCurrent = computed(() => {
  return props.current
})
const showedIcon = computed(() => {
  return isPassed.value ? props.passedIcon : null
})

const iconClass = computed(() => {
  return isPassed.value ? 'bg-primary-500 text-white border border-2 border-primary-500' : isCurrent.value ? 'bg-white border border-2 border-blue-500' : 'bg-white border border-2 border-gray-100'
})
const tickClass = computed(() => {
  return isPassed.value ? 'bg-primary-500' : 'bg-gray-100'
})
const stateClass = computed(() => {
  return props.isActive ? props.activeClass : ''
})

const denseClass = computed(() => {
  return props.dense ? 'min-h-[40px]' : 'min-h-[56px]'
})

const collapseClass = computed(() => {
  return props.collapse ? 'w-fit' : 'w-full'
})

const passedTextClass = computed(() => {
  return isPassed.value ? 'opacity-90' : isCurrent.value ? '' : 'opacity-70'
})

const uStepItemClass = computed(() => {
  return twJoin(stateClass.value, collapseClass.value, denseClass.value, passedTextClass.value)
})

const avatarAltText = computed(() => {
  return isPassed.value ? '' : (props.step || '')?.toString()
})

// methods
function onClickStepItem() {
  if (props.to) {
    router.push(props.to)
  }
}
</script>
  