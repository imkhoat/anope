<template>
  <div class="onboarding-page w-full h-full grid grid-cols-12 gap-2">
    <div class="left-side col-span-12 lg:col-span-9 px-16 pt-16">
      <signup-stepper orientation="vertical" class="lg:hidden mx-auto" />
      <step-input-name v-if="activeStep === 'STEP-01'" @next="onNext('STEP-02')" />
      <step-select-country v-else-if="activeStep === 'STEP-02'" @next="onNext('STEP-03')" @back="onBack('STEP-01')" />
      <step-select-tax v-else-if="activeStep === 'STEP-03'" @next="onNext('STEP-04')" @back="onBack('STEP-02')" />
      <step-confirm-and-save v-else-if="activeStep === 'STEP-04'" @next="onCompleted" @cancel="onCancel" />
    </div>
    <div
      class="right-side min-h-full bg-white hidden lg:col-span-3 -my-4 -mr-4 lg:flex flex-col justify-between items-stretch"
    >
      <signup-stepper orientation="horizontal" />
      <support-card />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { provide } from 'vue'
import { onboardingInjectionKey } from '@/utils/keys'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import SupportCard from '@/pages/workspace/_partials/onboarding/support-card.vue'
import StepSelectTax from '@/pages/workspace/_partials/signup/step-select-tax.vue'
import SignupStepper from '@/pages/workspace/_partials/signup/signup-stepper.vue'
import StepInputName from '@/pages/workspace/_partials/signup/step-input-name.vue'
import StepSelectCountry from '@/pages/workspace/_partials/signup/step-select-country.vue'
import StepConfirmAndSave from '@/pages/workspace/_partials/signup/step-confirm-and-save.vue'

// type
type StepValue = 'STEP-01' | 'STEP-02' | 'STEP-03' | 'STEP-04';

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

// Steps
const breakpoints = useBreakpoints(breakpointsTailwind)

const steps = computed(() => {
  return breakpoints.greaterOrEqual('lg').value
    ? [
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
    ]
    : [
      {
        title: t('signup.steps.Create workspace'),
        to: '?step=step-01',
        value: 'STEP-01'
      },
      {
        title: t('signup.steps.Choose country'),
        to: '?step=step-02',
        value: 'STEP-02'
      },
      {
        title: t('signup.steps.Select tax options'),
        to: '?step=step-03',
        value: 'STEP-03'
      },
      {
        title: t('signup.steps.Completed'),
        to: '?step=step-04',
        value: 'STEP-04'
      }
    ]
})
const activeStep = ref<StepValue>('STEP-01')

// change step
function onNext(step: StepValue) {
  activeStep.value = step
}

function onBack(step: StepValue) {
  activeStep.value = step
}

function onCompleted() {
  console.log('Completed')
}

function onCancel() {
  console.log('Cancel')
}
//watch
watchEffect(() => {
  activeStep.value =
    (route.query?.step?.toString().toUpperCase() as StepValue) || 'STEP-01'
})
// propvide
provide(onboardingInjectionKey, { form, steps, activeStep })
</script>
