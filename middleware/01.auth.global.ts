export default defineNuxtRouteMiddleware(async(to) => {

  const { loggedIn, user, fetch } = useUserSession()

  const nuxtApp = useNuxtApp()
  if (process.client && nuxtApp.isHydrating && nuxtApp.payload.serverRendered)
  {
    await fetch()
  }

  if (!loggedIn?.value && !(to.path.includes('auth/confirm') || to.path.includes('auth/login') || to.path.includes('auth/register') || to.path.includes('auth/'))) {
    return await navigateTo('/auth/login')
  }
  else if (loggedIn.value && !user.value.emailVerified && !to.path.includes('auth/verify-email') ) {
    return await navigateTo('/auth/verify-email')
  }
  else if (loggedIn.value && user.value.emailVerified && to.path.includes('auth/')) {
    return await navigateTo('/profile')
  }
})
