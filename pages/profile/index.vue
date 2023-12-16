<template>
  <div class="profile-page">
    {{ session }}
  </div>
</template>

<script lang="ts" setup>
const { loggedIn, user, session } = useUserSession()
</script>
