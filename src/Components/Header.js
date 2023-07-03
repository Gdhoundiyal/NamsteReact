import { LOGO_URL } from "../Utils/constants";
import { useState } from "react";
const Header = () => {
  const [btnloginreact, setbtnloginreact] = useState("Login");

  return (
    <div className="header">
      <div className="logContainer">
        <img className="logo" src={LOGO_URL} alt="An Image of food logo" />
      </div>
      <div className="Nav">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us </li>
          <li>Cart</li>
          <button
            className="btnlogin"
            onClick={() => {
              btnloginreact === "login"
                ? setbtnloginreact("Logout")
                : setbtnloginreact("login");
            }}
          >
            {btnloginreact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
