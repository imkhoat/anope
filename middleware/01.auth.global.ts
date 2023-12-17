export default defineNuxtRouteMiddleware(async(to) => {

  const { loggedIn, user, fetch } = useUserSession()

  const nuxtApp = useNuxtApp()
  if (process.client && nuxtApp.isHydrating && nuxtApp.payload.serverRendered)
  {
    await fetch()
  }

  if (!loggedIn?.value && !(to.path.includes('auth/confirm') || to.path.includes('auth/login') || to.path.includes('auth/register'))) {
    return await navigateTo('/auth/login')
  }
  else if (loggedIn.value && !(to.path.includes('auth/verify-email') || to.path.includes('auth/confirm') || to.path.includes('auth/login') || to.path.includes('auth/register')) && !user.value.emailVerified) {
    return await navigateTo('/auth/verify-email')
  }
})
