import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User, UserSchema } from '../types/user';

const initialState: UserSchema = {};

const USER_TOKEN = 'token';

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        initAuthData: (state) => {
            const userToken = localStorage.getItem(USER_TOKEN);
            if (userToken) {
                state.authData!.token = JSON.parse(userToken);
            }
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_TOKEN);
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
