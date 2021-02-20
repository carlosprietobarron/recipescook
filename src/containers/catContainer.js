/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCat, changeFilter } from '../redux/actions';
import CategoryFilter from '../components/CategoryFilter';
import CatDisplay from '../components/CatDisplay'

function CatContainer({catData, filter, fetchCat, changeCategoryFilter}) {
    const filteredCat = () => {
        console.log("filteredCat",catData.data);
        console.log("filter ",filter, filter.filter);
        console.log(filter.filter.toString() !== 'All');
        if (String(filter.filter) !== "All") {
          console.log("data",catData.data[1].strCategory);
          console.log("inside if filter", catData.data.filter(cat => cat.strCategory === filter));
          return catData.data.filter(cat => cat.strCategory.category === filter);
        }
        console.log("all cats", catData.data);
        return catData.data;
    };
    
    const callCategory = cat => {
          console.log("callcat", cat);
          return <h1>{cat.strCategory}</h1>
    }

    const changeFilter = key => {
      changeCategoryFilter(key);
    };

    const allCategories= catData.data.map(x => x.strCategory);

    useEffect(() => { fetchCat() },[]);

    return catData.loading ? (
        <h2>Data loading</h2>
    ) : catData.error ? (
        <h2>{catData.error}</h2>
    ) : ( 
      <div>
        <CategoryFilter updateFilter={changeFilter} categories={allCategories} /> 
        <div>
          <h1>call filtered cat</h1>
          {filteredCat().map(callCategory)}
        </div>
      </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        catData: state.cat,
        filter: state.filter  
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchCat: () => {
            dispatch(fetchCat())
        },
        changeCategoryFilter: category => {
          dispatch(changeFilter(category));
        },
    }
}

export default connect( mapStateToProps, mapDispatchToProps) (CatContainer)
