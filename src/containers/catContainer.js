/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCat, fetchMenu, changeFilter, changeCat } from '../redux/actions';
import CategoryFilter from '../components/CategoryFilter';
import MenuDisplay from '../components/MenuDisplay'
import CatDisplay from '../components/CatDisplay'

function CatContainer(props) {
    const {catData, menuData, filter, fetchCat, fetchMenu, changeCategoryFilter} = props;
    //const { returnCat } = props;

    const  [cat, setCat]  = useState({
      strCategory: 'Beef',
      strCategoryDescription: 'Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]',
      strCategoryThumb: 'https://www.themealdb.com/images/category/beef.png',
    });

    // console.log("Cat...", cat);

    const returnCat = category=> {
      console.log("Returned Cat to app", category);
      setCat({
        strCategory: category.strCategory,
        strCategoryDescription: category.strCategoryDescription,
        strCategoryThumb: category.strCategoryThumb,
      })
    };
    
    const filteredCat = () => {
        console.log("filteredCat",catData.data);

        console.log("filter ",filter, filter.filter);

        console.log(filter.filter.toString() !== 'All');

        if (String(filter.filter) !== "All") {
          console.log("data",catData.data[1].strCategory);
          const dataFiltered  = catData.data.filter(cat => cat.strCategory === filter.filter);
          console.log("inside if filter", dataFiltered);
          return dataFiltered;
        }
        console.log("all cats", catData.data);
        return catData.data;
    };
    
    const callCategory = cat => {
          console.log("callcat", cat);
          return <h1>{cat.strCategory}</h1>
    }

    const callMenu = menu => {
      console.log("callMenu", menu);
      return <MenuDisplay menu={menu} />
    }

    const result = key => catData.data.find(obj => {
      return obj.strCategory === key;
    });



    const changeFilter = key => {
      changeCategoryFilter(key);
      console.log("filter key", key.toString());
      fetchMenu(key);
      returnCat(result(key));
    };

    const allCategories= catData.data.map(x => x.strCategory);
    console.log("allcaategories at begining", catData.data);

    useEffect(() => { fetchCat() },[]);
    useEffect(() => { fetchMenu("Beef") },[]);

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
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        catData: state.cat,
        menuData: state.menu,
        filter: state.filter  
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchCat: () => {
            dispatch(fetchCat())
        },
        fetchMenu: category => {
          dispatch(fetchMenu(category))
        },
        changeCategoryFilter: category => {
          dispatch(changeFilter(category));
         // dispatch(changeCat(category));
        },
    }
}

export default connect( mapStateToProps, mapDispatchToProps) (CatContainer)
