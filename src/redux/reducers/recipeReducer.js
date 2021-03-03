import { FETCH_RECIPE_REQUEST, FETCH_RECIPE_SUCCESS, FETCH_RECIPE_FAILURE } from '../types/recipesTypes';

const initailState = {
  loading: true,
  data: [],
  error: '',
};

const recipeReducer = (state = initailState, action) => {
  switch (action.type) {
    case FETCH_RECIPE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_RECIPE_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: '',
      };

    case FETCH_RECIPE_FAILURE:
      return {
        loading: true,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default recipeReducer;
