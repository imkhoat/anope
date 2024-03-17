export default defineNuxtPlugin({
  setup() {
    const api = $fetch.create({
      baseURL: useRuntimeConfig().public?.apiBaseUrl as string || 'https://jsonplaceholder.typicode.com/'
    })

    return {
      provide: {
        api
      }
    }
  }
})
