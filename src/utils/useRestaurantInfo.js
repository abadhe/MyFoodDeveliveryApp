import { MENU_API_URL } from "../utils/constants";
import { useState, useEffect } from "react";
const useRestaurantInfo = (resId) => {
  const [menuInfo, setMenuInfo] = useState(null);

  console.log(MENU_API_URL);
  console.log(resId);
  useEffect(() => {
    fetchMenuData();
  }, []);
  const fetchMenuData = async () => {
    const data = await fetch(MENU_API_URL + resId);
    const json = await data.json();
    setMenuInfo(json);
  };
  return menuInfo;
};

export default useRestaurantInfo;