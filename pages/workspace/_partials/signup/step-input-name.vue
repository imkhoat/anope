<template>
  <div class="flex flex-col justify-center items-stretch w-full h-fit">
    <div class="flex flex-col justify-center items-center text-center gap-2">
      <h6 class="text-3xl font-semibold">
        {{ $t(`onboarding.profile.My Profile`) }}
      </h6>
      <p class="text-sm opacity-60">
        {{
          $t(
            `onboarding.profile.The information we collect as part of your profile`,
          )
        }}
      </p>
    </div>
    <u-card class="flex-grow" :ui="uiCard">
      <u-form :state="form" class="flex flex-col justify-center items-center">
        <u-input
          v-model="form.profileEmail"
          size="md"
          class="col-span-12 w-96"
          placeholder="New workspace name"
        />
      </u-form>
      <template #footer>
        <div class="flex flex-row justify-end items-center gap-x-2">
          <u-button size="md" color="gray" variant="soft" class="px-6">
            {{ $t(`general.button.Back`) }}
          </u-button>
          <u-button size="md">
            {{ $t(`general.button.Save and Next Step`) }}
          </u-button>
        </div>
      </template>
    </u-card>
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import { onboardingInjectionKey } from '@/utils/keys'
// data
const { form } = inject<{
  form: { [key: string]: string | number | undefined };
}>(onboardingInjectionKey, { form: {} })

const uiCard = {
  ring: '',
  shadow: '',
  body: {
    base: '',
    background: '',
    padding: 'px-8 pt-4 pb-16 sm:p-16'
  },
  footer: {
    base: '',
    background: '',
    padding: 'px-8 py-5 sm:px-16 sm:py-6'
  }
}
</script>
