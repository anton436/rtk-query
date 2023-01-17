import React, { FC, useEffect, useState } from "react";
import AddPost from "./components/AddPost";
import EditPost from "./components/EditPost";
import Navbar from "./components/Navbar";
import PostContainer from "./components/PostContainer";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import MainRoutes from "./routes/MainRoutes";
import { fetchUsers } from "./store/reducers/ActionCreators";
import { userSlice } from "./store/reducers/UserSlice";

const App: FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useAppDispatch();

  const { users, isLoading, error } = useAppSelector(
    (state) => state.userReducer
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <Navbar />
      {isLoading && <h1> loading</h1>}
      {error && <h1>{error}</h1>}
      {users.map((user) => (
        <div key={user.id}>
          {user.id}. {user.name}
        </div>
      ))}
      <hr />

      <MainRoutes />
    </div>
  );
};

export default App;
