import React from 'react';
import { useHistory } from 'react-router-dom';

function MenuDisplay({menu}) {
  const history = useHistory();
  
  const handleClick = menu => {
  const recipe = menu.strMeal;
  history.push(`/recipes/${recipe}`);
  };


    return (
        <div className="menu-card">
           <div className="menu-card-head">
            <img className="menu-card-img" src={menu.strMealThumb} alt="recipe"/>
           </div>
           <div className="menu-card-data">
             <div className="menu-card-name">
               <h5>{menu.strMeal}</h5>
               <button className="btn btn-success btn-sm" onClick={() => handleClick(menu)}>
                 View Recipe
             </button>
             </div>
           </div>
        </div>
    )
}

export default MenuDisplay