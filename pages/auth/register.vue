<template>
  <div class="register-page">
    <form-register />
  </div>
</template>

<script lang="ts" setup>
import { authRegisterInjectionKey } from '@/utils/keys'
import FormRegister from '@/pages/auth/_partials/form-register.vue'

//layout config
definePageMeta({
  layout: 'auth'
})

// data
const state = ref({
  email: undefined,
  password: undefined,
  confirmPassword: undefined,
  workspace: 'New Australian workspace'
})

provide(authRegisterInjectionKey, {
  state
})
</script>