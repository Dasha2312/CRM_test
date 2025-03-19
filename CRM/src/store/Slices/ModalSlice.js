import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  modalOpen: false,
  modalType: null
}

const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.modalOpen = true,
      state.modalType = action.payload
    },
    closeModal: (state) => {
      state.modalOpen = false,
      state.modalType = null
    }
  }
})

export const { openModal, closeModal } = ModalSlice.actions;

export default ModalSlice.reducer