import { useState, useEffect } from "react";
import { MENU_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestauranMenu = () => {
  const [menuInfo, setMenuInfo] = useState(null);
  const {resId} = useParams();
  
  console.log(MENU_API_URL)
  console.log(resId)  
  useEffect(() => {
    fetchMenuData();
  }, []);
  const fetchMenuData = async () => {
    const data = await fetch(MENU_API_URL+resId);
    const json = await data.json();
    setMenuInfo(json);
    //console.log(json);
  };


  if (menuInfo === null) {
    return <Shimmer />;
  }
  const { name, avgRating, costForTwoMessage, cuisines } =
    menuInfo?.data?.cards[0]?.card?.card?.info;

  const { itemCards } =
    menuInfo?.data?.cards[2]?.groupedCard.cardGroupMap?.REGULAR.cards[2].card
      .card;


  return (
    <div className="menu-container">
      <h1>{name}</h1>
      <p>
        {avgRating} {costForTwoMessage}
      </p>
      <h2>{cuisines.join(", ")}</h2>
      <div>
        <h1>Menu</h1>
        {itemCards.map((res) => (
          <li key="res.card.info.id">
            {res.card.info.name} - {" Rs"}
            {res.card.info.price / 100 || res.card.info.defaultPrice / 100}
          </li>
        ))}
      </div>
    </div>
    // <div>

    // </div>
  );
};

export default RestauranMenu;
