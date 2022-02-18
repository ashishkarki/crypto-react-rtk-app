import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {} from '@reduxjs/toolkit/query/react'
import { createRequest } from './utils'

const cryptoNewsHeaders = {
  'x-bingapis-sdk': 'true',
  'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
  'x-rapidapi-key': '978cb50d00mshce1c7492f6b8042p1e773fjsn7d1efe372787',
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`,
          cryptoNewsHeaders,
        ),
    }),
  }),
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi
