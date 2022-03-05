import * as actDetailMovie from './constants';
import api from '../../../../utils/apiUtils';
import { actShowLoading, actHideLoading } from '../../../../components/Loading/modules/actions'

export const actFetchDataDetailMovie = (id) => {
  return (dispatch) => {
    dispatch(actShowTimeRequest());
    dispatch(actShowLoading());
    api
      .get(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`)
      .then(result => {
        // console.log(result);
        dispatch(actShowTimeSuccess(result.data.content));
        dispatch(actHideLoading());
      })
      .catch(error => {
        // console.log(error);
        dispatch(actShowTimeFailed(error))
        dispatch(actHideLoading());
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
