import React from 'react';
import propTypes from 'prop-types';

function CategoryFilter({categories, updateFilter}) {
  const allCategories = [...categories];
  
  const handleChange = e => {
    updateFilter(e.target.value);
  };

  const MakeCategory = cat => <option id={cat} key={cat} >{cat}</option>;
  console.log("allCategories", categories);
  return (
    <div>
      <form>
        <select className="cat-filter" id="categoryFilter" onChange={e => { handleChange(e); }}>
          {allCategories.map(MakeCategory)}
        </select>
      </form>
    </div>
  );
}

CategoryFilter.propTypes = {
  updateFilter: propTypes.func.isRequired,
};

export default CategoryFilter;
