<template>
    <u-card :ui="{
        ring: '',
        shadow: ''
    }">
        <u-step :items="steps" v-model="currentStep" />
    </u-card>
</template>
<script lang="ts" setup>
import UStep from '@/components/bases/u-step/u-step.vue';
import { UStepItem } from '~/types/components/u-step-item';
// type
interface Step extends UStepItem {
    title: string,
    description: string,
    to: string | object
}
// data
const currentStep = ref('STEP_01')

const steps = reactive<Partial<Step>[]>([
    {
        title: 'Update your profile',
        description: 'Fill you profile information to access potential data',
        to: '#step-01',
        value: 'STEP_01'
    }, {
        title: 'Enter your business information',
        description: 'Fill you profile information to access potential data',
        to: '#step-02',
        value: 'STEP_02'
    }, {
        title: 'Enter your property information',
        description: 'Fill you profile information to access potential data',
        to: '#step-01',
        value: 'STEP_03'
    }, {
        title: 'Setup your hourses',
        description: 'Fill you profile information to access potential data',
        to: '#step-01',
        value: 'STEP_04'
    }, {
        title: 'Intergrate your Account System',
        description: 'Fill you profile information to access potential data',
        to: '#step-01',
        value: 'STEP_05'
    }
])
</script>