import { defineStore } from 'pinia'

export const useApplicationStore = defineStore('application', {
  state: () => ({
    sidebar: false,
  }),
  actions: {
    toggleSidebar() {
      // `this` is the store instance
      this.sidebar = !this.sidebar
    },
  },
})