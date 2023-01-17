import { userSlice } from "./UserSlice";
import axios from "axios";
import { IUser } from "../../models/IUser";
import { AppDispatch } from "../store";
import { createAsyncThunk } from "@reduxjs/toolkit";

const USER_API = "https://jsonplaceholder.typicode.com/users";

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(userSlice.actions.usersFetching());
//     const { data } = await axios.get<IUser[]>(USER_API);

//     dispatch(userSlice.actions.usersFetchingSuccess(data));
//   } catch (error: any) {
//     dispatch(userSlice.actions.usersFetchingError(error.message));
//   }
// };

export const fetchUsers = createAsyncThunk(
  "user/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get<IUser[]>(USER_API);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("не удалось загрузить пользователей");
    }
  }
);
