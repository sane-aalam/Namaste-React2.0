import React, { useEffect, useState } from "react";
import { restaurantList } from "../Utils/MockData.js"
import RestaurantCard from "./RestaurantCard.js";


// In React.js UI Creation
// We will always follow second approach
// App Loads > Render (HTML) > Call API > re-render DATA
// useEffect() is a hook that takes a function and an array of dependencies as arguments.
// It calls the function whenever one of the dependencies changes.
// useEffect() is always call after body render 

const Body = () => {
  const [restaurant,setRestaurant] = useState(restaurantList);

  // useEffect() is a hook that takes a function and an array of dependencies as arguments.
  // It calls the function whenever one of the dependencies changes.

  console.log("body called 1")

  useEffect(() =>{
    console.log("useEffect is called!")
    fetechSwiggyReatTimeData();
  },[])

  console.log("body called 2")

  const fetechSwiggyReatTimeData = async () =>{
      const url =
       "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING";
    const response = await fetch(url);
    const jsonData = await response.json();

    console.log(jsonData)

    // console.log(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle ?.restaurants)
  }

  // write feature to filter the restaurant which have top ratings
  const filterTopRatingRestaurants = () =>{
     const filterRestaurantData = restaurant.filter((res) =>{
        return res.info.avgRating > 4.5;
     })
     console.log(filterRestaurantData);
     setRestaurant(filterRestaurantData);
  }
  return (
    <div className="ml-15 mr-15 pl-5 pr-5">
          <div className="mt-5 mb-5 ml-2">
              <button onClick={()=> filterTopRatingRestaurants()} data-ripple-light="true" className="inline-block rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2 cursor-pointer" type="button">
          Top Ratings Restaurants
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