
<template>
    <u-modal v-model="modalState" :prevent-close="preventClose">
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
    preventClose?: boolean
}

// props & emits
const props = defineProps<ModalCrud>()
const emits = defineEmits<{
    (event: 'no'): () => void
    (event: 'yes'): () => void,
    (event: "update:modelValue", state: boolean): () => void;
}>();

// define model
const modalState = defineModel<boolean>()
</script>