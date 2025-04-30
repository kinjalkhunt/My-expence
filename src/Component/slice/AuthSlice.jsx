import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSidebarOpen: false,
    isLoginModelOpen: true,
    isRegisterModelOpen: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setIsSidebarOpen: (state, action) => {
            state.isSidebarOpen = action.payload;
        },
        openLoginModel: (state) => {
            state.isLoginModelOpen = true;
        },
        closeLoginModel: (state) => {
            state.isLoginModelOpen = false;
        },
        openRegisterModel: (state) => {
            state.isRegisterModelOpen = true;
        },
        closeRegisterModel: (state) => {
            state.isRegisterModelOpen = false;
        },
    }
});

const { actions, reducer } = authSlice;

export const {
    setIsSidebarOpen,
    openLoginModel,
    closeLoginModel,
    openRegisterModel,
    closeRegisterModel
} = actions;

export default reducer;