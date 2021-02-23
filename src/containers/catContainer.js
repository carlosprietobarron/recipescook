/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCat, fetchMenu, changeFilter, changeCat } from '../redux/actions';
import CategoryFilter from '../components/CategoryFilter';
import MenuDisplay from '../components/MenuDisplay'

function CatContainer({catData, menuData, filter, fetchCat, fetchMenu, changeCategoryFilter}) {
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

    const changeFilter = key => {
      changeCategoryFilter(key);
      console.log("filter key", key.toString());
      fetchMenu(key);
    };

    const allCategories= catData.data.map(x => x.strCategory);
    console.log("allcaategories at begining", catData.data);

    useEffect(() => { fetchCat() },[]);

    return catData.loading ? (
        <h2>Data loading</h2>
    ) : catData.error ? (
        <h2>{catData.error}</h2>
    ) : ( 
      <div>
        <header>
          <CategoryFilter updateFilter={changeFilter} categories={allCategories} />
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
