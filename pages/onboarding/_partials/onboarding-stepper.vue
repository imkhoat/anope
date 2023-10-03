<template>
    <u-card :ui="{
        ring: '',
        shadow: ''
    }">
        <u-step :items="steps" v-model="activeStep" @next="emits('next')" @prev="emits('prev')"/>
    </u-card>
</template>
<script lang="ts" setup>
import { inject } from 'vue'
import { onboardingInjectionKey } from '@/utils/keys'
import UStep from '@/components/bases/u-step/u-step.vue';

// type

// inject
const { activeStep, steps } = inject<{
    activeStep: string | number | undefined
    steps: object[] | undefined
}>(onboardingInjectionKey, { activeStep: '', steps: [] })

// props & emits
const emits = defineEmits<{
    (event: 'next') : () => void,
    (event: 'prev') : () => void
}>()

// data
</script>