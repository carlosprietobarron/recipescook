import { FETCH_RECIPE, FETCH_RECIPE_SUCCESS, FETCH_RECIPE_FAILURE } from '../types/recipesTypes';
  
  const fetchrecipe = () => ({
    type: FETCH_RECIPE,
  });
  
  const fetchrecipeSuccess = data => ({
    type: FETCH_RECIPE_SUCCESS,
    payload: data,
  });
  
  const fetchrecipeFailure = err => ({
    type: FETCH_RECIPE_FAILURE,
    payload: err,
  });
  
  const recipeFetch = title => dispatch => {
    dispatch(fetchrecipe());
    console.log('url recipe', `https://www.themealdb.com/api/json/v1/1/search.php?s=${title}`);
  
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${title}`)
      .then(response => response.json())
      .then(data => {
        dispatch(fetchrecipeSuccess(data));
      })
      .catch(err => {
        dispatch(fetchrecipeFailure(err));
      });
  };
  
  export {
    fetchrecipe, fetchrecipeSuccess, fetchrecipeFailure, recipeFetch,
  };
  