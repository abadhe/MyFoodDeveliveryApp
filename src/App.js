import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Heading from "./component/Heading.js";
import Body from "./component/Body.js";
import About from "./component/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./component/Contact";
import Error from "./component/Error";
import RestauranMenu from "./component/RestaurantMenu";


const AppLayout = () => {
  return (
    <div className="app">
      <Heading />
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contactus",
        element: <Contact/>
      },
      {
        path: "/restaurant/:resId",
        element: <RestauranMenu/>
      },
    ],
    errorElement: <Error/>,
  },
  
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
// root.render(<RouterProvider router={approuter} />);
root.render(<RouterProvider router={appRouter}></RouterProvider>);
