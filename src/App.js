import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import WorksListPage from './pages/WorksListPage';
import WorkCreatePage from './pages/WorkCreatePage';
import WorkEditPage from './pages/WorkEditPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <WorksListPage />
        </Route>
        <Route path="/create">
          <WorkCreatePage />
        </Route>
        <Route path="/edit/:slug">
          <WorkEditPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
