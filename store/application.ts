import { defineStore } from 'pinia'

export const useApplicationStore = defineStore('application', {
  state: () => ({
    sidebar: false,
    crudModal: {
      open: false,
      options: {}
    }
  }),
  actions: {
    toggleSidebar() {
      // `this` is the store instance
      this.sidebar = !this.sidebar
    },
    toggleCrudModal() {
      this.crudModal.open = !this.crudModal.open
    },
    closeCrudModal() {
      this.crudModal.open = false
    },
    openCrudModal() {
      this.crudModal.open = true
    },
    configCrudModal(options: { [key: string]: string | boolean | object }) {
      this.crudModal.options = options
    }
  },
})