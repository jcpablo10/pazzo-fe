import { defineStore } from 'pinia'

interface AppState {
  visits: number
}

export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    visits: 0
  }),
  actions: {
    registerVisit() {
      this.visits += 1
    }
  }
})
