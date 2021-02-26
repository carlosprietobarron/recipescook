import { FETCH_CATEGORIES_REQUEST } from '../types/catTypes';
import catReducer from './catReducer';

describe('Category reducer', () => {
  it('should return an object with attribute loading  = true', () => {
    const categories = {
      loading: true,
      data: [],
      error: '',
    };

    const newState = catReducer(undefined, {
      types: FETCH_CATEGORIES_REQUEST,
      payload: categories,
    });

    expect(newState).toEqual(categories);
  });
});