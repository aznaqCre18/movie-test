import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import DetailMoviePage from './pages/DetailMoviePage/component';
import GenrePage from './pages/GenrePage';
import LandingPage from './pages/LandingPage';
import ListMoviePage from './pages/ListMoviePage';
import PagePersist from './pages/PagePersist';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={LandingPage} />
      <Route path="/movie-list" component={ListMoviePage} />
      <Route path="/detail-movie/:id" component={DetailMoviePage} />
      <Route path="/genres" component={GenrePage} />
      <Route path="/persist" component={PagePersist} />
    </BrowserRouter>
  )
};

export default App;
