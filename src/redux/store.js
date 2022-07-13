import { configureStore } from '@reduxjs/toolkit'

import link from './link/slice';

export const store = configureStore({
  reducer: {
    link
  },
})