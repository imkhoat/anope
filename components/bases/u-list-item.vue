<template>
  <component :is="as">
    <div class="u-list-item__icon"></div>
    <div class="u-list-item__content"></div>
    <div class="u-list-item__action"></div>
  </component>
</template>
<script lang="ts" setup>
import { ListItem } from '~/types/components/list-item';

defineProps<ListItem>()
</script>