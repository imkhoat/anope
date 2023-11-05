<template>
  <div class="flex flex-col justify-center items-stretch gap-16 w-full h-fit">
    <div class="flex flex-col justify-center items-center text-center gap-2">
      <h6 class="text-3xl font-semibold">
        {{ $t(`signup.taxSelect.Join Epona`) }}
      </h6>
      <p class="text-sm opacity-60">
        {{ $t(`signup.taxSelect.What are you classified as for tax purposes`) }}
      </p>
    </div>
    <u-card class="flex-grow" :ui="uiCard">
      <u-form
        :state="form"
        class="flex flex-col justify-start items-stretch gap-y-2 w-96 mx-auto"
      >
        <u-radio v-model="form.taxt" :ui="uiRadio" value="BUSINESS">
          <template #label>
            <div class="flex flex-col justify-start items-start">
              <strong>Registered Business</strong>
              <span class="text-sm text-gray-500">You can get full tax information</span>
            </div>
          </template>
        </u-radio>
        <u-radio v-model="form.taxt" :ui="uiRadio" value="HOBBYIST">
          <template #label>
            <div class="flex flex-col justify-start items-start">
              <strong>Hobbyist</strong>
              <span class="text-sm text-gray-500">No taxt export</span>
            </div>
          </template>
        </u-radio>
      </u-form>
      <template #footer>
        <div class="flex flex-row justify-end items-center gap-x-2">
          <u-button size="md" color="gray" variant="soft" class="px-6" @click="onClickBack">
            {{ $t(`general.button.Back`) }}
          </u-button>
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

const uiRadio = {
  wrapper:
    'relative flex flex-row items-start border border-gray-200 hover:border-primary hover:ring-1 hover:ring-primary active:border-primary p-4 rounded-xl'
}

// emit event
const emits = defineEmits<{
  (event: 'next'): () => void,
  (event: 'back'): () => void
}>()

function onClickNext() {
  emits('next')
}
function onClickBack() {
  emits('back')
}
</script>
