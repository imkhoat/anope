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
      <u-form
        :state="form"
        class="flex flex-col justify-start items-stretch gap-y-4 w-fit mx-auto"
      >
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
          <u-radio
            v-model="form.taxt"
            readonly
            disabled
            :ui="uiRadio"
          >
            <template #label>
              <div class="flex flex-col justify-start items-start">
                <strong>Registered Business</strong>
                <span class="text-sm text-gray-500">You can get full tax information</span>
              </div>
            </template>
          </u-radio>
        </u-form-group>
      </u-form>
      <template #footer>
        <div class="flex flex-row justify-end items-center gap-x-2">
          <u-button size="md" color="gray" variant="soft" class="px-6" @click="onClickCancel">
            {{ $t(`general.button.Cancel`) }}
          </u-button>
          <u-button size="md" @click="onClickNext">
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

const uiRadio = {
  wrapper:
    'relative flex flex-row items-start border border-gray-200 p-4 rounded-xl'
}

// emit event
const emits = defineEmits<{
  (event: 'next'): () => void,
  (event: 'cancel'): () => void
}>()

function onClickNext() {
  emits('next')
}
function onClickCancel() {
  emits('cancel')
}
</script>
