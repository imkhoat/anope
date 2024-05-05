<template>
  <div class="auth-layout flex flex-col justify-start items-stretch h-screen w-screen bg-gray-50 max-h-screen">
    <the-header-auth />
    <u-container class="flex justify-center items-start flex-grow w-full">
      <div class="w-full sm:w-96 mt-16">
        <slot />
      </div>
    </u-container>
  </div>
</template>

<script lang="ts" setup>
import TheHeaderAuth from '@/components/layouts/header/the-header-auth.vue'
</script>

<style>
.auth-layout {
  font-family: 'AR One Sans', sans-serif;
}
</style>
