import { configureStore } from '@reduxjs/toolkit'
import modalSlice from "./Slices/ModalSlice"
import usersList from "./Slices/UsersSlice"

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    users: usersList
  },
})