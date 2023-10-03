<template>
    <div class="onboarding-page w-full h-full grid grid-cols-12 gap-2">
        <div class="left-side col-span-9 px-16 pt-16">
            <step-update-profile v-if="activeStep === 'STEP_01'"></step-update-profile>
            <step-enter-business-information v-else-if="activeStep === 'STEP_02'"></step-enter-business-information>
        </div>
        <div class="right-side min-h-full bg-white col-span-3 -my-4 -mr-4 flex flex-col justify-between items-stretch">
            <onboarding-stepper />
            <support-card></support-card>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { provide } from 'vue'
import { onboardingInjectionKey } from '@/utils/keys'
import SupportCard from './_partials/support-card.vue';
import { UStepItem } from '~/types/components/u-step-item';
import OnboardingStepper from './_partials/onboarding-stepper.vue';
import StepUpdateProfile from './_partials/step-update-profile.vue';
import StepEnterBusinessInformation from './_partials/step-enter-business-information.vue';

// type

interface Step extends UStepItem {
    title: string,
    description: string,
    to: string | object
}

// layout
definePageMeta({
    layout: "onboarding",
});

// data
const form = reactive({
    email: undefined,
    fullName: {
        firstName: undefined,
        lastName: undefined
    },
    password: undefined,
    about: undefined,
    jobTitle: undefined,
    phone: undefined,
    email2: undefined,
    country: undefined,
    businessCountry: 'United State',
    businessCurrency: 'AUD'
})

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
const activeStep = ref<'STEP_01' | 'STEP_02' | 'STEP_03'>('STEP_01')


// propvide
provide(onboardingInjectionKey, { form, steps, activeStep })
</script>