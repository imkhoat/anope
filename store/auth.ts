import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: {}
    }),
    actions: {
        logout() {
            this.user = null
        },
    },
})