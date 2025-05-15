import React from "react";
import { restaurantList } from "../Utils/MockData.js"
import RestaurantCard from "./RestaurantCard.js";

// class="h-[35px] w-20 lg:w-[300px] md:w-52 sm:w-40 text-center text-lg border-2 border-[#818080] rounded font-Arvo

const Body = () => {
  return (
    <div className="m-10 p-10 flex flex-wrap gap-5">
       {restaurantList.map((restaurant) => (
        <RestaurantCard key={restaurant.info.id} restaurantData={restaurant} />
      ))}
    </div>
  )
};

export default Body;