import * as actionTypes from './actionTypes';

const initialState = {
  dataGenres: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_GENRES:
      return {
        ...state,
        dataGenres: action.data,
      };
    default:
      return state;
  }
}

export default reducer;