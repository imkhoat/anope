export default defineNuxtRouteMiddleware(async(to) => {
  const { loggedIn, user } = useUserSession()

  if ((!loggedIn.value || !user?.value?.id) && to.meta.layout === 'default') {
    return await navigateTo('/auth/login')
  }
  else if ((loggedIn.value && user?.value?.id) && to.meta.layout === 'auth') {
    return await navigateTo('/')
  }
})
