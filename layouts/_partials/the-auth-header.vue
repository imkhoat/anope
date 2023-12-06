<template>
  <u-container :ui="containerUI" class="border-b">
    <div
      class="the-auth-header flex flex-row justify-between items-center w-full gap-x-2"
    >
      <the-logo />
      <div class="flex flex-row justify-end items-center gap-x-2">
        <u-button to="/auth/register" size="lg" class="min-w-[80px] justify-center" variant="ghost" color="gray">
          {{
            $t('general.button.Register') }}
        </u-button>
        <u-button to="/api/hello" size="lg" class="min-w-[80px] justify-center" variant="soft">
          {{ $t('general.button.Login')
          }}
        </u-button>
      </div>
    </div>
  </u-container>
</template>

<script lang="ts" setup>
import TheLogo from '@/layouts/_partials/the-logo.vue'

const containerUI = {
  base: '',
  padding: 'p-2 sm:px-4 lg:px-4',
  constrained: ''
}
</script>
