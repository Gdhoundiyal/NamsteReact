import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => (
  <div className="header">
    <div className="logContainer">
      <img
        className="logo"
        src="https://www.shutterstock.com/shutterstock/photos/1328041577/display_1500/stock-vector-food-finder-app-logo-design-vector-template-1328041577.jpg"
        alt="An Image of food logo"
      />
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

// const Stylecard = {
//   backgroundColor: "f0f0f0",
// };

const RestaurantCard = () => {
  return (
    <div className="res_card">
      <img
        className="pun_img"
        src="https://www.thestatesman.com/wp-content/uploads/2022/02/istockphoto-1.jpg"
      />
      <h3>Kake Da Dhaba</h3>
      <div>
        <div>Tandoori Chaap and tikka</div>
        <div>20 Min</div>
        <div>4.4 star</div>
      </div>
    </div>
  );
};

const Body = () => (
  <div className="body">
    <div className="search">Search</div>
    <div className="res_container">
      <RestaurantCard />
    </div>
  </div>
);

const elem = <h1>Hello world</h1>;
console.log(elem);

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
