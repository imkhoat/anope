<template>
  <div class="login-page">
    <form-login />
  </div>
</template>

<script lang="ts" setup>
import { authLoginInjectionKey } from '@/utils/keys'
import FormLogin from '@/pages/auth/_partials/form-login.vue'

//layout config
definePageMeta({
  layout: 'auth'
})

// data
const state = ref({
  email: undefined,
  password: undefined
})

provide(authLoginInjectionKey, {
  state
})
</script>