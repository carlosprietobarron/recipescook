/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCat, fetchMenu, changeFilter } from '../redux/actions';
import CategoryFilter from '../components/CategoryFilter';
import MenuDisplay from '../components/MenuDisplay';
import CatDisplay from '../components/CatDisplay';

function CatContainer(props) {
  const {
    catData, menuData, fetchCat, fetchMenu, changeCategoryFilter,
  } = props;

  const [cat, setCat] = useState({
    strCategory: 'Beef',
    strCategoryDescription: 'Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]',
    strCategoryThumb: 'https://www.themealdb.com/images/category/beef.png',
  });

  const returnCat = category => {
    setCat({
      strCategory: category.strCategory,
      strCategoryDescription: category.strCategoryDescription,
      strCategoryThumb: category.strCategoryThumb,
    });
  };

  const callMenu = menu => <MenuDisplay key={menu.idMeal} menu={menu} />;

  const result = key => catData.data.find(obj => obj.strCategory === key);

  const changeFilter = key => {
    changeCategoryFilter(key);
    fetchMenu(key);
    returnCat(result(key));
  };

  const allCategories = catData.data.map(x => x.strCategory);

  useEffect(() => { fetchCat(); }, []);
  useEffect(() => { fetchMenu('Beef'); }, []);

  return catData.loading ? (
    <h2>Data loading</h2>
  ) : catData.error ? (
    <h2>{catData.error}</h2>
  ) : (
    <div>
      <header className="header-menu">
        <div className="header-menu-category">
          <CatDisplay cat={cat} />
        </div>
        <div className="header-menu-filter">
          <CategoryFilter updateFilter={changeFilter} categories={allCategories} />
        </div>
      </header>
      <div className="menu-display">
        {menuData.data.map(callMenu)}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  catData: state.cat,
  menuData: state.menu,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  fetchCat: () => {
    dispatch(fetchCat());
  },
  fetchMenu: category => {
    dispatch(fetchMenu(category));
  },
  changeCategoryFilter: category => {
    dispatch(changeFilter(category));
  },
});

CatContainer.propTypes = {
  loading: PropTypes.any,
  catData: PropTypes.any,
  menuData: PropTypes.any,
  fetchCat: PropTypes.func,
  fetchMenu: PropTypes.func,
  changeCategoryFilter: PropTypes.func,

};

export default connect(mapStateToProps, mapDispatchToProps)(CatContainer);
