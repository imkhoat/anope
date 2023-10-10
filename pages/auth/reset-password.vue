<template>
    <div class="register-page">
        <form-reset-password></form-reset-password>
    </div>
</template>
<script lang="ts" setup>
import { authResetPasswordInjectionKey } from '@/utils/keys'
import FormResetPassword from '@/pages/auth/_partials/form-reset-password.vue'

//layout config
definePageMeta({
    layout: 'auth'
})

// data
const state = ref({
  confirmPassword: undefined,
  password: undefined,
  token: 'New Australian workspace'
})

provide(authResetPasswordInjectionKey, {
    state
})
</script>