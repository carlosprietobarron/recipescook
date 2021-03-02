/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { recipeFetch } from '../redux/actions';
import RecipeDisplay from '../components/RecipeDisplay';

function RecipeContainer(props) {
  const { recipe, recipeFetch } = props;

  const {
    match: { params },
  } = props;

  const callRecipe = recipe => <RecipeDisplay menu={recipe.meals[0]} />;

  useEffect(() => { recipeFetch(params.recipe); }, []);

  return recipe.loading ? (
    <h2>Recipe is loading</h2>
  ) : recipe.error ? (
    <h2>{recipe.error}</h2>
  ) : (
    <div>
      <div className="recipe-header">
        <div className="recipe-title">
          <h2>{params.recipe}</h2>
        </div>
        <div>
          <Link to="/" className="recipe-link">Home</Link>
        </div>
      </div>
      <div className="recipe-display">
        {callRecipe(recipe.data)}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  recipe: state.recipe,
});

const mapDispatchToProps = dispatch => ({
  recipeFetch: meal => {
    dispatch(recipeFetch(meal));
  },
});

RecipeContainer.propTypes = {
  recipe: PropTypes.any,
  recipeFetch: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeContainer);
