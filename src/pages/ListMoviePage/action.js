import { SERVICES } from "../../configs/services"
import * as actionTypes from './actionTypes';
import fetch from "../../utils/fetch";

export const getMovieList = (page) => {
  return (dispatch) => {
    const option = {
      method: 'GET',
      url: `${SERVICES.GET_MOVIE_LIST}&page=${page}`,
    }

    console.log(option)

    fetch(option)
      .then((res) => {
        console.log(res);
        dispatch(reducerGetMovieList(res));
      })
      .catch((err) => {
        console.log(err);
      })
  }
}

function reducerGetMovieList(data) {
  return {
    type: actionTypes.GET_MOVIE_LIST,
    data
  }
}