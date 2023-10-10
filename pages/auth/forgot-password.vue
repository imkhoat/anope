<template>
    <div class="register-page">
        <form-forgot-password></form-forgot-password>
    </div>
</template>
<script lang="ts" setup>
import { authForgotPasswordInjectionKey } from '@/utils/keys'
import FormForgotPassword from '@/pages/auth/_partials/form-forgot-password.vue'

//layout config
definePageMeta({
    layout: 'auth'
})

// data
const state = ref({
  email: undefined,
  token: 'New Australian workspace'
})

provide(authForgotPasswordInjectionKey, {
    state
})
</script>