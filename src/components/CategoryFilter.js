/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import propTypes from 'prop-types';

function CategoryFilter({ categories, updateFilter }) {
  const allCategories = [...categories];

  const handleChange = e => {
    updateFilter(e.target.value);
  };

  const MakeCategory = cat => <option id={cat} key={cat}>{cat}</option>;
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
  categories: propTypes.any,
  updateFilter: propTypes.func.isRequired,
};

export default CategoryFilter;
