import RestaurantCard from "./RestauranCard";
import { useEffect, useState } from "react";
import resObj from "../Utils/mockdata";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5732907&lng=77.2219418&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  };
  return (
    <div className="body">
      <button
        className="filter-btn"
        onClick={() => {
          const filterdList = resObj.filter((res) => res.data.avgRating > 4);
          setListOfRestaurants(filterdList);
          listdata = filterdList;
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="res_container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
