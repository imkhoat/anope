<template>
  <div class="flex flex-col justify-center items-stretch gap-16 w-full h-fit">
    <div class="flex flex-col justify-center items-center text-center gap-2">
      <h6 class="text-3xl font-semibold">
        {{ $t(`signup.trialSetup.Trial Setup`) }}
      </h6>
      <p class="text-sm opacity-60">
        {{
          $t(
            `signup.trialSetup.What name do you want to give this workspace`,
          )
        }}
      </p>
    </div>
    <u-card class="flex-grow" :ui="uiCard">
      <u-form :state="form" class="flex flex-col justify-center items-center w-96 mx-auto">
        <u-input
          v-model="form.profileEmail"
          size="md"
          class="col-span-12 w-full"
          placeholder="New workspace name"
        />
      </u-form>
      <template #footer>
        <div class="flex flex-row justify-end items-center gap-x-2">
          <u-button size="md" @click="onClickNext">
            {{ $t(`general.button.Next Step`) }}
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

const emits = defineEmits<{
  (event: 'next'): () => void
}>()

function onClickNext() {
  emits('next')
}
</script>
