import { defineStore } from 'pinia'

export const useApplicationStore = defineStore('application', {
  state: (): {
    sidebar: boolean,
    modal: {
      open: boolean,
      options: { [key: string]: string | boolean | object }
    }
  } => ({
    sidebar: false,
    modal: {
      open: false,
      options: {}
    }
  }),
  getters: {
    modalKey: (state) => {
      return state.modal?.options?.key
    }
  },
  actions: {
    toggleSidebar() {
      // `this` is the store instance
      this.sidebar = !this.sidebar
    },
    toggleModal() {
      this.modal.open = !this.modal.open
    },
    closeModal() {
      this.modal.open = false
    },
    openModal() {
      this.modal.open = true
    },
    configModal(options: { [key: string]: string | boolean | object }) {
      this.modal.options = options
    }
  }
})
