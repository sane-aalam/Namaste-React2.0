import React from "react";

const RestaurantCard = (props) => {
  // console.log(props.restaurantData.info.name);

  const { restaurantData } = props;
  const {name, cloudinaryImageId, locality, areaName,
     costForTwo, cuisines, avgRating} 
  = restaurantData?.info;

  const deliveryTime = restaurantData?.info?.sla?.deliveryTime;

  return (
    <div className="w-[320px] h-[350px] shadow-2xl text-[17px] relative max-w-xs overflow-hidden bg-cover bg-no-repeat bg-gray-100 font-Arvo">
      <div className="flex justify-center items-center">
        <img src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          alt=""
        className="w-[280px] h-[180px] max-w-xs transition duration-300 ease-in-out hover:scale-115 cursor-pointer" />
      </div>
      <div className="m-5">
        <div className="text-1xl font-bold">
          {name.slice(0, 22)}
          {name.length > 22 ? "..." : ""}
        </div>
        <div className="flex justify-start gap-2">
           <p>⭐{avgRating}</p>
           <p className="text-1xl">• {deliveryTime} mins</p>
        </div>
        <p>
            {cuisines.join(", ").slice(0, 30)}
            {cuisines.join(", ").length > 30 ? "..." : ""}
        </p>
        <p>{areaName}, {locality}</p>
        <p>{costForTwo}</p>
      </div>
    </div>
  )
};

export default RestaurantCard;