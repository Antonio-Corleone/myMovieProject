import * as actListMovie from './constants';
import api from '../../../../utils/apiUtils';

export const actFetchDataListMovie = () => {
  return (dispatch) => {
    dispatch(actShowingMovieRequest());
    api
      .get('QuanLyPhim/LayDanhSachPhim?maNhom=GP03')
      .then(result => {
        dispatch(actShowingMovieSuccess(result.data.content))
      })
      .catch(error => {
        dispatch(actShowingMovieFailed(error))
      })

    dispatch(actComingMovieRequest());
    api
      .get('QuanLyPhim/LayDanhSachPhim?maNhom=GP04')
      .then(result => {
        dispatch(actComingMovieSuccess(result.data.content))
      })
      .catch(error => {
        dispatch(actComingMovieFailed(error))
      })
  }
}

const actShowingMovieRequest = () => ({
  type: actListMovie.SHOWING_MOVIE_REQUEST
});

const actShowingMovieSuccess = (data) => ({
  type: actListMovie.SHOWING_MOVIE_SUCCESS,
  payload: data
});

const actShowingMovieFailed = (error) => ({
  type: actListMovie.SHOWING_MOVIE_FAILED,
  payload: error
});

const actComingMovieRequest = () => ({
  type: actListMovie.COMING_MOVIE_REQUEST
});

const actComingMovieSuccess = (data) => ({
  type: actListMovie.COMING_MOVIE_SUCCESS,
  payload: data
});

const actComingMovieFailed = (error) => ({
  type: actListMovie.COMING_MOVIE_FAILED,
  payload: error
});