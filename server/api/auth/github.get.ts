export default oauth.githubEventHandler({
  config: {
    emailRequired: true
  },
  async onSuccess(event, { user: currentUser }) {

    await setUserSession(event, {
      user: {
         //@ts-ignore
         email: currentUser.email,
         //@ts-ignore
         emailVerified: true,
         //@ts-ignore
         id: currentUser.id
      },
      loggedInAt: Date.now(),
      provider: 'GITHUB'
    })

    return sendRedirect(event, '/auth/confirm')
  },
  // Optional, will return a json error and 401 status code by default
  onError(event) {
    return sendRedirect(event, '/')
  }
})
