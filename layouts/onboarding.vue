<template>
  <div class="onboarding-layout font-sans flex flex-row justify-start items-stretch w-screen h-screen">
    <div class="flex-grow flex flex-col justify-start items-stretch">
      <the-onboarding-header />
      <u-container :ui="containerUI" class="flex-grow bg-gray-50">
        <div class="w-full h-full">
          <slot />
        </div>
      </u-container>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TheOnboardingHeader from '@/components/layouts/header/the-onboarding-header.vue'

const containerUI = {
  base: '',
  padding: 'p-2 sm:p-4 lg:p-4',
  constrained: ''
}
</script>

<style>
.onboarding-layout {
    font-family: 'AR One Sans', sans-serif;
}
</style>
