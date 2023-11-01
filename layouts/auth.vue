<template>
  <div class="auth-layout flex flex-col justify-start items-stretch h-screen w-screen bg-gray-50 max-h-screen">
    <the-auth-header />
    <u-container class="flex justify-center items-start flex-grow w-full">
      <div class="w-full sm:w-96 mt-16">
        <slot />
      </div>
    </u-container>
  </div>
</template>

<script lang="ts" setup>
import TheAuthHeader from '@/layouts/_partials/the-auth-header.vue'
</script>

<style>
.auth-layout {
  font-family: 'AR One Sans', sans-serif;
}
</style>