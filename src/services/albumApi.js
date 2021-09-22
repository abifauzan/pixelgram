import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const albumApi = createApi({
    reducerPath: 'albumApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),
    endpoints: (builder) => ({
        getAlbums: builder.query({
            query: () => 'albums',
        }),
        getUsers: builder.query({
            query: () => 'users',
        }),
        getPhotos: builder.query({
            query: () => 'photos',
        }),
    }),
})

export const { 
    useGetAlbumsQuery, 
    useGetUsersQuery,
    useGetPhotosQuery,
} = albumApi