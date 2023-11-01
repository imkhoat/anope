
<template>
  <u-modal v-model="modalState" :prevent-close="preventClose" :ui="modalUI">
    <u-card-crud v-bind="props" @yes="emits('yes')" @no="emits('no')">
      <slot />
    </u-card-crud>
  </u-modal>
</template>

<script lang="ts" setup>
import UCardCrud from '@/components/bases/u-card/u-card-crud.vue'
import type { CardCrud } from '@/components/bases/u-card/u-card-crud.vue'

export interface ModalCrud extends CardCrud {
  modelValue: boolean,
  preventClose?: boolean,
  width?: string
}

// props & emits
const props = defineProps<ModalCrud>()
const emits = defineEmits<{
  (event: 'no'): () => void
  (event: 'yes'): () => void,
  (event: 'update:modelValue', state: boolean): () => void;
}>()


const modalUI = computed(() => {
  return {
    width: props.width || 'sm:max-w-lg'
  }
})
// define model
const modalState = defineModel<boolean>()
</script>