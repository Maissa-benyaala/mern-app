import React from 'react'

const RecipeCard = ({recipe}) => {
  return (
    <div className="recipeCard">
       <div>
          <img src={recipe.img} alt={recipe.name} />
          <div className="Card-details">
            <h3>{recipe.name}</h3>
            {/* <p>{recipe.rate}</p> */}
          </div>
        </div>
    </div>
  )
}

export default RecipeCard