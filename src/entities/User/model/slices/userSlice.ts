import { createSlice } from "@reduxjs/toolkit";

import { User } from "entities/User/model";

const initialState: User = {
  email: "",
  roles: ["Employee"],
  firstName: "",
  lastName: "",
  isAdmin: false,
  isManager: false,
  status: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.email = action.payload.email;
      state.roles = action.payload.roles;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.isAdmin = action.payload.isAdmin;
      state.isManager = action.payload.isManager;
      state.status = action.payload.status;
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
