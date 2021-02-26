/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { PropTypes } from 'prop-types';

function CatDisplay({ cat }) {
  console.log('catdisplay', cat);
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
  cat: PropTypes.any,
};

export default CatDisplay;
