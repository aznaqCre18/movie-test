import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import Header from '../../components/Header';
import * as actionGenre from './action';

function GenrePage() {
  const dispatch = useDispatch();
  const genreList = useSelector(state => state.Genre.dataGenres);
  
  useEffect(() => {
    dispatch(actionGenre.getAllGenres());
  }, [dispatch]);
  return (
    <React.Fragment>
      <Header />
      <div className="genre-container">
        <h1>Genre List</h1>
        <div className="genre-list">
          {
            genreList !== null ? (
              genreList.map((genre, idx) => {
                return (
                  <p key={idx} >{genre.name}</p>
                )
              })
            ) : (
              <div>Refress Halaman Lagi</div>
            )
          }
        </div>
      </div>
    </React.Fragment>
  )
}

export default GenrePage
