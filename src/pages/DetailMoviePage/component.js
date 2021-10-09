import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import { StarIcon } from '../../configs/icons';
import { IMG_BASE_URL } from '../../configs/services';
import * as actionDetailMovie from './action';

function DetailMoviePage() {
  let { id } = useParams();
  const detailMovie = useSelector(state => state.DetailMovie.detailMovie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionDetailMovie.getDetailMovies(id));
  }, [dispatch, id]);
    
  console.log(detailMovie);
  return (
    <React.Fragment>
      <Header />
      <div className="detail-movie-container">
        <div className="banner-wrapper">
          <img src={`${IMG_BASE_URL}/${detailMovie && detailMovie.backdrop_path}`} alt="img backdrop" className="banner" />
          <div className="cover-wrapper">
            <img src={`${IMG_BASE_URL}/${detailMovie && detailMovie.poster_path}`} alt="poster-path" className="cover-img"  />
            <div className="title-desc">
              <h1 className="title-novie">{detailMovie && detailMovie.title}</h1>
              <div className="rate">
                <img src={StarIcon} alt="star-icon" />
                <p>{detailMovie && detailMovie.vote_average}</p>
              </div>
                {
                  detailMovie && detailMovie.genres.map((genre, idx) => {
                    return (
                      <span key={idx} className="genre">
                        {`${genre.name}, `}&nbsp;
                      </span>
                    )
                  })
                }
              <p className="duration">{detailMovie && detailMovie.runtime} m</p>
            </div>
          </div>
        </div>
        <div className="detail-section">
          <div className="overview-wrapper">
            <h1>Overview</h1>
            <p className="overview-desc">
              {detailMovie && detailMovie.overview}
            </p>
          </div>
          <div className="production-companies">
            <h1>Production Companies</h1>
            <div className="prod-list">
              {
                detailMovie && detailMovie.production_companies.map((comp, idx) => {
                  return (
                    <div className="companies">
                      <img src={`${IMG_BASE_URL}/${comp.logo_path}`} alt="logo" width="60" />
                      <div className="desc-comp">
                        <p>{comp.name}</p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default DetailMoviePage;
