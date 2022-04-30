import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Nav from './components/Nav';
import Recipies from './components/Recepies';
import { getRecipes } from './redux/recipeSlice/recipeSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipes());
  }, []);
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipies" element={<Recipies />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
