import { create } from 'zustand'
import { AppState } from '../interfaces/AppState'

export const useaAppStore = create<AppState>((set) => ({
  setProfile: (profile: string) =>  set({ profile })
}))