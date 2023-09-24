import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, locality, areaName, avgRating, costForTwo, cuisines } =
    resData.info;
  const cloudinaryImageId = resData.info.cloudinaryImageId;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={`${CDN_URL}/${cloudinaryImageId}`}
        alt="Restaurant Logo"
      />
      <h3>{name}</h3>
      <h3>{`${locality} , ${areaName}`}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwo}</h3>
      <h3>{avgRating}</h3>
    </div>
  );
};

export default RestaurantCard;
