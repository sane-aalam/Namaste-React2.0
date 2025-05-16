import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard.js";
import SimmerEffect from "./SimmerEffect.js";

const Body = () => {
  const [restaurant,setRestaurant] = useState([]);

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
       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.960059122809971&lng=77.57337538383284&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    const response = await fetch(url);
    const jsonData = await response.json();

    console.log(jsonData)

    console.log(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle ?.restaurants)
    setRestaurant(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle ?.restaurants);
  }

  return (restaurant.length == 0)?<SimmerEffect/>: (
    <div className="ml-15 mr-15 pl-5 pr-5">
          <div className="mt-5 mb-5 ml-2 text-2xl font-bold text-black">
            Restaurants with online food delivery in Bangalore
          </div>
          <div className="mt-5 mb-5 ml-2">
        {/* write feature to filter the restaurant which have top ratings */}
              <button onClick={()=> {
                const filterRestaurantData = restaurant.filter((res) =>{
                      return res.info.avgRating > 4.5;
                  })
                  console.log(filterRestaurantData);
                  setRestaurant(filterRestaurantData);
              }} data-ripple-light="true" className="inline-block rounded-md bg-white py-2 px-4 border border-transparent text-center text-1xl font-bold text-black shadow-md" type="button">
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