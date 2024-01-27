<template>
  <u-input
    icon="i-heroicons-magnifying-glass-20-solid"
    color="gray"
    variant="none"
    size="md"
    :ui="inputUI"
    placeholder="Type your search..."
  />
</template>

<script lang="ts" setup>
const inputUI = {
  variant: {
    'none': 'bg-gray-50 focus:ring-0 focus:shadow-none'
  }
}
</script>