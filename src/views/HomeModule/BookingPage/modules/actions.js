import * as actBook from './constants';
import api from '../../../../utils/apiUtils';
import { actShowLoading, actHideLoading } from '../../../../components/Loading/modules/actions'

export const actFetchListTickets = (showID) => {
  return (dispatch) => {
    dispatch(actListTicketRequest());
    dispatch(actShowLoading());
    api
      .get(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${showID}`)
      .then(result => {
        // console.log(result);
        dispatch(actListTicketSuccess(result.data.content));
        dispatch(actHideLoading())
      })
      .catch(error => {
        // console.log(error);
        dispatch(actListTicketFailed(error))
        dispatch(actHideLoading())
      })
  }
};

const actListTicketRequest = () => ({
  type: actBook.BOOKING_TICKET_REQUEST
});

const actListTicketSuccess = (data) => ({
  type: actBook.BOOKING_TICKET_SUCCESS,
  payload: data
});

const actListTicketFailed = (error) => ({
  type: actBook.BOOKING_TICKET_FAILED,
  payload: error
});

export const actBookChair = (chair) => ({
  type: actBook.BOOKING_TICKET_BOOK,
  payload: chair
});

export const actBookedTicket = (data, alert) => {
  return (dispatch) => {
    dispatch(actShowLoading());
    api
      .post('QuanLyDatVe/DatVe', data)
      .then(result => {
        dispatch(actFetchListTickets(data.maLichChieu))
      })
      .then(()=>{
        dispatch({type:actBook.BOOKING_COMPLETE});
        dispatch(actHideLoading())
      })
      .then(()=>{
        dispatch({type:actBook.CHANGE_TAB, payload:'2'});
      })
      .catch(error => {
        dispatch(actHideLoading());
        alert('error', "Can't connect to server");
      })
  }
};

export const actFetchUserInfo = () => {
  return (dispatch) => {
    dispatch(actUserInfoRequest());
    dispatch(actShowLoading());
    api
      .post('QuanLyNguoiDung/ThongTinTaiKhoan')
      .then(result => {
        dispatch(actUserInfoSuccess(result.data.content));
        dispatch(actHideLoading());
      })
      .catch(error => {
        dispatch(actUserInfoFailed(error))
        dispatch(actHideLoading());
      })
  }
};

const actUserInfoRequest = () => ({
  type: actBook.USER_INFO_REQUEST
});

const actUserInfoSuccess = (data) => ({
  type: actBook.USER_INFO_SUCCESS,
  payload: data
});

const actUserInfoFailed = (error) => ({
  type: actBook.USER_INFO_FAILED,
  payload: error
});
