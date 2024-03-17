<template>
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
  <u-notifications />
</template>

<script lang="ts" setup>
interface User { }

const { $api } = useNuxtApp()
const userRepo = repository<User>('users', $api)

onMounted(async() => {
  const resp = await userRepo.get()
  console.log(resp)
})

</script>

<style>
.default-layouts {
  font-family: "AR One Sans", sans-serif;
}
</style>
