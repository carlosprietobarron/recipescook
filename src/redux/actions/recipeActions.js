import { FETCH_RECIPE_REQUEST, FETCH_RECIPE_SUCCESS, FETCH_RECIPE_FAILURE } from '../types/recipesTypes';

const fetchrecipeRequest = () => ({
  type: FETCH_RECIPE_REQUEST,
});

const fetchrecipeSuccess = data => ({
  type: FETCH_RECIPE_SUCCESS,
  payload: data,
});

const fetchrecipeFailure = err => ({
  type: FETCH_RECIPE_FAILURE,
  payload: err,
});

const recipeFetch = recipe => dispatch => {
  dispatch(fetchrecipeRequest());

  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe}`)
    .then(response => response.json())
    .then(data => {
      dispatch(fetchrecipeSuccess(data));
    })
    .catch(err => {
      dispatch(fetchrecipeFailure(err));
    });
};

export {
  fetchrecipeRequest, fetchrecipeSuccess, fetchrecipeFailure, recipeFetch,
};
