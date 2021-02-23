/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { recipeFetch } from '../redux/actions';
import RecipeDisplay from '../components/RecipeDisplay'

function RecipeContainer( props ) {
    const { recipe, recipeFetch } = props
    const {
        match: { params },
      } = props;
     console.log("parameters", params);
     const callRecipe = recipe => {
      console.log("callRecipe", recipe);
      return <RecipeDisplay menu={recipe.meals[0]} />
    }

    useEffect(() => { recipeFetch(params.recipe) },[]);

    return recipe.loading ? (
        <h2>Recipe is loading</h2>
    ) : recipe.error ? (
        <h2>{recipe.error}</h2>
    ) : ( 
      <div>
        <div className="recipe-display">
          {callRecipe(recipe.data)}
        </div>
      </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        recipe: state.recipe,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {    
        recipeFetch: meal => {
            dispatch(recipeFetch(meal))
        },
    }
}

export default connect( mapStateToProps, mapDispatchToProps) (RecipeContainer)
