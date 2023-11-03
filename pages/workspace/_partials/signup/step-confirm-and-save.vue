<template>
  <div class="flex flex-col justify-center items-stretch gap-16 w-full h-fit">
    <div class="flex flex-col justify-center items-center text-center gap-2">
      <h6 class="text-3xl font-semibold">
        {{ $t(`signup.completedStep.Recheck`) }}
      </h6>
      <p class="text-sm opacity-60">
        {{
          $t(`signup.completedStep.Please review there informations and save`)
        }}
      </p>
    </div>
    <u-card class="flex-grow" :ui="uiCard">
      <u-form :state="form" class="flex flex-col justify-start items-stretch gap-y-4 w-fit mx-auto">
        <u-form-group :label="$t(`general.form.Workspace Name`)">
          <u-input
            v-model="form.profileEmail"
            size="md"
            readonly
            disabled
            class="col-span-12 w-96"
            placeholder="New workspace name"
          />
        </u-form-group>
        <u-form-group :label="$t(`general.form.Country`)">
          <u-select-menu
            v-model="form.profileEmail"
            readonly
            disabled
            size="md"
            class="col-span-12 w-96 relative"
            placeholder="Australia or NewZealand"
          />
        </u-form-group>
        <u-form-group :label="$t(`general.form.Taxt purposes`)">
          <u-radio v-model="form.taxt" readonly disabled label="Registered Business" help="You can get full tax information" />
        </u-form-group>
      </u-form>
      <template #footer>
        <div class="flex flex-row justify-end items-center gap-x-2">
          <u-button size="md" color="gray" variant="soft" class="px-6">
            {{ $t(`general.button.Cancel`) }}
          </u-button>
          <u-button size="md">
            {{ $t(`general.button.Confirm and Save`) }}
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
