import React from "react";
import FoodItem from "./FoodItem";

const Foodlist = ({ foodData, setFoodData, setFoodId }) => {
  return (
    <div>
      {foodData.map((food) => (
        <FoodItem setFoodId={setFoodId} key={food.id} food={food} />
      ))}
    </div>
  );
};

export default Foodlist;
