import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSidebarOpen: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setIsSidebarOpen: (state, action) => {
            state.isSidebarOpen = action.payload;
        },
    }
})

export const { setIsSidebarOpen } = authSlice.actions;
export default authSlice.reducer;