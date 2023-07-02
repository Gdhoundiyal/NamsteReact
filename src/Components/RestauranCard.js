import { CDN_URL } from "../Utils/constants";
import resObj from "../Utils/mockdata";

const RestaurantCard = (props) => {
  const { resData } = props;

  return (
    <div className="res_card">
      <img className="pun_img" src={CDN_URL + resData.data.cloudinaryImageId} />
      <h3>{resData.data.name}</h3>
      <div>
        <div>{resData.data.cuisines.join(",")}</div>
        <div>{resData.data.avgRating} star</div>
        <div>
          {"\u20B9"}
          {resData.data.costForTwo / 100} for two
        </div>
        <div>{resData.data.deliveryTime}minutes</div>
      </div>
    </div>
  );
};

export default RestaurantCard;
