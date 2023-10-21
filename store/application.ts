import { defineStore } from 'pinia'

export const useApplicationStore = defineStore('application', {
  state: () => ({
    sidebar: false,
    confirm: {
      open: false,
      options: {}
    }
  }),
  actions: {
    toggleSidebar() {
      // `this` is the store instance
      this.sidebar = !this.sidebar
    },
    toggleconfirm() {
      this.confirm.open = !this.confirm.open
    },
    closeconfirm() {
      this.confirm.open = false
    },
    openconfirm() {
      this.confirm.open = true
    },
    configconfirm(options: { [key: string]: string | boolean | object }) {
      this.confirm.options = options
    }
  },
})