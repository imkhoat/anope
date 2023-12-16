declare module '#auth-utils' {
  interface UserSession {
    // define the type here
    user: any,
    loggedInAt: number
  }
}
export {}
