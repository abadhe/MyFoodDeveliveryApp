import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

const Heading = () =>{
  return (
    <div className = "header">
      <div className = "logo-container">
        <img 
          className="logo"
          src = "https://www.logodesign.net/logo/smoking-burger-with-letuce-3624ld.png">
        </img>
      </div>
      <div className = "nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
};

const resArr = [
  {
    "id": "11454356",
    "name": "Yard House",
    "type": "selection_intel_store",
    "address": "8437 PARK MEADOWS CENTER DR, LONE TREE, CO 80124",
    "hasRequested": false,
    "__typename": "ExternalStore"
  },
  {
    "id": "15964182",
    "name": "The Egg",
    "type": "selection_intel_store",
    "address": "8800 S Colorado Blvd, Highlands Ranch, CO 80126",
    "hasRequested": false,
    "__typename": "ExternalStore"
  },
  {
    "id": "14451615",
    "name": "Menchie'S Frozen Yogurt",
    "type": "selection_intel_store",
    "address": "8221 S Holly St, Centennial, CO 80122",
    "hasRequested": false,
    "__typename": "ExternalStore"
  },
  {
    "id": "21094961",
    "name": "Whispers Bar And Grill",
    "type": "selection_intel_store",
    "address": "1535 S Havana St, Aurora, CO 80012",
    "hasRequested": false,
    "__typename": "ExternalStore"
  },
  {
    "id": "17937285",
    "name": "Simply Pizza Truck",
    "type": "selection_intel_store",
    "address": "15562 E Fremont Dr, Parker, CO 80134",
    "hasRequested": false,
    "__typename": "ExternalStore"
  },
  {
    "id": "16258125",
    "name": "Grounds For Dismissal Coffee",
    "type": "selection_intel_store",
    "address": "10065 E Harvard Ave, Denver, CO 80231",
    "hasRequested": false,
    "__typename": "ExternalStore"
  },
  {
    "id": "15614968",
    "name": "Big Ds Smokehouse Bbq",
    "type": "selection_intel_store",
    "address": "11804 E Oswego St, Englewood, CO 80112",
    "hasRequested": false,
    "__typename": "ExternalStore"
  },
  {
    "id": "10989629",
    "name": "Dominos Pizza",
    "type": "selection_intel_store",
    "address": "4260 S Chambers Rd, Aurora, CO 80014",
    "hasRequested": false,
    "__typename": "ExternalStore"
  },
  {
    "id": "12118543",
    "name": "Mr Bakery",
    "type": "selection_intel_store",
    "address": "2781 S Parker Rd, Aurora, CO 80014",
    "hasRequested": false,
    "__typename": "ExternalStore"
  },
  {
    "id": "15466643",
    "name": "Sertinos Coffee",
    "type": "selection_intel_store",
    "address": "15285 E Smoky Hill Rd, Aurora, CO 80015",
    "hasRequested": false,
    "__typename": "ExternalStore"
  }
]


const RestaurantCard = (props) => {
  const { resData } = props;
<<<<<<< HEAD
  const {name, address} = resData
=======
>>>>>>> 8dade21 (first commit)
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src="https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/451cc447-02c6-4455-b04d-fe857d6aa096.jpeg"
        alt="Restaurant Logo"
      />
<<<<<<< HEAD
      <h3>{name}</h3>
      <h3>{address}</h3>
=======
      <h3>{resData.name}</h3>
      <h3>{resData.address}</h3>
>>>>>>> 8dade21 (first commit)
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        {resArr.map((resObj) => (
          <RestaurantCard key={resObj.id} resData={resObj} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Heading />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);