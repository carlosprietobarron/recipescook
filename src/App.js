import './App.css';
import CatContainer from './containers/catContainer'
import recipeContainer from './containers/recipeContainer'
import { Route, Switch } from 'react-router-dom'
import { useState } from 'react';
import CatDisplay from './components/CatDisplay'

function App() {
  const  [cat, setCat]  = useState({
    strCategory: '',
    strCategoryDescription: '',
    strCategoryThumb: '',
  });

  const returnedcat = category=> {
    console.log("Returned Cat to app", category);
    setCat({
      strCategory: category.strCategory,
      strCategoryDescription: category.strCategoryDescription,
      strCategoryThumb: category.strCategoryThumb,
    })
  };

  return (
    <div className="App">
      <div className="top-header">
        <h1>Tasty World!</h1>
      </div>
      <Switch>
        <Route path="/" render= {() => <CatContainer returnCat={returnedcat}/>} exact />
        <Route path="/recipes/:recipe" component={recipeContainer} />
      </Switch>
    </div>
  );
}

export default App;

//<Route path="/" component={CatContainer} exact />
