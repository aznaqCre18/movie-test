import fetch from "../../utils/fetch";
import * as actionTypes from './actionTypes';
import { SERVICES } from "../../configs/services";

export const getAllGenres = () => {
  return (dispatch) => {
    const option = {
      method: 'GET',
      url: SERVICES.GET_ALL_GENRES,
    }
    fetch(option)
      .then((res) => {
        console.log(res);
        dispatch(reducerGetAll(res.genres));
      })
      .catch((err) => {
        console.log(err, "error get data")
      })
  }
}

function reducerGetAll(data) {
  return {
    type: actionTypes.GET_GENRES,
    data
  }
}