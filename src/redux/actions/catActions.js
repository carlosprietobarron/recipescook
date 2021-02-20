import { FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_FAILURE, FETCH_CATEGORIES_SUCCESS } from '..//types/catTypes';
  
  const fetchCatRequest = () => ({
    type: FETCH_CATEGORIES_REQUEST,
  });
  
  const fetchCatSuccess = data => ({
    type: FETCH_CATEGORIES_SUCCESS,
    payload: data,
  });
  
  const fetchCatFailure = error => ({
    type: FETCH_CATEGORIES_FAILURE,
    payload: error,
  });

  const changeFilter = key => ({
    type: 'CHANGE_FILTER',
    payload: key,
  });
  
  const fetchCat = () => dispatch => {
    dispatch(fetchCatRequest());
  
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => response.json())
      .then(data => {
        console.log(data.categories);
        dispatch(fetchCatSuccess(data.categories));
      })
      .catch(err => {
        dispatch(fetchCatFailure(err));
      });
  };
  
  export {
    fetchCatRequest, fetchCatSuccess, fetchCatFailure, fetchCat, changeFilter
  };
  