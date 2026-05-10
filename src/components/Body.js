import RestaurantCard from "./RestaurantCard";
import restList from "../utils/restData";
import { useState } from "react";
const Body = () => {
  const [restaurantList, setRestaurantList] = useState(restList);
  const [searchText, setSearchText] = useState("");
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className="body">
      <div className="search-bar">
        <button
          className="search-btn"
          onClick={() => {
            const filteredList = restList.filter((restaurant) =>
              restaurant.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase()),
            );
            setRestaurantList(filteredList);
          }}
        >
          Search
        </button>
        <input
          type="text"
          className="search-input"
          placeholder="Search for restaurant, cuisine or a dish"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            // const searchText = e.target.value.toLowerCase();
            // const filteredList = restList.filter((restaurant) =>
            //   restaurant.info.name.toLowerCase().includes(searchText),
            // );
            // setRestaurantList(filteredList);
          }}
        />
      </div>
      <div className="restaurant-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            name={restaurant.info.name}
            cuisine={restaurant.info.cuisines.join(", ")}
            rating={restaurant.info.avgRating}
            logo={restaurant.info.cloudinaryImageId}
            rate={restaurant.info.costForTwo}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
