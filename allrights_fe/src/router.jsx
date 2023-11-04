import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import Mainpage from "./pages/mainpage/Mainpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Mainpage />,
      },
    ],
  },
]);

export default router;
