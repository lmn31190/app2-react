import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./component/Card";
import "./style/index.css";

const App = () => {
  const [mealData, setMealData] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + filter)
      .then((res) => setMealData(res.data.meals));
  }, [filter]);

  return (
    <div className="app-container">
      <h1>Meals recettes</h1>
        <input
          type="text"
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Rechercher (en anglais)"
        />

      <div className="meals-container">
        {mealData && mealData.slice(0, 24).map((meal) => (
            <Card meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default App;
