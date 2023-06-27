import RestaurantCard from "./RestauranCard";
import resObj from "../Utils/mockdata";

const Body = () => (
  <div className="body">
    <div className="search">Search</div>
    <div className="res_container">
      {resObj.map((restaurant) => (
        <RestaurantCard key={restaurant.data.id} resData={restaurant} />
      ))}
    </div>
  </div>
);

export default Body;
