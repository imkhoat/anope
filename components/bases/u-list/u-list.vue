<template>
  <div class="u-list">
    <div v-for="(item, index) in items" :key="index + '__u-list-item'" @click="onSelectListItem(item?.value || '')">
      <slot name="item" :item="item">
        <u-list-item v-bind="item" :value="item?.value" :is-active="item?.value === activeItem"></u-list-item>
      </slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { UList } from "@/types/components/u-list";
import UListItem from "@/components/bases/u-list/u-list-item.vue";

const props = withDefaults(defineProps<UList>(), {
  as: "div",
});
const emits = defineEmits<{
  (event: "update:modelValue", item: string | object | undefined): () => void;
}>();

// computed
const activeItem = defineModel()

// methods
function onSelectListItem(item: string | object | undefined) {
  activeItem.value = item
}
</script>
