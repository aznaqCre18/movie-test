import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PagePersist from './pages/PagePersistTodo';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={LandingPage} />
      <Route path="/persist" component={PagePersist} />
    </BrowserRouter>
  )
};

export default App;
