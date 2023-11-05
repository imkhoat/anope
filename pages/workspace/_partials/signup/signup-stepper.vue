<template>
  <u-card :ui="cardUI">
    <u-step
      v-model="activeStep"
      :orientation="orientation"
      :items="steps"
      class="!w-fit"
      @next="emits('next')"
      @prev="emits('prev')"
    />
  </u-card>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import { onboardingInjectionKey } from '@/utils/keys'
import UStep from '@/components/bases/u-step/u-step.vue'

// inject
const { activeStep, steps } = inject<{
  activeStep: string | number | undefined
  steps: object[] | undefined
}>(onboardingInjectionKey, { activeStep: '', steps: [] })

//setup
const cardUI = {
  base: 'w-fit',
  background: 'bg-transparent',
  ring: '',
  shadow: ''
}
// props & emits
defineProps<{
  orientation: 'vertical' | 'horizontal'
}>()
const emits = defineEmits<{
  (event: 'next'): () => void,
  (event: 'prev'): () => void
}>()

// data
</script>
