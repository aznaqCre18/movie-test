import * as actionTypes from './actionTypes';

const initialState = {
  detailMovie: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_DETAIL_MOVIE:
      return {
        ...state,
        detailMovie: action.data
      }
  
    default:
      return state;
  }
}

export default reducer;