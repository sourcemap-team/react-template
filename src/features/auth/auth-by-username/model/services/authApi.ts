import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LoginSchema } from '../types/loginSchema';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.API_URL,
    }),
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: (body: LoginSchema) => ({
                url: '/signin',
                method: 'post',
                body,
            }),
        }),
    }),
});

export const {
    useLoginUserMutation,
} = authApi;
