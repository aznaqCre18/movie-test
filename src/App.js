import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import DetailMoviePage from './pages/DetailMoviePage/component';
import GenrePage from './pages/GenrePage';
import LandingPage from './pages/LandingPage';
import ListMoviePage from './pages/ListMoviePage';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={LandingPage} />
      <Route path="/movie-list" component={ListMoviePage} />
      <Route path="/detail-movie/:id" component={DetailMoviePage} />
      <Route path="/genres" component={GenrePage} />
    </BrowserRouter>
  )
};

export default App
