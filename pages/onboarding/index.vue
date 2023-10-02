<template>
    <div class="onboarding-page w-full h-full grid grid-cols-12 gap-2">
        <div class="left-side col-span-9 px-16 pt-16">
            <step-no1></step-no1>
        </div>
        <div class="right-side min-h-full bg-white col-span-3 -my-4 -mr-4 flex flex-col justify-between items-stretch">
            <onboarding-stepper/>
            <support-card></support-card>
        </div>
    </div>
</template>
<script lang="ts" setup>
import StepNo1 from './_partials/step-no1.vue';
import SupportCard from './_partials/support-card.vue';
import OnboardingStepper from './_partials/onboarding-stepper.vue';

definePageMeta({
  layout: "onboarding",
});
</script>