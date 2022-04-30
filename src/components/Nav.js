import { useState } from 'react';
import { Link } from 'react-router-dom'
import AddRecipe from './AddRecipe';

function Nav() {
  const [show, setshow] = useState(false);
  return (
    <div className="navbar-container">
        <h2 className="logo">
            Yummy Yummy!
        </h2>
        <ul className="menu">
          <Link to="/">
            <li > Home </li>
          </Link>
          <Link to="/recipies">
            <li> Recipies </li>
          </Link>
            <li onClick={() => setshow(true)}> Add New Recipe </li>
            {show ? <AddRecipe setshow={setshow} show={show} /> : null}
          <Link to="/about">
            <li> About </li>
          </Link>
        </ul>
    </div>
  )
}

export default Nav