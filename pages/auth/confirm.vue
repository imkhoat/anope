<template>
  <div class="w-full h-full flex justify-center items-center text-gray-600">
    Authentication confirming...
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: false
})

const { fetch } = useUserSession()

async function onFetchingUserData() {
  await fetch()
}

onMounted(async() => {
  await setTimeout(async() => {
    await onFetchingUserData()
    navigateTo('/profile')
  }, 5000)
})
</script>
