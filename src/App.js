import './App.css';
import CatContainer from './containers/catContainer'
import recipeContainer from './containers/recipeContainer'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>Let's get started!</h1>
      <Switch>
        <Route path="/" component={CatContainer} exact />
        <Route path="/recipes/:recipe" component={recipeContainer} />
      </Switch>
    </div>
  );
}

export default App;
