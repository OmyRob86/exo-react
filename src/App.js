import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import CreateComments from './pages/CreateComments';
import DeleteComments from './pages/DeleteComments';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/comments/create" component={CreateComments} />
        <Route path="/comments/delete" component={DeleteComments} />
      </Switch>
    </Router>
  );
}

export default App;
