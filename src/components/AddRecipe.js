import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function AddRecipe({ setshow}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({
      name: "",
      img: "",
      price: 0,
  });
  return (
    <div className="AddRecipe-container">
      <i class="fa-solid fa-xmark fa-lg close" onClick={()=> setshow(false)} > </i>
      <h3>Add New Recipe</h3>
      <label>Name:</label>
      <input
        type="text"
        onChange={(e) => setRecipe({ ...recipe, name: e.target.value })}
      />

      <label>Image:</label>
      <input
        type="text"
        onChange={(e) => setRecipe({ ...recipe, img: e.target.value })}
      />

      <label>Price:</label>
      <input
        type="number"
        onChange={(e) => setRecipe({ ...recipe, price: e.target.value })}
      />
      <button
        onClick={() => {
          dispatch(AddRecipe(recipe));
          setTimeout(() => {
            navigate("/recipes");
          }, 1000);
        }}
      >
        Add new recipe
      </button>
    </div>
  )
}

export default AddRecipe