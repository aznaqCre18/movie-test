import React from 'react';
import { StarIcon } from '../../configs/icons';

function MovieList({coverImage, rate, title}) {
  return (
    <div className="wrapper-movie">
      <div className="cover">
        <img src={coverImage} alt="dummy-img" width="150" height="225" />
        <div className="rate">
          <img src={StarIcon} alt="star" width="16" height="16" />
          <p>{rate}</p>
        </div>
        <div className="desc-film">
          <p className="title">{title}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieList;
