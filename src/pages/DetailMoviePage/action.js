import { API_KEY, SERVICES } from "../../configs/services";
import * as actionTypes from './actionTypes';
import fetch from './../../utils/fetch';

export const getDetailMovies = (id) => {
  return (dispatch) => {
    const option = {
      method: 'GET',
      url: `${SERVICES.GET_MOVIE_DETAIL}/${id}?api_key=${API_KEY}`,
    }

    fetch(option)
      .then((res) => {
        console.log(res);
        dispatch(reducerDetailMovie(res))
      })
      .catch((err) => {
        console.log(err);
      })
  }
}

function reducerDetailMovie(data) {
  return {
    type: actionTypes.GET_DETAIL_MOVIE,
    data
  }
}