import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import WorksListPage from './pages/WorksListPage';
import WorkCreatePage from './pages/WorkCreatePage';
import WorkEditPage from './pages/WorkEditPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <WorksListPage />
        </Route>
        <Route exact path="/create">
          <WorkCreatePage />
        </Route>
        <Route exact path="/edit/:slug">
          <WorkEditPage />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
