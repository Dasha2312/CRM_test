import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  users: [],
  selectedUser: [],
  currentPage: 1,
  totalUsers: 0,
  totalPages: 0,
  usersPerPage: 10,
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
      state.totalUsers = action.payload.length;
      state.totalPages = Math.ceil(state.totalUsers / state.usersPerPage); 
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
      state.totalUsers = state.users.length;
      state.totalPages = Math.ceil(state.totalUsers / state.usersPerPage);

      if (state.users.length > state.usersPerPage * state.currentPage) {
        state.currentPage += 1;
      }
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload)
      state.selectedUser = [];
      state.totalUsers = state.users.length;
      state.totalPages = Math.ceil(state.totalUsers / state.usersPerPage);
    },
    selectUser: (state, action) => {
      state.selectedUser.push(action.payload)
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    chooseUsersPerPage: (state, action) => {
      state.usersPerPage = action.payload
      state.totalUsers = state.users.length;
      state.totalPages = Math.ceil(state.totalUsers / state.usersPerPage);

      if (state.currentPage > Math.ceil(state.totalUsers / state.usersPerPage)) {
        state.currentPage = 1;
      }
    },
    sortUsersByName: (state, action) => {
      const {order} = action.payload
      state.users = state.users.sort((a, b) => {
        if (order === 'asc') {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      });
    }
  },
})

export const {setUsers, addUser, deleteUser, selectUser, setPage, chooseUsersPerPage, sortUsersByName} = usersSlice.actions;

export default usersSlice.reducer;