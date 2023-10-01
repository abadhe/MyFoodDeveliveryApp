import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Heading = () => {
  const [buttonNameReact, setButtonNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status {onlineStatus?"🟢":"🔴"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contactus">Contact Us</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
         
          <li>Cart</li>
          <button
            className="session"
            onClick={() => {
              buttonNameReact === "Login"
                ? setButtonNameReact("Logout")
                : setButtonNameReact("Login");
            }}
          >
            {buttonNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Heading;
