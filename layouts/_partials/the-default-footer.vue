<template>
  <u-container :ui="containerUI" class="flex justify-center items-center text-sm bg-gray-50">
    <span class="opacity-50"> Made by anope team with</span> <u-icon name="i-heroicons-heart-20-solid" class="h-4 w-4 text-rose-600 ml-1" />
  </u-container>
</template>

<script lang="ts" setup>
const containerUI = {
  base: '',
  padding: 'p-2 sm:px-4 lg:px-6',
  constrained: ''
}
</script>