import * as actionTypes from './actionTypes';

const initialState = {
  listMovies: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_MOVIE_LIST:
      return {
        ...state,
        listMovies: action.data
      }
  
    default:
      return state;
  }
}

export default reducer;