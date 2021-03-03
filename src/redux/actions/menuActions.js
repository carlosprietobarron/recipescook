import { FETCH_MENU_REQUEST, FETCH_MENU_FAILURE, FETCH_MENU_SUCCESS } from '../types/menuTypes';

const fetchMenuRequest = () => ({
  type: FETCH_MENU_REQUEST,
});

const fetchMenuSuccess = data => ({
  type: FETCH_MENU_SUCCESS,
  payload: data,
});

const fetchMenuFailure = error => ({
  type: FETCH_MENU_FAILURE,
  payload: error,
});

const changeCat = key => ({
  type: 'CHANGE_CAT_FILTER',
  payload: key,
});

const fetchMenu = category => dispatch => {
  dispatch(fetchMenuRequest());
  const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      dispatch(fetchMenuSuccess(data.meals));
    })
    .catch(err => {
      dispatch(fetchMenuFailure(err));
    });
};

export {
  fetchMenuRequest, fetchMenuSuccess, fetchMenuFailure, fetchMenu, changeCat,
};
