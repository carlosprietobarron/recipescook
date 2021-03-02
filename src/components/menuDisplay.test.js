import { React } from 'react';
import { shallow } from 'enzyme';
import MenuDisplay from './MenuDisplay';

describe('MenuDisplay Component', () => {
  it('should render an image without errors', () => {
    const menu = {
      idMeal: '1',
      strMeal: 'test meal',
      strMealThumb: 'testing thumb',
    };
    const container = shallow(<MenuDisplay menu={menu} />);
    const renderContainer = container.find('.menu-card-img');
    expect(renderContainer.length).toEqual(1);
  });

  it('should render a button without errors', () => {
    const menu = {
      idMeal: '1',
      strMeal: 'test meal',
      strMealThumb: 'testing thumb',
    };
    const container = shallow(<MenuDisplay menu={menu} />);
    const renderContainer = container.find('.btn');
    expect(renderContainer.length).toEqual(1);
  });

  it('should render a recipe name without errors', () => {
    const menu = {
      idMeal: '1',
      strMeal: 'test meal',
      strMealThumb: 'testing thumb',
    };
    const container = shallow(<MenuDisplay menu={menu} />);
    const renderContainer = container.find('.menu-card-name');
    expect(renderContainer.length).toEqual(1);
  });

  it('should render a menu card without errors', () => {
    const menu = {
      idMeal: '1',
      strMeal: 'test meal',
      strMealThumb: 'testing thumb',
    };
    const container = shallow(<MenuDisplay menu={menu} />);
    const renderContainer = container.find('.menu-card');
    expect(renderContainer.length).toEqual(1);
  });
});
