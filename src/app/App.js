import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TagsView from '../views/Tags'

export default function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/">
            <TagsView />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
