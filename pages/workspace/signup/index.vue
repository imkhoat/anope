<template>
  <div class="onboarding-page w-full h-full grid grid-cols-12 gap-2">
    <div class="left-side col-span-9 px-16 pt-16">
      <step-input-name v-if="activeStep === 'STEP-01'" />
      <step-choose-country v-else-if="activeStep === 'STEP-02'" />
      <step-select-tax v-else-if="activeStep === 'STEP-03'" />
      <step-confirm-and-save v-else-if="activeStep === 'STEP-04'" />
    </div>
    <div
      class="right-side min-h-full bg-white col-span-3 -my-4 -mr-4 flex flex-col justify-between items-stretch"
    >
      <signup-stepper />
      <support-card />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { provide } from 'vue'
import { onboardingInjectionKey } from '@/utils/keys'
import type { UStepItem } from '@/types/components/u-step-item'
import SupportCard from '@/pages/workspace/_partials/onboarding/support-card.vue'
import stepSelectTax from '@/pages/workspace/_partials/signup/step-select-tax.vue'
import SignupStepper from '@/pages/workspace/_partials/signup/signup-stepper.vue'
import StepInputName from '@/pages/workspace/_partials/signup/step-input-name.vue'
import StepChooseCountry from '@/pages/workspace/_partials/signup/step-choose-country.vue'
import StepConfirmAndSave from '@/pages/workspace/_partials/signup/step-confirm-and-save.vue'
// type
type StepValue =
  | 'STEP-01'
  | 'STEP-02'
  | 'STEP-03'
  | 'STEP-04';
interface Step extends UStepItem {
  title: string;
  description: string;
  to: string | object;
}

// layout
definePageMeta({
  layout: 'onboarding'
})

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
    title: t('signup.steps.Create workspace'),
    description: t(
      'onboarding.profile.The information we collect as part of your profile'
    ),
    to: '?step=step-01',
    value: 'STEP-01'
  },
  {
    title: t('signup.steps.Choose country'),
    description: t(
      'onboarding.business.The information we collect about your business'
    ),
    to: '?step=step-02',
    value: 'STEP-02'
  },
  {
    title: t('signup.steps.Select tax options'),
    description: 'Fill you profile information to access potential data',
    to: '?step=step-03',
    value: 'STEP-03'
  },
  {
    title: t('signup.steps.Completed'),
    description: 'Fill you profile information to access potential data',
    to: '?step=step-04',
    value: 'STEP-04'
  }
])
const activeStep = ref<StepValue>('STEP-01')

//watch
watchEffect(() => {
  activeStep.value =
    (route.query?.step?.toString().toUpperCase() as StepValue) || 'STEP-01'
})
// propvide
provide(onboardingInjectionKey, { form, steps, activeStep })
</script>
