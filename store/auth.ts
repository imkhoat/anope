import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const { user, loggedIn, clear, fetch } = useUserSession()
  console.log('useAuthStore', user.value, loggedIn.value)

  const currentUser = computed(() => {
    return user
  })

  const isEmailVerified = computed(() => {
    return user?.email_verified
  })

  async function handleFetchMe() {
    await fetch()
  }

  async function handleLogout() {
    await clear()
  }

  return { currentUser, loggedIn, isEmailVerified, handleLogout, handleFetchMe }
})
