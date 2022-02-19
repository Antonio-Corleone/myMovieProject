import api from "../../../../utils/apiUtils";
import * as actHomePage from './constants';

export const actFetchDataHomePage = () => {
  return (dispatch) => {
    // Get Banner
    dispatch(actBannerMovieRequest());
    api
      .get('QuanLyPhim/LayDanhSachBanner')
      .then(result => {
        dispatch(actBannerMovieSuccess(result.data.content))
      })
      .catch(error => {
        dispatch(actBannerMovieFailed(error))
      })
    // Get List Showing
    dispatch(actListShowingRequest())
    api
      .get('QuanLyPhim/LayDanhSachPhim?maNhom=GP05')
      .then(result => {
        dispatch(actListShowingSuccess(result.data.content))
      })
      .catch(error => {
        dispatch(actListShowingFailed(error))
      })
    // Get List Coming
    dispatch(actListComingRequest())
    api
      .get('QuanLyPhim/LayDanhSachPhim?maNhom=GP06')
      .then(result => {
        dispatch(actListComingSuccess(result.data.content))
      })
      .catch(error=> {
        dispatch(actListComingFailed(error))
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

// List Coming actions
const actListComingRequest = () => ({
  type: actHomePage.LIST_COMING_REQUEST
});

const actListComingSuccess = (data) => ({
  type: actHomePage.LIST_COMING_SUCCESS,
  payload: data
});

const actListComingFailed = (error) => ({
  type: actHomePage.LIST_COMING_FAILED,
  payload: error
});
