/* eslint-disable react/require-default-props */
import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

function MenuDisplay({ menu }) {
  const history = useHistory();
  const handleClick = menu => {
    const recipe = menu.strMeal;
    history.push(`/recipes/${recipe}`);
  };

  return (
    <div className="menu-card">
      <div className="menu-card-head">
        <img className="menu-card-img" src={menu.strMealThumb} alt="recipe" />
      </div>
      <div className="menu-card-data">
        <div className="menu-card-name">
          <h5>{menu.strMeal}</h5>
          <button type="button" className="btn btn-show-recipe" onClick={() => handleClick(menu)}>
            View Recipe
          </button>
        </div>
      </div>
    </div>
  );
}

MenuDisplay.propTypes = {
  menu: PropTypes.shape({
    idMeal: PropTypes.string,
    strMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
  }),
};

export default MenuDisplay;
