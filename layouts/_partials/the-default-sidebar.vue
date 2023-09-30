<template>
  <div class="the-default-sidebar">
    <div class="relative z-50 md:hidden">
      <u-slideover v-model="sidebar" :side="'left'">
        <u-card :ui="cardUI">
          <the-menu></the-menu>
        </u-card>
      </u-slideover>
    </div>
    <div class="hidden md:z-50 md:flex md:w-80 md:flex-col h-full min-h-screen bg-white left-0 top-0 border-r">
      <u-card :ui="cardUI">
        <the-logo></the-logo>
        <the-menu></the-menu>
      </u-card>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import TheMenu from '@/layouts/_partials/the-menu.vue';
import TheLogo from '@/layouts/_partials/the-logo.vue';
import { useApplicationStore } from '@/store/application'

const { sidebar } =  storeToRefs(useApplicationStore())

const isOpen = ref(false)

const cardUI = {
  shadow: '',
  ring: ''
}
</script>
