import { combineReducers } from 'redux';

import GenreReducer from './../pages/GenrePage/reducer';
import ListMovieReducer from './../pages/ListMoviePage/reducer';
import DetailMovie from './../pages/DetailMoviePage/reducer';
import TodoListRed from './../pages/PagePersist/reducer';

const rootReducer = combineReducers({
  Genre: GenreReducer,
  ListMovie: ListMovieReducer,
  DetailMovie,
  TodoListRed,
});

export default rootReducer;