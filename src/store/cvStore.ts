import { create } from 'zustand'
import { JOBS } from '../data/jobs'

export const useCvStore = create(() => ({
  jobs: JOBS
}))