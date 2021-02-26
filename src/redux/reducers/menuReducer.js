import { FETCH_MENU_REQUEST, FETCH_MENU_SUCCESS, FETCH_MENU_FAILURE } from '../types/menuTypes';

const initailState = {
  loading: true,
  data: [],
  error: '',
};

const menuReducer = (state = initailState, action) => {
  switch (action.type) {
    case FETCH_MENU_REQUEST: return {
      ...state,
      loading: true,
    };

    case FETCH_MENU_SUCCESS: return {
      loading: false,
      data: action.payload,
      error: '',
    };

    case FETCH_MENU_FAILURE: return {
      loading: true,
      data: [],
      error: action.payload,
    };

    default: return state;
  }
};

export default menuReducer;
