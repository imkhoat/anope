export default oauth.auth0EventHandler({
  async onSuccess(event, { user }) {
    await setUserSession(event, { user })
    return sendRedirect(event, '/todos')
  }
})
