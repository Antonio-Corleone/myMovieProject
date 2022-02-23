import * as actDetailMovie from './constants';
import api from '../../../../utils/apiUtils';

export const actFetchDataDetailMovie = (id) => {
  return (dispatch) => {

    // dispatch(actDetailMovieRequest());
    // api
    //   .get(`QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
    //   .then(result => {
    //     dispatch(actDetailMovieSuccess(result.data.content));
    //   })
    //   .catch(error => {
    //     dispatch(actDetailMovieFailed(error))
    //   })
    
    dispatch(actShowTimeRequest());
    api
      .get(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`)
      .then(result =>{
        // console.log(result);
        dispatch(actShowTimeSuccess(result.data.content));
      })
      .catch(error => {
        // console.log(error);
        dispatch(actShowTimeFailed(error))
      })
  }
};

// const actDetailMovieRequest = () => ({
//   type: actDetailMovie.DETAIL_MOVIE_REQUEST
// });

// const actDetailMovieSuccess = (data) => ({
//   type: actDetailMovie.DETAIL_MOVIE_SUCCESS,
//   payload: data
// });

// const actDetailMovieFailed = (error) => ({
//   type: actDetailMovie.DETAIL_MOVIE_FAILED,
//   payload: error
// });

const actShowTimeRequest = () => ({
  type: actDetailMovie.SHOW_TIME_REQUEST
});
const actShowTimeSuccess = (data) => ({
  type: actDetailMovie.SHOW_TIME_SUCCESS,
  payload: data
});
const actShowTimeFailed = (error) => ({
  type: actDetailMovie.SHOW_TIME_FAILED,
  payload: error
});
