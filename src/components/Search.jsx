import React, { useEffect, useState } from "react";
import styles from "./search.module.css";

const URL = " https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "3714dd4bbf90413ba6463f58433336b8";

const Search = ({ foodData, setFoodData }) => {
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
};

export default Search;
