
import type { EffectScope } from 'vue'

export function useCreateSharedComposable<Type>(composable: any): Type {
  let subscribers: number = 0
  let state: Type, scope: EffectScope | null

  const dispose = () => {
    if (scope && --subscribers <= 0) {
      scope.stop()
      state = null
      scope = null
    }
  }

  return (...args) => {
    subscribers++
    if (!state) {
      scope = effectScope(true)
      state = scope.run(() => composable(...args))
    }
    onScopeDispose(dispose)
    return state
  }
}

/*================================

interface User {
  userName: string,
  email: string,
  isEmailValid: string
}
function authComposable() {
  const user = ref<User>()

  function setUser(payload: User) {
    user.value = payload
  }

  return {user, setUser}
}

export const useAuth = useCreateSharedComposable<typeof authComposable>(authComposable)

================================*/
