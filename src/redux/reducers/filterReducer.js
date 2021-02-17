import {} from '../types/filterTypes'

const filterInitialState = {
  filter: 'All',
};

const filterReducer = (state = [], action) => {
  if (action.type === CHANGE_FILTER) {
    return {
      ...state,
      filter: action.payload,
    };
  }
  return state;
};

export default filterReducer;
