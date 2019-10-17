import React from 'react';
import './App.css';
import Articulos from './components/Articulos';
import CrearArticulo from './components/CrearArticulo';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/articulos">Articulos</Link>
            </li>
            <li>
              <Link to="/crear">Crear Articulo</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/articulos">
              <Articulos />
          </Route>
          <Route path="/crear">
              <CrearArticulo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
