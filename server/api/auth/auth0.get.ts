export default oauth.auth0EventHandler({
  config: {
    emailRequired: true
  },
  async onSuccess(event, { user: currentUser, tokens }) {
    try {
      console.log('auth0EventHandler', currentUser, tokens)

      await setUserSession(event, {
        user: {
          //@ts-ignore
          email: currentUser.email,
          //@ts-ignore
          emailVerified: currentUser.email_verified,
          //@ts-ignore
          id: currentUser.sub

        },
        loggedInAt: Date.now()
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
