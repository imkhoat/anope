<template>
  <component :is="as" />
</template>

<script lang="ts" setup>
withDefaults(defineProps<{
  as: string
}>(), {
  as: 'div'
})
</script>