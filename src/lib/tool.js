import storage from 'store'

export function getItem (name) {
  return storage.get(name)
}

export function setItem (name, data) {
  storage.set(name, data)
}

export const account = {
  cache: null,
  get data () {
    return this.cache ? this.cache : getItem('account')
  },
  set data (data) {
    this.cache = data
    setItem('account', data)
  }
}

export default {
  getItem,
  setItem,
  account
}