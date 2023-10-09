<template>
    <div class="login-page">
        <form-login></form-login>
    </div>
</template>
<script lang="ts" setup>
import FormLogin from '@/pages/auth/_partials/form-login.vue'

//layout config
definePageMeta({
    layout: 'auth'
})
</script>