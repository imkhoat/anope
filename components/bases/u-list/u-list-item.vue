<template>
  <component
    :is="as"
    class="hover:bg-gray-50 rounded-md py-2 pr-2 pl-9 text-sm leading-6 text-gray-700 flex flex-row justify-start items-stretch"
  >
    <u-icon
      v-if="icon"
      :name="icon"
      class="text-gray-400 ml-auto h-5 w-5 shrink-0"
    />
    <div class="flex-grow">
      <strong>
        {{ title }}
      </strong>
      <p>{{ description }}</p>
    </div>
    <div>
      <slot name="action"/>
    </div>
  </component>
</template>
<script lang="ts" setup>
import { ListItem } from "~/types/components/list-item";

withDefaults(defineProps<ListItem>(), {
  as: 'div'
})
</script>
