import { React } from 'react';
import { shallow } from 'enzyme';
import RecipeDisplay from './RecipeDisplay';

describe('MenuDisplay Component', () => {
  it('should render an image without errors', () => {
    const menu = {
      idMeal: '1',
      strMeal: 'test meal',
      strMealThumb: 'testing thumb',
      strInstructions: 'Recipe Instructions',
    };
    const container = shallow(<RecipeDisplay menu={menu} />);
    console.log(container);
    const renderContainer = container.find('.recipe-card-img');
    expect(renderContainer.length).toEqual(1);
  });

  it('should render a recipe name without errors', () => {
    const menu = {
      idMeal: '1',
      strMeal: 'test meal',
      strMealThumb: 'testing thumb',
      strInstructions: 'Recipe Instructions',
    };
    const container = shallow(<RecipeDisplay menu={menu} />);
    const renderContainer = container.find('.recipe-card-name');
    expect(renderContainer.length).toEqual(1);
  });

  it('should render a recipe card without errors', () => {
    const menu = {
      idMeal: '1',
      strMeal: 'test meal',
      strMealThumb: 'testing thumb',
      strInstructions: 'Recipe Instructions',
    };
    const container = shallow(<RecipeDisplay menu={menu} />);
    const renderContainer = container.find('.recipe-card');
    expect(renderContainer.length).toEqual(1);
  });

  it('should render a recipe instruction paragraph without errors', () => {
    const menu = {
      idMeal: '1',
      strMeal: 'test meal',
      strMealThumb: 'testing thumb',
      strInstructions: 'Recipe Instructions',
    };
    const container = shallow(<RecipeDisplay menu={menu} />);
    const renderContainer = container.find('.recipe-card-text');
    expect(renderContainer.length).toEqual(1);
  });
});
