import React from 'react';
import { PropTypes } from 'prop-types';

function CatDisplay({ cat }) {
  return (
    <div className="cat-card">
      <div className="cat-card-head">
        <img className="cat-card-img" src={cat.strCategoryThumb} alt="categpry" />
      </div>
      <div className="cat-card-data">
        <div className="cat-card-catname">
          <h5>{cat.strCategory}</h5>
        </div>
        <div className="cat-card-catdesc">
          <p>{cat.strCategoryDescription}</p>
        </div>
      </div>
    </div>
  );
}

CatDisplay.propTypes = {
  cat: PropTypes.shape({
    strCategory: PropTypes.string,
    strCategoryDescription: PropTypes.string,
    strCategoryThumb: PropTypes.string,
  }),
};

CatDisplay.defaultProps = {
  cat: PropTypes.shape({
    strCategory: '',
    strCategoryDescription: '',
    strCategoryThumb: '',
  }),
};

export default CatDisplay;
