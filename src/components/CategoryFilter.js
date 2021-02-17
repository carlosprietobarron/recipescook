import React from 'react';
import propTypes from 'prop-types';
import categories from '../resources/categories';

function CategoryFilter(props) {
  const allCategories = ['All', ...categories];
  const handleChange = e => {
    props.updateFilter(e.target.value);
  };

  const MakeCategory = cat => <option>{cat}</option>;

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
