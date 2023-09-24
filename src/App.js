import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Heading from "./component/Heading.js";
import Body from "./component/Body.js";

const AppLayout = () => {
  return (
    <div className="app">
      <Heading />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
