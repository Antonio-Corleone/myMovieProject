import * as actDetailMovie from './constants';
import api from '../../../../utils/apiUtils';

export const actFetchDataDetailMovie = (id) => {
  return (dispatch) => {
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
