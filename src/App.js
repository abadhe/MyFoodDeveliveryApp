import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Heading from "./component/Heading.js";
import Body from "./component/Body.js";
import About from "./component/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./component/Contact";
import Error from "./component/Error";


const AppLayout = () => {
  return (
    <div className="app">
      <Heading />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error/>,
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/contactus",
    element: <Contact/>
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
// root.render(<RouterProvider router={approuter} />);
root.render(<RouterProvider router={appRouter}></RouterProvider>);
