import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../ReduxeApiCallExample/Slice/userSlice'

export const store = configureStore({
    reducer: {
        user: userReducer
    }
})
