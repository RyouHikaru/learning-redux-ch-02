import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    name: "火星人",
  },
  {
    id: "2",
    name: "ユーザー",
  },
  {
    id: "3",
    name: "宇宙人",
  },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
