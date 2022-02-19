import * as actDetailMovie from './constants';
import api from '../../../../utils/apiUtils';

export const actFetchDataDetailMovie = (id) => {
  return (dispatch) => {
    dispatch(actDetailMovieRequest());

    api
      .get(`QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
      .then(result => {
        dispatch(actDetailMovieSuccess(result.data.content));
      })
      .catch(error => {
        dispatch(actDetailMovieFailed(error))
      })
  }
};

const actDetailMovieRequest = () => ({
  type: actDetailMovie.DETAIL_MOVIE_REQUEST
});

const actDetailMovieSuccess = (data) => ({
  type: actDetailMovie.DETAIL_MOVIE_SUCCESS,
  payload: data
});

const actDetailMovieFailed = (error) => ({
  type: actDetailMovie.DETAIL_MOVIE_FAILED,
  payload: error
});
