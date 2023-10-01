import RestaurantCard from "./RestaurantCard.js";
import { useState, useEffect } from "react";
import { API_URL } from "../utils/constants.js";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";

const Body = () => {
  //States
  const [originalListOfRestaurants, setOriginalListOfRestaurants] = useState(
    []
  );
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [itemFound, setItemFound] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  //api call
  const fetchData = async () => {
    try {
      const data = await fetch(API_URL);
      const json = await data.json();

      // Check if the necessary nested properties exist before accessing them
      if (
        json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      ) {
        const restaurants =
          json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;

        // Update state or perform other actions with the 'restaurants' data
        setOriginalListOfRestaurants(restaurants);
        setListOfRestaurants(restaurants);
      } else {
        // Handle the case where the expected data structure is not found
        console.error("Data structure not as expected:", json);
      }
    } catch (error) {
      // Handle any fetch or JSON parsing errors here
      console.error("Error fetching data:", error);
    }
  };

  //Click handlers
  const handleFilterClick = () => {
    const filterList = originalListOfRestaurants.filter(
      (res) => res.info.avgRating > 4
    );
    setItemFound("Item Found");
    setListOfRestaurants(filterList);
    setSearchText("");
    console.log(listOfRestaurants);
  };

  const handleClearClick = () => {
    setItemFound("");
    setSearchText("");
    setListOfRestaurants(originalListOfRestaurants);
  };

  const handleFilterBySearchClick = () => {
    if (searchText === "") {
      setItemFound("");
      return;
    }
    const filterSearchList = originalListOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log(filterSearchList);
    if (filterSearchList.length === 0) {
      setItemFound("Item Not Found");
      setListOfRestaurants(originalListOfRestaurants);
    } else {
      setListOfRestaurants(filterSearchList);
      setItemFound("Item Found");
    }
  };

  //Shimmer - Conditional rendering
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search-container">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button onClick={handleFilterBySearchClick}>Search</button>
        </div>
        <button className="filter-btn" onClick={handleFilterClick}>
          Filter Top Rated Restaurants
        </button>
        <button className="clear-btn" onClick={handleClearClick}>
          Clear
        </button>
      </div>
      <div className="itemFoundOrNot">
        <h3 style={{ color: itemFound === "Item Found" ? "green" : "red" }}>
          {itemFound}
        </h3>
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map((resObj) => (
          <Link key={resObj.info.id} to={"restaurant/" + resObj.info.id}>
            <RestaurantCard resData={resObj} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
