import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BaseQueryApi } from "@reduxjs/toolkit/dist/query/baseQueryTypes";

import { authActions, Credentials } from "features/auth/auth-by-username/model";

import { StateSchema } from "app/providers/StoreProvider";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.API_URL,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const { token } = (getState() as StateSchema).auth;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

const baseQueryWithReAuth = async (
  args: any,
  api: BaseQueryApi,
  extraOptions: {}
) => {
  let result = await baseQuery(args, api, extraOptions);
  const isAuthError = result?.error?.status === 403;

  if (isAuthError) {
    const refreshResult = await baseQuery("/auth/refresh", api, extraOptions);
    const credentials = refreshResult.data as Credentials;

    if (credentials) {
      api.dispatch(authActions.setCredentials({ ...credentials }));
      result = await baseQuery(args, api, extraOptions);
    }
  }

  return result;
};

export const api = createApi({
  baseQuery: baseQueryWithReAuth,
  tagTypes: ["User"],
  endpoints: (builder) => ({}),
});
