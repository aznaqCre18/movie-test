import React, { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/component';
import Header from './../../components/Header';
import { useDispatch } from 'react-redux';
import * as actionListMovie from './action';
import { useSelector } from 'react-redux';
import { IMG_BASE_URL } from '../../configs/services';
import { Link } from 'react-router-dom';
import { LeftIcon, RightIcon } from '../../configs/icons';

function ListMoviePage() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const listMovie = useSelector(state => state.ListMovie.listMovies);

  useEffect(() => {
    dispatch(actionListMovie.getMovieList(page));
  }, [dispatch, page]);

  const _handleNextPage = () => {
    setPage(page + 1);
    dispatch(actionListMovie.getMovieList(page));
  }

  const _handlePrevPage = () => {
    setPage(page - 1);
    dispatch(actionListMovie.getMovieList(page));
  }

  return (
    <div>
      <Header />
      <div className="list-movie-container">
        <h1 className="title">Movie List</h1>
        <div className="wrapper-movie-list">
          {
            listMovie !== null ? (
              listMovie.results.map((movie, idx) => {
                return (
                  <Link to={`/detail-movie/${movie.id}`} >
                    <MovieList 
                      coverImage={`${IMG_BASE_URL}/${movie.poster_path}`}
                      rate={movie.vote_average}
                      title={movie.title}
                      key={idx}
                    />
                  </Link>
                )
              })
            ) : (
              <div>Tidak ada film</div>
            )
          }
        </div>
        <div className="button-next-prev">
          <button disabled={page < 1 || page === 1} onClick={_handlePrevPage} className={`btn-paging ${page < 1 || page === 1 ? 'disable' : ''}`}>
            <img src={LeftIcon} alt="left" width="10" height="15" />
            <p className="label" >Prev</p>
          </button>
          <p>{page} of {listMovie !== null ?  listMovie.total_pages : null}</p>
          <button disabled={page > 16 || page === 16} onClick={_handleNextPage} className={`btn-paging ${page > 16 || page === 16 ? 'disable' : ''}`} >
            <p className="label" >Next</p>
            <img src={RightIcon} alt="right" width="10" height="15" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ListMoviePage;
