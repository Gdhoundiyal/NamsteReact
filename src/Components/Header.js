import { LOGO_URL } from "../Utils/constants";

const Header = () => (
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
      </ul>
    </div>
  </div>
);

export default Header;
