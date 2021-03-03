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
  categories: propTypes.arrayOf(propTypes.string),
  updateFilter: propTypes.func.isRequired,
};

CategoryFilter.defaultProps = {
  categories: [],
};

export default CategoryFilter;
