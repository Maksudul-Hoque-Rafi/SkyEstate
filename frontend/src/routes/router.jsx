import { createBrowserRouter } from "react-router";
import { Layout, RequiredAuth } from "../Layout/Layout";
import HomePage from "../pages/HomePage";
import ListPage from "../pages/ListPage";
import SinglePage from "../pages/SinglePage";
import ProfilePage from "../pages/ProfilePage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProfileUpdate from "../pages/ProfileUpdate";
import NewPostPage from "../pages/NewPostPage";
import {
  listPageLoader,
  profilePageLoader,
  singlePageLoader,
} from "../lib/loaders";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <div>Not Found 404</div>,
    children: [
      {
        Component: Layout,
        children: [
          { index: true, Component: HomePage },
          { path: "list", loader: listPageLoader, Component: ListPage },
          { path: "/:id", loader: singlePageLoader, Component: SinglePage },
          { path: "/login", Component: Login },
          { path: "/register", Component: Register },
        ],
      },
      {
        Component: RequiredAuth,
        children: [
          {
            path: "/profile",
            loader: profilePageLoader,
            Component: ProfilePage,
          },
          { path: "/profile/update", Component: ProfileUpdate },
          { path: "/add", Component: NewPostPage },
        ],
      },
    ],
  },
]);

export default router;
