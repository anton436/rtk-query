import React from "react";
import { Route, Routes } from "react-router-dom";
import AddPost from "../components/AddPost";
import EditPost from "../components/EditPost";
import PostContainer from "../components/PostContainer";

const ROUTES = [
  {
    id: 1,
    link: "/posts",
    element: <PostContainer />,
  },
  {
    id: 2,
    link: "/users",
    element: <h1>users</h1>,
  },
  {
    id: 3,
    link: "/edit/:id",
    element: <EditPost />,
  },
  {
    id: 4,
    link: "/addpost",
    element: <AddPost />,
  },
  {
    id: 5,
    link: "*",
    element: <h1>NOT FOUND PAGE</h1>,
  },
];

const MainRoutes = () => {
  return (
    <>
      <Routes>
        {ROUTES.map((route) => (
          <Route key={route.id} path={route.link} element={route.element} />
        ))}
      </Routes>
    </>
  );
};

export default MainRoutes;
