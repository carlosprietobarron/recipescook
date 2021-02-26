import React from 'react'

function RecipeDisplay({menu}) {
    console.log("recipe", menu);
    return (
        <div className="recipe-card">
           <div className="recipe-card-head">
            <img className="recipe-card-img" src={menu.strMealThumb} alt="recipe"/>
           </div>
           <div className="recipe-card-bottom">
             <div className="recipe-card-text">
               <p>{menu.strInstructions}</p>
             </div>
           </div>
        </div>
    )
}

export default RecipeDisplay

{/* <div className="recipe-card-data">
  <div className="recipe-card-name">
    <h5>{menu.strMeal}</h5>
  </div>
</div> */}