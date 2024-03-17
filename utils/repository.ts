import type { $Fetch, NitroFetchRequest } from 'nitropack'

export function repository<T>(url: string | (() => string), fetch: $Fetch<T, NitroFetchRequest> = $fetch, option?: {

}) {
  const urls = {
    get: `${url}`,
    getAll: `${url}`,
    getOne: `${url}`,
    create: `${url}`,
    update: `${url}`,
    remove: `${url}`
  }
  async function get(): Promise<T[]> {
    return fetch<T[]>(urls.get, {
      method: 'GET'
    })
  }
  async function getAll(): Promise<T[]> {
    return fetch<T[]>(urls.getAll, {
      method: 'GET'
    })
  }
  async function getOne(id: string): Promise<T> {
    return fetch<T>(`${urls.getOne}/${id}`, {
      method: 'GET'
    })
  }
  async function create(payload: T): Promise<T> {
    return fetch<T>(urls.create, {
      method: 'POST',
      body: {
        payload
      }
    })
  }
  async function update(id: string, payload: T): Promise<T> {
    return fetch<T>(`${urls.update}/${id}`, {
      method: 'PUT',
      body: {
        payload
      }
    })
  }
  async function remove(id: string | unknown): Promise<T> {
    return fetch<T>(`${urls.remove}/${id}`, {
      method: 'DELETE'

    })
  }

  return { get, getAll, getOne, create, update, remove }
}
