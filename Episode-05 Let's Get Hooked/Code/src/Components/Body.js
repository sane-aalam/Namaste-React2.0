import React, { useState } from "react";
import { restaurantList } from "../Utils/MockData.js"
import RestaurantCard from "./RestaurantCard.js";


// You have to maintain the state of the filtered data, so that the data is not lost when the user searches for a restaurant or filters the data
// concepts(copy data only changed not original data is changed!)
// call by value
// call by reference

const Body = () => {
  // current-state of variable
  // update-state of variable
  // difference between old virtual dom - new virtual dom  
  const [restaurant,setRestaurant] = useState(restaurantList);

  // write feature to filter the restaurant which have top ratings
  const filterTopRatingRestaurants = () =>{
     const filterRestaurantData = restaurant.filter((res) =>{
        return res.info.avgRating > 4.5;
     })
     console.log(filterRestaurantData);
     setRestaurant(filterRestaurantData);
  }

  const filterFastDeliveryTime = () =>{
    console.log("fast clicked!")
    const fastDeliveryTimeData = restaurant.filter((res) =>{
        return res.info.deliveryTime < 25;
     })
     console.log(fastDeliveryTimeData);
     setRestaurant(fastDeliveryTimeData);
  }
  
  return (
    <div className="ml-15 mr-15 pl-5 pr-5">
          <div className="mt-5 mb-5 ml-2">
              <button onClick={()=> filterTopRatingRestaurants()} data-ripple-light="true" className="inline-block rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2 cursor-pointer" type="button">
          Top Ratings Restaurants
          </button>
           <button onClick={()=> filterFastDeliveryTime()} data-ripple-light="true" className="inline-block rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2 cursor-pointer" type="button">
          20 min deliveryTime - FAST
          </button>
          </div>
        <div className="flex flex-wrap gap-5">
        {restaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restaurantData={restaurant} />
        ))}
      </div>
    </div>
  )
};

export default Body;