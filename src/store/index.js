import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";

import GenreReducer from './../pages/GenrePage/reducer';
import ListMovieReducer from './../pages/ListMoviePage/reducer';
import DetailMovie from './../pages/DetailMoviePage/reducer';

const rootReducer = combineReducers({
  Genre: GenreReducer,
  ListMovie: ListMovieReducer,
  DetailMovie,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;