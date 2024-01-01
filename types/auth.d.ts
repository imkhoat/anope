declare module '#auth-utils' {
  interface UserSession {
    // define the type here
    user: any,
    loggedInAt: number,
    provider?: 'GITHUB' | 'AUTH0' | 'GOOGLE' | 'TWITTER'
  }
}
export {}
