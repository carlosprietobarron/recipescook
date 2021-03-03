import './App.css';
import { Route, Switch } from 'react-router-dom';
import CatContainer from './containers/catContainer';
import recipeContainer from './containers/recipeContainer';

function App() {
  return (
    <div className="App">
      <div className="top-header">
        <h1>Tasty World!</h1>
      </div>
      <Switch>
        <Route path="/" component={CatContainer} exact />
        <Route path="/recipes/:recipe" component={recipeContainer} />
      </Switch>
    </div>
  );
}

export default App;
