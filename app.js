import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import Heading from "./src/component/Heading"
import Body from "./src/component/Body"

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