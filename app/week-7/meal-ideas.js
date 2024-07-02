"use client";

import { useState, useEffect } from 'react';

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const fetchMealIdeas = async (ingredient) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      const data = await response.json();
      return data.meals || [];
    } catch (error) {
      console.error('Error fetching meal ideas:', error);
      return [];
    }
  };

  const loadMealIdeas = async () => {
    const fetchedMeals = await fetchMealIdeas(ingredient);
    setMeals(fetchedMeals);
  };

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  return (
    <div className="ml-10">
      <h2 className="text-xl font-bold text-white mb-4">Meal Ideas</h2>
      <ul className="list-none p-0">
        {meals.map((meal) => (
          <li key={meal.idMeal} className="mb-4">
            <div className="text-lg font-bold text-white">{meal.strMeal}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
