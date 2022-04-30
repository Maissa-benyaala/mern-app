import { configureStore } from '@reduxjs/toolkit'
import recipeSlice  from './recipeSlice/recipeSlice'

export const store = configureStore({
  reducer: {
    recipe: recipeSlice,
  },
})