import React from 'react'
import { useSelector } from "react-redux";
import RecipeCard from './RecipeCard'

const Recepies = () => {
  const recipes = useSelector((state) => state.recipe.recipe);
  return (
    <div className="recipes-container">
      {recipes.map((recipe) => <RecipeCard recipe={recipe}/>)}
    </div>
  )
}

export default Recepies