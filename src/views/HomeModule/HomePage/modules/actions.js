import api from "../../../../utils/apiUtils";
import * as actHomePage from './constants';
import { actShowLoading, actHideLoading } from '../../../../components/Loading/modules/actions';

export const actFetchDataHomePage = () => {
  return (dispatch) => {
    // Get Banner
    dispatch(actBannerMovieRequest());
    dispatch(actShowLoading());
    api
      .get('QuanLyPhim/LayDanhSachBanner')
      .then(result => {
        dispatch(actBannerMovieSuccess(result.data.content))
        dispatch(actHideLoading());
      })
      .catch(error => {
        dispatch(actBannerMovieFailed(error))
        dispatch(actHideLoading());
      })
    // Get List Showing
    dispatch(actListShowingRequest())
    dispatch(actShowLoading());
    api
      .get('QuanLyPhim/LayDanhSachPhim?maNhom=GP03')
      .then(result => {
        dispatch(actListShowingSuccess(result.data.content));
        dispatch(actHideLoading());
      })
      .catch(error => {
        dispatch(actListShowingFailed(error));
        dispatch(actHideLoading());
      })
  };
};

// Banner actions
const actBannerMovieRequest = () => ({
  type: actHomePage.BANNER_MOVIE_REQUEST
});

const actBannerMovieSuccess = (data) => ({
  type: actHomePage.BANNER_MOVIE_SUCCESS,
  payload: data
});

const actBannerMovieFailed = (error) => ({
  type: actHomePage.BANNER_MOVIE_FAILED,
  payload: error
});

// List Showing actions
const actListShowingRequest = () => ({
  type: actHomePage.LIST_SHOWING_REQUEST
});

const actListShowingSuccess = (data) => ({
  type: actHomePage.LIST_SHOWING_SUCCESS,
  payload: data
});

const actListShowingFailed = (error) => ({
  type: actHomePage.LIST_SHOWING_FAILED,
  payload: error
});