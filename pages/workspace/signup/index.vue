<template>
  <div class="signup-page grid grid-cols-12 h-screen w-screen -m-4">
    <div class="col-span-12 flex flex-col justify-start items-center gap-4 p-4">
      <div class="mt-16">
        <u-tabs :items="items" class="w-full h-fit" @change="onChange">
          <template #default="{ item, index, selected }">
            <div class="flex items-center gap-2 relative truncate">
              <u-icon :name="item.icon" class="w-4 h-4 flex-shrink-0" />
              <span class="truncate">{{ index + 1 }}. {{ item.label }}</span>
              <span
                v-if="selected"
                class="absolute -right-4 w-2 h-2 rounded-full bg-primary-500 dark:bg-primary-400"
              />
            </div>
          </template>
        </u-tabs>
      </div>
      <div
        class="w-full md:w-2/3 lg:w-4/5 px-16 pt-16 rounded-xl bg-white"
      >
        <step-input-name />
      </div>
    </div>
    <div class="hidden md:col-span-4 h-full">
      <nuxt-img class="h-full w-full" src="/background.jpeg" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import StepInputName from '@/pages/workspace/_partials/signup/step-input-name.vue'

type TabValue =
  | 'trial-setup'
  | 'select-country'
  | 'taxt-setup'
  | 'review-and-completed';

// layout
definePageMeta({
  layout: 'onboarding'
})

const items = reactive<
  {
    label: string;
    icon: string;
    value: TabValue;
  }[]
>([
  {
    label: 'Trial Setup',
    icon: 'i-heroicons-information-circle',
    value: 'trial-setup'
  },
  {
    label: 'Select Country',
    icon: 'i-heroicons-map-pin',
    value: 'select-country'
  },
  {
    label: 'Tax Setup',
    icon: 'i-heroicons-banknotes',
    value: 'taxt-setup'
  },
  {
    label: 'Review and Completed',
    icon: 'i-heroicons-check-badge',
    value: 'review-and-completed'
  }
])

// watch change active tab
const activeItem = ref<{
  label: string;
  icon: string;
  value: TabValue;
}>()
function onChange(index: number) {
  activeItem.value = items[index]
}
</script>
