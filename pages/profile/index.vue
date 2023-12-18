<template>
  <div class="profile-page">
    {{ session }}
  </div>
</template>

<script lang="ts" setup>
const { session } = useUserSession()
</script>
