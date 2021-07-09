import React from 'react';
import Issues from './Issues';
import Details from './Details';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Issues />
            </Route>

            <Route path="/issues/:id">
              <Details />
            </Route>
          </Switch>
        </div>
      </>
    </Router>
  );
}
