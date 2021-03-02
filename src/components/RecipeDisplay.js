/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import { PropTypes } from 'prop-types';
import React from 'react';

function RecipeDisplay({ menu }) {
  return (
    <div className="recipe-card">
      <div className="recipe-card-head">
        <img className="recipe-card-img" src={menu.strMealThumb} alt="recipe" />
      </div>
      <div className="recipe-card-bottom">
        <div className="recipe-card-text">
          <p>{menu.strInstructions}</p>
        </div>
      </div>
    </div>
  );
}

RecipeDisplay.propTypes = {
  menu: PropTypes.any,
};

export default RecipeDisplay;
