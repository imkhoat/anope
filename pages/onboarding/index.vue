<template>
    <div class="onboarding-page w-full h-full grid grid-cols-12 gap-2">
        <div class="left-side col-span-9 px-16 pt-16">
            <step-update-profile v-if="activeStep === 'STEP-01'"></step-update-profile>
            <step-enter-business-information v-else-if="activeStep === 'STEP-02'"></step-enter-business-information>
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
type StepValue = 'STEP-01' | 'STEP-02' | 'STEP-03' | 'STEP-04' | 'STEP-05' | 'STEP-06' | 'STEP-07' | 'STEP-08' | 'STEP-09' | 'STEP-10'
interface Step extends UStepItem {
    title: string,
    description: string,
    to: string | object
}

// layout
definePageMeta({
    layout: "onboarding",
});

//composable
const { t } = useI18n()
const route = useRoute()

// data
const form = reactive({
    profileEmail: undefined,
    profileFirstName: undefined,
    profileLastName: undefined,
    profilePassword: undefined,
    profileAbout: undefined,
    profileJobTitle: undefined,
    profileEmail2: undefined,
    profileCountry: undefined,
    profileStress: undefined,
    profileCity: undefined,
    profileState: undefined,
    profilePostal: undefined,
    profilePhone: undefined,
    profilePhone2: undefined,
    businessABN: undefined,
    businessCompanyName: undefined,
    businessStreet: undefined,
    businessCity: undefined,
    businessState: undefined,
    businessPostal: undefined,
    businessPostalStreet: undefined,
    businessPostalCity: undefined,
    businessPostalState: undefined,
    businessPostalPostal: undefined,
    businessEmail: undefined,
    businessPhone: undefined,
    businessPhone2: undefined,
    businessCompanyWebsite: undefined,
    businessAbout: undefined,
    businessDatetimeFormat: undefined,
    businessCountry: 'United State',
    businessCurrency: 'AUD'
})

const steps = reactive<Partial<Step>[]>([
    {
        title: t('onboarding.steps.Update your profile'),
        description: t(`onboarding.profile.The information we collect as part of your profile`),
        to: '?step=step-01',
        value: 'STEP-01'
    }, {
        title: t('onboarding.steps.Enter your business information'),
        description: t(`onboarding.business.The information we collect about your business`),
        to: '?step=step-02',
        value: 'STEP-02'
    }, {
        title: t('onboarding.steps.Enter your property information'),
        description: 'Fill you profile information to access potential data',
        to: '?step=step-03',
        value: 'STEP-03'
    }, {
        title: t('onboarding.steps.Setup your hourses'),
        description: 'Fill you profile information to access potential data',
        to: '?step=step-04',
        value: 'STEP-04'
    }, {
        title: t('onboarding.steps.Intergrate your Account System'),
        description: 'Fill you profile information to access potential data',
        to: '?step=step-05',
        value: 'STEP-05'
    }, {
        title: t('onboarding.steps.Setup your Product and Service'),
        description: 'Fill you profile information to access potential data',
        to: '?step=step-06',
        value: 'STEP-06'
    }, {
        title: t('onboarding.steps.Setup your Supplier'),
        description: 'Fill you profile information to access potential data',
        to: '?step=step-07',
        value: 'STEP-07'
    }, {
        title: t('onboarding.steps.Setup your Contacts Customers'),
        description: 'Fill you profile information to access potential data',
        to: '?step=step-08',
        value: 'STEP-08'
    }, {
        title: t('onboarding.steps.Invite Users'),
        description: 'Fill you profile information to access potential data',
        to: '?step=step-09',
        value: 'STEP-09'
    }, {
        title: t('onboarding.steps.Completed'),
        description: 'Fill you profile information to access potential data',
        to: '?step=step-10',
        value: 'STEP-10'
    }
])
const activeStep = ref<StepValue>('STEP-01')


//watch
watchEffect(() => {
    activeStep.value = route.query?.step?.toString().toUpperCase() as StepValue || 'STEP-01'
})
// propvide
provide(onboardingInjectionKey, { form, steps, activeStep })
</script>