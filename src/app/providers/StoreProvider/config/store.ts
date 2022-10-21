import { configureStore } from '@reduxjs/toolkit';

import { userReducer } from 'entities/User';
import { authApi } from 'features/auth/auth-by-username';

export const store = configureStore({
    reducer: {
        user: userReducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
