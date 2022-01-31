import React from 'react';
import List from './pokemon/List/pokemonList';
import View from './pokemon/View/pokemonView';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import './syle.css';

export default function App() {
  return (
    <div className="App">
      <Router>
        <h1>
          <Link to="/pokemons/list">PokeLista</Link>
        </h1>
        <Switch>
          <Route path="/pokemons/list" component={List} />
          <Route path="/pokemons/:name" component={View} />
          <Route path="/" exact>
            <Redirect to="/pokemons/list" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
