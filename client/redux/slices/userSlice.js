import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    userData: {},
    userReady: false,
}

export const userSlicer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.userData = action.payload;
            state.userReady = true;
        },
    },
})

export const { setUser } = userSlicer.actions;
export const selectUser = (state) => state.user.userData;
export const selectUserReady = (state) => state.user.userReady;

export default userSlicer.reducer;