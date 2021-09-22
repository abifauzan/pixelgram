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
        getAlbumsDetail: builder.query({
            query: (id) => `albums/${id}`,
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
    useGetAlbumsDetailQuery, 
    useGetUsersQuery,
    useGetPhotosQuery,
} = albumApi