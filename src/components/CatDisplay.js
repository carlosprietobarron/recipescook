import React from 'react'

function CatDisplay({cat}) {
    return (
        <div className="cat-card">
           <div className="cat-card-head">
            <img className="cat-card-img" src="{cat.strCategoryThumb}" alt="categpry"/>
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
    )
}

export default CatDisplay
