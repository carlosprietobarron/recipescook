import { FETCH_RECIPE_REQUEST } from '../types/menuTypes';
import menuReducer from './menuReducer';

describe('Category reducer', () => {
  it('should return an object with loading true', () => {
    const recipe = {
      loading: true,
      data: [],
      error: '',
    };

    const newState = menuReducer(undefined, {
      types: FETCH_RECIPE_REQUEST,
      payload: recipe,
    });

    expect(newState).toEqual(recipe);
  });
});
