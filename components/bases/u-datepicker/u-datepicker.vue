<script setup lang="ts">
import { DatePicker as VCalendarDatePicker } from 'v-calendar'
import 'v-calendar/dist/style.css'

const props = defineProps({
  modelValue: {
    type: Date,
    default: null
  }
})
const emit = defineEmits(['update:model-value', 'close'])

const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
const date = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit('update:model-value', value)
    emit('close')
  }
})
const label = computed(() => date.value.toLocaleDateString('en-us', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' })
)
const attrs = [{
  key: 'today',
  highlight: {
    color: 'blue',
    fillMode: 'outline',
    class: '!bg-gray-100 dark:!bg-gray-800'
  },
  dates: new Date()
}]
</script>

<template>
  <u-popover :popper="{ placement: 'bottom-start' }">
    <u-button icon="i-heroicons-calendar-days-20-solid" :label="label" />
    <template #panel>
      <VCalendarDatePicker
        v-model="date"
        transparent
        borderless
        :attributes="attrs"
        :is-dark="isDark"
        title-position="left"
        trim-weeks
        :first-day-of-week="2"
      />
    </template>
  </u-popover>
</template>
