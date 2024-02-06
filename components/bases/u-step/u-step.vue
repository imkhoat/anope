<template>
  <div class="u-step" :class="stepItemClass">
    <div v-if="subTitle" class="text-xs font-semibold leading-6 text-gray-400 mb-2">
      {{ subTitle }}
    </div>
    <div :class="stepItemWrapperClass">
      <div v-for="(item, index) in items" :key="index + '__u-step-item'" @click="onSelectStepItem(item?.value)">
        <slot name="item" :item="item">
          <u-step-item-com
            v-bind="item"
            :collapse="collapse"
            :orientation="orientation"
            :passed="currentStepIndex > index"
            :current="currentStepIndex == index"
            :last="items && index === (items?.length - 1)"
            :step="index + 1"
            :is-active="item?.value === currentStep"
          />
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { twJoin } from 'tailwind-merge'
import type { UStep } from '@/types/components/u-step'
import type { UStepItem } from '@/types/components/u-step-item'
import UStepItemCom from '@/components/bases/u-step/u-step-item.vue'

// props & emits
const props = withDefaults(defineProps<UStep>(), {
  as: 'div',
  orientation: 'horizontal'
})
const emits = defineEmits<{
  (event: 'next'): () => void,
  (event: 'prev'): () => void
}>()

// computed
const isHorizontal = computed(() => {
  return props.orientation === 'horizontal'
})
const currentStep = defineModel<UStepItem>()

const currentStepIndex = computed(() => {
  if (!props.items) {
    return 0
  }
  return Math.max(props.items?.findIndex(item => item?.value?.toString() === currentStep?.value?.toString()), 0)
})

const stepItemsLength = computed(() => {
  return props?.items?.length || 0
})

const collapseClass = computed(() => {
  return props.collapse ? 'w-fit' : 'w-full'
})

const stepItemClass = computed(() => {
  return twJoin(collapseClass.value)
})
const stepItemWrapperClass = computed(() => {
  return isHorizontal.value ? 'space-y-1 flex flex-col justify-start items-stretch' : 'space-x-1 flex flex-row justify-start items-stretch'
})
// methods
function onSelectStepItem(item: string | object | undefined) {
  if (item) {
    currentStep.value = item
  }
}

function onNext() {
  if (currentStepIndex.value === stepItemsLength.value - 1) {
    return
  }
  if (!props.items) {
    return
  }
  emits('next')
  currentStep.value = props?.items[currentStepIndex.value + 1].value
}

function onPrev() {
  if (currentStepIndex.value === 0) {
    return
  }
  if (!props.items) {
    return
  }
  emits('prev')
  currentStep.value = props?.items[currentStepIndex.value - 1].value
}

// expose
defineExpose({
  onNext, onPrev
})
</script>
