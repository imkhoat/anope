import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const { user, loggedIn, clear, fetch } = useUserSession()

  const currentUser = computed(() => {
    return user
  })

  const isEmailVerified = computed(() => {
    return user?.email_verified
  })

  async function handleFetchMe() {
    await fetch()
  }

  async function logout() {
    await clear()
    await navigateTo('/auth/login', { external: true })
  }

  return { currentUser, loggedIn, isEmailVerified, logout, handleFetchMe }
})
