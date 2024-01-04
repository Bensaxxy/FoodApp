import React, { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
import ItemList from "./ItemList";

const FoodDetails = ({ foodId }) => {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "3714dd4bbf90413ba6463f58433336b8";

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }

    if (foodId) {
      fetchFood();
    }
  }, [foodId, URL, API_KEY]);

  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}> {food.title}</h1>
        <img className={styles.recipeImage} src={food.image} />

        <div className={styles.recepeDetails}>
          <span>
            {" "}
            <strong>⏱️{food.readyInMinutes} Minutes</strong>{" "}
          </span>
          <span>
            👨‍👩‍👧‍👦 <strong>{food.servings} </strong>{" "}
          </span>
          <span>
            {" "}
            <strong>
              {" "}
              {food.vegetarian ? "🥕 Vegetarian" : "🍖 Non-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? "🐮Vegan" : ""}</strong>
          </span>
        </div>

        <div>
          <span>
            <strong>💲{food.pricePerServing / 100} Per Serving</strong>
          </span>
        </div>
        <ItemList food={food} isLoading={isLoading} />

        <h2> Instructions</h2>
        <div className={styles.recepeInstruction}>
          <ol>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
