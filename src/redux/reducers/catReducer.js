import { FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_FAILURE, FETCH_CATEGORIES_SUCCESS } from '../types/catTypes';

const initailState = {
  loading: true,
  data: [],
  error: '',
};

const catReducer = (state = initailState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_REQUEST: return {
      ...state,
      loading: true,
    };

    case FETCH_CATEGORIES_SUCCESS: return {
      loading: false,
      data: action.payload,
      error: '',
    };

    case FETCH_CATEGORIES_FAILURE: return {
      loading: true,
      data: [],
      error: action.payload,
    };

    default: return state;
  }
};

export default catReducer;