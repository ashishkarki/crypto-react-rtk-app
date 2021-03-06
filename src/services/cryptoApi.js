import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { createRequest } from './utils'

const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': '978cb50d00mshce1c7492f6b8042p1e773fjsn7d1efe372787',
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

// const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) =>
        createRequest(`/coins?limit=${count ?? 10}`, cryptoApiHeaders),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`, cryptoApiHeaders),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) =>
        createRequest(
          `/coin/${coinId}/history?timePeriod=${timeperiod}`,
          cryptoApiHeaders,
        ),
    }),
  }),
})

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi
