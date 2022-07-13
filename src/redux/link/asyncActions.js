import { createAsyncThunk } from '@reduxjs/toolkit'

import makeRequest from '../../helpers/makeRequest'

export const fetchShortURLs = createAsyncThunk(
  'urls/fetchAllShortURLs',
  async (page) => {
    const { data } = await makeRequest(`query ShortURLs {
      short_urls(first: 10, page: ${page ? page : 1}) {
        paginatorInfo {
          count
          currentPage
          firstItem
          hasMorePages
          lastItem
          lastPage
          perPage
          total
        }
        data {
          id
          url
          short_url
          clicks
        }
      }
    }`)
    return data?.short_urls
  }
)

export const addShortURL = createAsyncThunk(
  'urls/addNewShortURL',
  async (url) => {
    const { data } = await makeRequest(`mutation CreateShortURL {
      shorten_url(url: "${url}") {
        short_url {
          id
          url
          short_url
          clicks
        }
      }
    }`)
    return data?.shorten_url?.short_url
  }
)