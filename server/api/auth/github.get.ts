export default oauth.githubEventHandler({
  config: {
    emailRequired: true
  },
  async onSuccess(event, { user: currentUser, tokens }) {
    console.log('githubEventHandler', currentUser, tokens, event)
    await setUserSession(event, {
      user: {
         //@ts-ignore
         email: currentUser.email,
         //@ts-ignore
         emailVerified: true,
         //@ts-ignore
         id: currentUser.id
      },
      loggedInAt: Date.now()
    })
    console.log(await getUserSession(event))

    return sendRedirect(event, '/profile')
  },
  // Optional, will return a json error and 401 status code by default
  onError(event, error) {
    console.error('GitHub OAuth error:', error)
    return sendRedirect(event, '/')
  }
})
