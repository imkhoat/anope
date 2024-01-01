export default oauth.auth0EventHandler({
  config: {
    emailRequired: true
  },
  async onSuccess(event, { user: currentUser }) {
    try {
      await setUserSession(event, {
        user: {
          //@ts-ignore
          email: currentUser.email,
          //@ts-ignore
          emailVerified: currentUser.email_verified,
          //@ts-ignore
          id: currentUser.sub

        },
        loggedInAt: Date.now(),
        provider: 'AUTH0'
      })

      return sendRedirect(event, '/auth/confirm')

    } catch (error) {
      console.log(error)
    }
  },
  // Optional, will return a json error and 401 status code by default
  onError(event, error) {
    console.error('Auth0 OAuth error:', error)
    return sendRedirect(event, '/')
  }
})
