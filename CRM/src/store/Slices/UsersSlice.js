import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  users: [],
  selectedUser: [],
  originalUsers: [],
  currentPage: 1,
  totalUsers: 0,
  totalPages: 0,
  usersPerPage: 10,
  userSearchResult: null
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
    upDateUser: (state, action) => {
      const updateUser = action.payload;
      const userIndex = state.users.findIndex(user => user.id == updateUser.id)

      if(userIndex !== -1) {
        state.users[userIndex] = {...state.users[userIndex], ...updateUser}
      }
    },
    selectUser: (state, action) => {
      state.selectedUser = action.payload
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
    },
    searchUserByName: (state, action) => {
      
      const valueSearch = action.payload.toLowerCase();

      if(state.originalUsers.length == 0) {
        state.originalUsers = state.users;
      }

      if(valueSearch.length == 0) {
        state.users = state.originalUsers;
      } else {
        state.users = state.originalUsers.filter(user => user.name.toLowerCase().includes(valueSearch))
      }

      if(state.users.length == 0) {
        state.userSearchResult = 'Not found'
      } else {
        state.userSearchResult = null
      }
    }
  },
})

export const {setUsers, addUser, deleteUser, selectUser, setPage, chooseUsersPerPage, sortUsersByName, searchUserByName, upDateUser} = usersSlice.actions;

export default usersSlice.reducer;