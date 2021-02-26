import { FETCH_MENU_REQUEST } from '../types/menuTypes';
import menuReducer from './menuReducer';

describe('Category reducer', () => {
  it('should return an object with loading true', () => {
    const menu = {
      loading: true,
      data: [],
      error: '',
    };

    const newState = menuReducer(undefined, {
      types: FETCH_MENU_REQUEST,
      payload: menu,
    });

    expect(newState).toEqual(menu);
  });
});
