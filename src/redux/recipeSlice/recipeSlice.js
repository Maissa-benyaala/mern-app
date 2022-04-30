import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getRecipes = createAsyncThunk("recipe/get", async () => {
  try {
    let result = await axios.get("http://localhost:5000/recipe/");
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const addRecipes = createAsyncThunk("recipe/add", async (recipe) => {
  try {
    let result = await axios.post("http://localhost:5000/recipe/add", recipe);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const deleteRecipes = createAsyncThunk("recipe/delete", async (id) => {
  try {
    let result = await axios.delete(`http://localhost:5000/recipe/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const updateRecipes = createAsyncThunk(
  "recipe/update",
  async ({ id, recipe }) => {
    try {
      let result = await axios.put(`http://localhost:5000/recipe/${id}`, recipe);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  recipe: null,
  status: null,
};

export const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {},
  extraReducers: {
    [getRecipes.pending]: (state) => {
      state.status = "pending";
    },

    [getRecipes.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.recipe = action.payload.data.recipes;
    },
    [getRecipes.rejected]: (state) => {
      state.status = "rejected";
    },
    [addRecipes.pending]: (state) => {
      state.status = "pending";
    },

    [addRecipes.fulfilled]: (state) => {
      state.status = "fulfilled";
    },
    [addRecipes.rejected]: (state) => {
      state.status = "rejected";
    },
    [deleteRecipes.pending]: (state) => {
      state.status = "pending";
    },

    [deleteRecipes.fulfilled]: (state) => {
      state.status = "fulfilled";
    },
    [deleteRecipes.rejected]: (state) => {
      state.status = "rejected";
    },
    [updateRecipes.pending]: (state) => {
      state.status = "pending";
    },

    [updateRecipes.fulfilled]: (state) => {
      state.status = "fulfilled";
    },
    [updateRecipes.rejected]: (state) => {
      state.status = "rejected";
    },  }
})

// export const { increment, decrement, incrementByAmount } = recipeSlice.actions

export default recipeSlice.reducer