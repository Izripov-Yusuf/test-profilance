import { createSlice } from '@reduxjs/toolkit'

import { fetchShortURLs, addShortURL } from './asyncActions'

const initialState = {
  list: [],
  pagination: {},
  myShortURLsList: []
}

export const linkSlice = createSlice({
  name: 'link',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchShortURLs.fulfilled, (state, action) => {
      state.list = action.payload.data
      state.pagination = action.payload.paginatorInfo
    })

    builder.addCase(addShortURL.fulfilled, (state, action) => {
      state.myShortURLsList.push(action.payload)
    })
  },
})

export default linkSlice.reducer